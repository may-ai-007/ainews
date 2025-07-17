'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';

// 为window.gtag添加类型定义
declare global {
  interface Window {
    gtag: (command: string, target: string, config?: any) => void;
    dataLayer: any[];
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // 当路由变化时发送页面浏览事件
    const url = pathname + searchParams.toString();
    if (window.gtag) {
      window.gtag('config', 'G-QVZ6YBRND2', {
        page_path: url,
      });
    }
  }, [pathname, searchParams]);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-QVZ6YBRND2"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QVZ6YBRND2', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
} 