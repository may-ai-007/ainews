import { notFound } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import NewsCard from "@/components/news-card";
import Search from "@/components/search";
import { getArticlesByCategory, getCategoryById } from "@/lib/data";

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryId = decodeURIComponent(params.category);
  
  // 获取分类信息
  const category = getCategoryById(categoryId);
  
  // 检查分类是否存在
  if (!category) {
    notFound();
  }
  
  // 获取该分类下的文章
  const categoryArticles = getArticlesByCategory(categoryId);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              {category.name}
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
              {category.description}
            </p>
          </div>
          
          <div className="mt-10 mb-12">
            <Search />
          </div>
          
          {categoryArticles.length > 0 ? (
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {categoryArticles.map((article) => (
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
                该分类下暂无文章
              </h3>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                请稍后再来查看，或浏览其他分类
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 