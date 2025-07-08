import Header from "@/components/header";
import Footer from "@/components/footer";
import NewsCard from "@/components/news-card";
import Search from "@/components/search";
import { getAllArticles } from "@/lib/data";

export default function NewsPage() {
  // 获取所有文章并按日期排序
  const allArticles = getAllArticles().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              全部AI资讯
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
              浏览所有AI领域最新动态和技术进展
            </p>
          </div>
          
          <div className="mt-10 mb-12">
            <Search />
          </div>
          
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allArticles.map((article) => (
              <NewsCard
                key={article.id}
                id={article.id}
                title={article.title}
                summary={article.summary}
                category={article.category}
                date={article.date}
                source={article.source}
                imageUrl={article.imageUrl}
              />
            ))}
          </div>
          
          <div className="mt-16 flex justify-center">
            <nav className="flex items-center justify-between">
              <div className="flex flex-1 items-center justify-between">
                <div>
                  <button
                    className="relative inline-flex items-center rounded-md bg-white dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 mr-3 disabled:opacity-50"
                    disabled
                  >
                    上一页
                  </button>
                  <button
                    className="relative inline-flex items-center rounded-md bg-white dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    下一页
                  </button>
                </div>
                <div className="hidden sm:flex sm:items-center">
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    显示 <span className="font-medium">1</span> 到 <span className="font-medium">{allArticles.length}</span> 条，共 <span className="font-medium">{allArticles.length}</span> 条结果
                  </span>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 