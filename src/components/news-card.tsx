"use client";

import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { zhCN } from "date-fns/locale";

interface NewsCardProps {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  source?: string;
  imageUrl?: string;
  featured?: boolean;
  priority?: boolean; // 添加优先加载图片的属性
}

export default function NewsCard({
  id,
  title,
  summary,
  category,
  date,
  source,
  imageUrl,
  featured = false,
  priority = false, // 默认为false
}: NewsCardProps) {
  // const formattedDate = format(new Date(date), "yyyy年MM月dd日", { locale: zhCN });
  const formattedDate = format(new Date(date), "yyyy年MM月dd日", { locale: zhCN });

  return (
    <div className="flex flex-col h-full overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-200 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
      <div className="relative">
        <div className={`w-full relative ${featured ? 'h-60' : 'h-48'} bg-gray-200 dark:bg-gray-700`}>
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={priority} // 使用priority属性
              loading={priority ? "eager" : "lazy"} // 根据priority决定加载策略
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
              <span className="text-xl font-bold text-white">AI News</span>
            </div>
          )}
          <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
            {category}
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between p-4">
        <div className="flex-1">
          <Link href={`/news/${id}`} className="block">
            <h3 className={`${featured ? 'text-xl' : 'text-lg'} font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 line-clamp-2`}>
              {title}
            </h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
              {summary}
            </p>
          </Link>
        </div>
        <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {/* <time dateTime={date}>{formattedDate}</time> */}
            {source}
          </div>
        </div>
      </div>
    </div>
  );
} 