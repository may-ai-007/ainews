"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon, LanguageIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import Search from "@/components/search";

const navigation = [
  { name: "首页", href: "/" },
  { name: "关于", href: "/about" },
];

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState("zh"); // 默认中文
  const pathname = usePathname();

  // 在客户端挂载后再渲染依赖于主题的内容
  useEffect(() => {
    setMounted(true);
    
    // 检测IP地址并设置语言
    const detectLanguage = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const isChina = data.country_code === 'CN';
        setLanguage(isChina ? 'zh' : 'en');
      } catch (error) {
        console.error('无法检测地理位置:', error);
      }
    };
    
    detectLanguage();
  }, []);

  const ThemeToggle = () => {
    if (!mounted) return null;
    
    return (
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="rounded-md p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        aria-label="切换主题"
      >
        {theme === "dark" ? (
          <SunIcon className="h-5 w-5" />
        ) : (
          <MoonIcon className="h-5 w-5" />
        )}
        <span className="sr-only">切换主题</span>
      </button>
    );
  };
  
  const LanguageToggle = () => {
    if (!mounted) return null;
    
    return (
      <button
        onClick={() => setLanguage(language === "zh" ? "en" : "zh")}
        className="rounded-md p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        aria-label="切换语言"
      >
        <LanguageIcon className="h-5 w-5" />
        <span className="sr-only">切换语言</span>
      </button>
    );
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI News Weekly
            </span>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              每周精选AI领域最新动态
            </p>
          </Link>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 ${
                pathname === item.href
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
          <div className="w-64">
            <Search />
          </div>
          <ThemeToggle />
          <LanguageToggle />
        </div>
        
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <LanguageToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">打开主菜单</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-gray-900/80">
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI News Weekly
                </span>
              </Link>
              <button
                type="button"
                className="rounded-md p-2.5 text-gray-700 dark:text-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">关闭菜单</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <div className="mb-4">
                    <Search />
                  </div>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                        pathname === item.href
                          ? "text-blue-600 dark:text-blue-400 bg-gray-50 dark:bg-gray-800"
                          : "text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 