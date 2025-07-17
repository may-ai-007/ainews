"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function ReaderView() {
  const searchParams = useSearchParams();
  const url = searchParams.get('url');
  const title = searchParams.get('title') || '文章内容';
  const [content, setContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!url) {
      setError('未提供URL参数');
      setLoading(false);
      return;
    }

    const fetchContent = async () => {
      try {
        // 使用我们的代理API获取内容
        const response = await fetch(`/api/proxy?url=${encodeURIComponent(url)}`);
        
        if (!response.ok) {
          throw new Error(`请求失败: ${response.status}`);
        }
        
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error('获取内容错误:', error);
        setError('无法获取文章内容');
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [url]);

  // 简单的HTML解析和清理函数
  const parseAndCleanHtml = (html: string) => {
    // 创建一个临时的DOM元素来解析HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    // 尝试找到主要内容区域
    const mainContent = 
      doc.querySelector('article') || 
      doc.querySelector('main') || 
      doc.querySelector('.content') || 
      doc.querySelector('.article') ||
      doc.body;
      
    return mainContent ? mainContent.innerHTML : html;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="mb-6 flex items-center">
            <Link 
              href="javascript:history.back()" 
              className="mr-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <ArrowLeftIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </Link>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h1>
          </div>
          
          {loading && (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          )}
          
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-100 dark:border-red-800 text-center">
              <p className="text-red-700 dark:text-red-300">{error}</p>
              {url && (
                <a 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-blue-600 hover:underline dark:text-blue-400"
                >
                  直接访问原网站
                </a>
              )}
            </div>
          )}
          
          {content && !loading && !error && (
            <div className="mt-8">
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <div dangerouslySetInnerHTML={{ __html: parseAndCleanHtml(content) }} />
              </div>
              
              <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  这是通过阅读视图展示的内容，可能与原始页面有所不同
                </p>
                {url && (
                  <a 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-blue-600 hover:underline dark:text-blue-400"
                  >
                    访问原始页面
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 