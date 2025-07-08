import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import NewsCard from "@/components/news-card";
import { getFeaturedArticles, getRecentArticles } from "@/lib/data";

export default function Home() {
  // 获取精选文章
  const featuredArticles = getFeaturedArticles(3);
  
  // 获取最新文章，排除已经显示的精选文章
  const featuredIds = featuredArticles.map(article => article.id);
  const recentArticles = getRecentArticles(20, featuredIds);
  
  // 合并所有文章用于显示
  const allArticles = [...featuredArticles, ...recentArticles];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* 精选文章瀑布流 */}
        <div className="bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                本周精选
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
                精心筛选的AI领域重要进展和突破性技术
              </p>
            </div>
            
            {/* 文章网格布局 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allArticles.map((article, index) => (
                <div key={article.id} className={index === 0 ? "md:col-span-2" : ""}>
                  <NewsCard
                    id={article.id}
                    title={article.title}
                    summary={article.summary}
                    category={article.category}
                    source={article.source}
                    date={article.date}
                    imageUrl={article.imageUrl}
                    featured={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
