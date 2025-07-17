/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  images: {
    unoptimized: true,
  },
  // 配置静态导出时跳过API路由
  distDir: 'out',
  trailingSlash: true,
  // 跳过API路由的错误
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  // 添加robots配置，允许搜索引擎索引
  experimental: {},
};

export default nextConfig; 