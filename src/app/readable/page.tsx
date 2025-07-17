"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function ReadablePage() {
  const searchParams = useSearchParams();
  const url = searchParams.get('url');
  const title = searchParams.get('title');
  
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    if (!url) {
      setError('未提供URL参数');
      setLoading(false);
      return;
    }
    
    // 直接提供原始链接，而不是通过API获取内容
    setLoading(false);
  }, [url]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-3xl px-4 py-8">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
              <p className="text-red-600 dark:text-red-400">{error}</p>
              <Link href="/" className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline">
                返回首页
              </Link>
            </div>
          ) : (
            <div>
              <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                {title || '阅读模式'}
              </h1>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  由于技术限制，静态网站无法提供阅读模式功能。请直接访问原文链接：
                </p>
                
                <div className="flex justify-center">
                  <a 
                    href={url || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
                  >
                    访问原文
                  </a>
                </div>
              </div>
              
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <p>
                  阅读模式功能在静态网站部署中暂不可用。此功能需要服务器端支持才能正常工作。
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 