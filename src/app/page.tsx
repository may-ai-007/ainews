import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import NewsCard from "@/components/news-card";
import { getAllArticles } from "@/lib/data";

// 为静态生成优化，确保内容在构建时生成
export const revalidate = 3600; // 1小时重新验证一次

export default function Home() {
  // 获取所有文章并按日期排序
  const allArticles = getAllArticles()
    .sort((a, b) => {
      // 确保日期正确解析
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      // 降序排序，最新的在前面
      return dateB.getTime() - dateA.getTime();
    })
    .slice(0, 23); // 限制显示的文章数量
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* 文章瀑布流 */}
        <div className="bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                最新资讯
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
                    featured={index === 0} // 仅第一篇作为特色显示
                    priority={index < 6} // 前6篇文章优先加载图片
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
