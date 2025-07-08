import { NextRequest, NextResponse } from 'next/server';

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
    
    // 获取响应内容
    const contentType = response.headers.get('content-type') || 'text/html';
    let content;
    
    if (contentType.includes('application/json')) {
      content = await response.json();
      return NextResponse.json(content);
    } else {
      content = await response.text();
      
      // 对HTML内容进行处理，修改所有相对URL为绝对URL
      if (contentType.includes('text/html')) {
        const baseUrl = new URL(url);
        content = content.replace(/(href|src)="\/([^"]*)"/g, `$1="${baseUrl.origin}/$2"`);
      }
      
      return new NextResponse(content, {
        headers: {
          'Content-Type': contentType
        }
      });
    }
  } catch (error) {
    console.error('代理请求错误:', error);
    return NextResponse.json({ error: '无法获取请求的内容' }, { status: 500 });
  }
} 