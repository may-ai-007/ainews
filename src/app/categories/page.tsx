import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { getAllCategories, getCategoryArticleCount } from "@/lib/data";

export default function CategoriesPage() {
  // 获取所有分类
  const categories = getAllCategories();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              资讯分类
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
              按照不同领域浏览AI资讯
            </p>
          </div>
          
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {categories.map((category) => {
              const count = getCategoryArticleCount(category.id);
              
              return (
                <div
                  key={category.id}
                  className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {category.name}
                    </h2>
                    <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:text-blue-300">
                      {count} 篇文章
                    </span>
                  </div>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    {category.description}
                  </p>
                  <div className="mt-6">
                    <Link
                      href={`/categories/${encodeURIComponent(category.id)}`}
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium flex items-center"
                    >
                      浏览该分类
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 