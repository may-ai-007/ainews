"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import NewsCard from "@/components/news-card";
import Search from "@/components/search";
import { searchArticles } from "@/lib/data";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 模拟搜索过程
    setIsLoading(true);
    
    setTimeout(() => {
      if (query) {
        // 使用数据源中的搜索函数
        const results = searchArticles(query);
        setSearchResults(results);
      } else {
        setSearchResults([]);
      }
      setIsLoading(false);
    }, 500); // 模拟网络延迟
  }, [query]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              搜索结果
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
              {query ? `"${query}" 的搜索结果` : "请输入搜索关键词"}
            </p>
          </div>
          
          <div className="mt-10 mb-12">
            <Search />
          </div>
          
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <>
              {searchResults.length > 0 ? (
                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {searchResults.map((article) => (
                    <NewsCard
                      key={article.id}
                      id={article.id}
                      title={article.title}
                      summary={article.summary}
                      category={article.category}
                      date={article.date}
                      imageUrl={article.imageUrl}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    {query ? "没有找到匹配的结果" : "请输入关键词开始搜索"}
                  </h3>
                  <p className="mt-4 text-gray-500 dark:text-gray-400">
                    {query ? "请尝试其他关键词或浏览全部资讯" : "您可以搜索标题、摘要、分类或标签"}
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 