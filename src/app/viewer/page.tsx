"use client";

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function ExternalContentViewer() {
  const searchParams = useSearchParams();
  const url = searchParams.get('url');
  const title = searchParams.get('title') || '外部内容';
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 5秒后自动隐藏加载状态，即使iframe可能仍在加载
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // 检查URL是否有效
  useEffect(() => {
    if (!url) {
      setError('未提供URL参数');
      setLoading(false);
      return;
    }

    try {
      new URL(url); // 验证URL格式
    } catch (e) {
      setError('提供的URL格式无效');
      setLoading(false);
    }
  }, [url]);

  // iframe加载完成处理
  const handleIframeLoad = () => {
    setLoading(false);
  };

  // iframe加载错误处理
  const handleIframeError = () => {
    setError('无法加载内容，可能是目标网站不允许在iframe中显示');
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center">
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
            
            {url && (
              <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline dark:text-blue-400"
              >
                在新窗口打开
              </a>
            )}
          </div>
          
          {loading && (
            <div className="flex justify-center items-center h-96">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          )}
          
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-100 dark:border-red-800 text-center">
              <p className="text-red-700 dark:text-red-300">{error}</p>
              <a 
                href={url || '#'} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-600 hover:underline dark:text-blue-400"
              >
                直接访问原网站
              </a>
            </div>
          )}
          
          {url && !error && (
            <div className={`w-full ${loading ? 'hidden' : 'block'}`}>
              <iframe 
                src={url}
                className="w-full h-[calc(100vh-200px)] border-0 rounded-lg shadow-lg"
                onLoad={handleIframeLoad}
                onError={handleIframeError}
                sandbox="allow-scripts allow-same-origin allow-forms"
                title={title}
              />
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 