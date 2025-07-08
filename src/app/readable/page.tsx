"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

interface Article {
  title: string;
  content: string;
  excerpt: string;
  byline: string;
  siteName: string;
  length: number;
  originalUrl: string;
}

export default function ReadableView() {
  const searchParams = useSearchParams();
  const url = searchParams.get('url');
  const title = searchParams.get('title') || '文章内容';
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!url) {
      setError('未提供URL参数');
      setLoading(false);
      return;
    }

    const fetchArticle = async () => {
      try {
        // 使用我们的Readability API获取内容
        const response = await fetch(`/api/readability?url=${encodeURIComponent(url)}`);
        
        if (!response.ok) {
          throw new Error(`请求失败: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.error) {
          throw new Error(data.error);
        }
        
        setArticle(data);
      } catch (error) {
        console.error('获取内容错误:', error);
        setError('无法获取文章内容');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [url]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center">
              <Link 
                href="javascript:history.back()" 
                className="mr-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <ArrowLeftIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </Link>
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                {article?.title || title}
              </h1>
            </div>
            
            {url && (
              <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline dark:text-blue-400"
              >
                原网页
              </a>
            )}
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
          
          {article && !loading && !error && (
            <div className="mt-8">
              {/* 文章元信息 */}
              <div className="mb-8">
                {article.byline && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    作者: {article.byline}
                  </p>
                )}
                {article.siteName && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    来源: {article.siteName}
                  </p>
                )}
              </div>
              
              {/* 文章摘要 */}
              {article.excerpt && (
                <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
                  <p className="italic text-gray-700 dark:text-gray-300">{article.excerpt}</p>
                </div>
              )}
              
              {/* 文章内容 */}
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
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