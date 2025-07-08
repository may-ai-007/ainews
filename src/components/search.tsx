"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);
  const [query, setQuery] = useState("");
  
  useEffect(() => {
    setMounted(true);
    // 只在客户端挂载后设置查询参数
    if (searchParams) {
      setQuery(searchParams.get("q") || "");
    }
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedQuery = query.trim();
    
    if (trimmedQuery) {
      router.push(`/search?q=${encodeURIComponent(trimmedQuery)}`);
    }
  };

  // 避免水合错误，在客户端渲染前不显示内容
  if (!mounted) {
    return (
      <div className="w-full">
        <div className="relative h-10 rounded-md bg-gray-100 dark:bg-gray-800"></div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSearch} className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="block w-full rounded-md border-0 py-2 pl-10 pr-14 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-gray-800 sm:text-sm sm:leading-6"
          placeholder="搜索AI资讯..."
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center px-3 rounded-r-md bg-blue-600 hover:bg-blue-700 text-white text-sm"
        >
          搜索
        </button>
      </form>
    </div>
  );
} 