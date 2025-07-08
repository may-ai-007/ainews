import { notFound } from "next/navigation";
import { format } from "date-fns";
import { zhCN } from "date-fns/locale";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { getArticleById } from "@/lib/data";

export default function NewsPage({ params }: { params: { id: string } }) {
  // 根据ID获取文章
  const article = getArticleById(params.id);
  
  if (!article) {
    notFound();
  }
  
  const formattedDate = format(new Date(article.date), "yyyy年MM月dd日", { locale: zhCN });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <article className="mx-auto max-w-4xl px-6 py-10">
          {/* <div className="mb-6">
            <Link 
              href="/news" 
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              返回全部资讯
            </Link>
          </div> */}
          
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 gap-4 mb-6">
              <span>{formattedDate}</span>
              <span>分类：{article.category}</span>
              {article.readingTime && (
                <span>阅读时间：约{article.readingTime}分钟</span>
              )}
              {article.source && (
                <span>
                  查看原文：
                  {article.sourceUrl ? (
                    <a 
                      href={article.sourceUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                      {article.source}
                    </a>
                  ) : (
                    article.source
                  )}
                </span>
              )}
            </div>
            
            <div className="h-64 md:h-96 w-full relative bg-gray-200 dark:bg-gray-800 mb-8">
              {article.imageUrl ? (
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
                  <span className="text-2xl font-bold text-white">AI News</span>
                </div>
              )}
            </div>
            
            {/* AI摘要部分 - 移到图片下方，内容上方 */}
            {article.aiSummary && (
              <div className="mb-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  AI摘要
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{article.aiSummary}</p>
              </div>
            )}
            
            <div className="prose prose-lg max-w-none dark:prose-invert" 
                 dangerouslySetInnerHTML={{ __html: article.content }} />
 
            {article.source && article.sourceUrl && (
                <div className="mt-8 p-5 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    阅读原文
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href={article.sourceUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-md transition"
                    >
                      查看原文
                    </a>
                    <Link 
                      href={`/readable?url=${encodeURIComponent(article.sourceUrl)}&title=${encodeURIComponent(article.source)}`}
                      className="py-2 px-4 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 text-center rounded-md transition"
                    >
                      阅读模式
                    </Link>
                  </div>
                  <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                    💡「阅读模式」旨在为用户提供界面清爽，且无广告无”杂质“的沉浸式原文阅读体验，该功能正在开发完善中，敬请期待。
                  </p>
                </div>
            )}
            
            {article.tags && article.tags.length > 0 && (
              <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  相关标签
                </h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/tags/${encodeURIComponent(tag)}`}
                      className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-3 py-1 text-sm font-medium text-blue-800 dark:text-blue-200"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
} 