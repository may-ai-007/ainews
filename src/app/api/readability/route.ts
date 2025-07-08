import { NextRequest, NextResponse } from 'next/server';
import { Readability } from '@mozilla/readability';
import { JSDOM } from 'jsdom';

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get('url');
  
  if (!url) {
    return NextResponse.json({ error: '未提供URL参数' }, { status: 400 });
  }
  
  try {
    // 验证URL格式
    new URL(url);
    
    // 获取外部内容
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; AINewsBot/1.0; +https://ainews.example.com)'
      }
    });
    
    if (!response.ok) {
      throw new Error(`请求失败: ${response.status}`);
    }
    
    const html = await response.text();
    
    // 使用JSDOM解析HTML
    const dom = new JSDOM(html, { url });
    
    // 使用Readability提取主要内容
    const reader = new Readability(dom.window.document);
    const article = reader.parse();
    
    if (!article) {
      return NextResponse.json({ error: '无法提取文章内容' }, { status: 422 });
    }
    
    // 返回处理后的文章内容
    return NextResponse.json({
      title: article.title,
      content: article.content,
      textContent: article.textContent,
      excerpt: article.excerpt,
      byline: article.byline,
      siteName: article.siteName,
      length: article.length,
      originalUrl: url
    });
    
  } catch (error) {
    console.error('内容提取错误:', error);
    return NextResponse.json({ error: '无法获取或解析请求的内容' }, { status: 500 });
  }
} 