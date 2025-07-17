import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              关于我们
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
              AI周报精选 - 您的AI时代高价值信息获取平台
            </p>
          </div>
          
          <div className="mt-16 prose prose-lg max-w-none dark:prose-invert">
            <h2>我们的使命</h2>
            <p>
              「AI周报精选」致力于为用户提供高质量、精心筛选的人工智能领域最新资讯。在信息爆炸的时代，我们希望通过专业的视角和深度的分析，帮助用户快速获取有价值的AI行业动态，了解技术趋势，把握发展机遇。
            </p>
            
            <h2>内容来源</h2>
            <p>
              我们的内容主要来源于全球主流媒体平台，以及专业的付费订阅的渠道，经过专业团队的筛选、整理和分析后，形成原创增值内容。我们注重内容质量，确保每一篇资讯都具有专业性、时效性和可读性。
            </p>
            
            <h2>AI增值服务</h2>
            <p>
              我们不仅仅提供原始资讯，还利用AI技术为每篇文章生成精准摘要，帮助读者在短时间内把握文章要点。这些AI摘要由先进的大语言模型生成，并经过人工审核，确保准确性和可读性。
            </p>
            
            <h2>更新频率</h2>
            <p>
              我们每周会精选约10条AI领域最重要的资讯进行更新，涵盖模型发布、产品更新、研究进展、专访与案例分享等多个方面，确保您不会错过任何重要信息。
            </p>
            
            <h2>网站特点</h2>
            <ul>
              <li><strong>精选内容</strong> - 每周精心筛选最有价值的AI资讯</li>
              <li><strong>专业分析</strong> - 提供深度解读和专业见解</li>
              <li><strong>AI摘要</strong> - 利用AI技术生成文章核心要点</li>
              <li><strong>分类浏览</strong> - 按不同领域和主题浏览内容</li>
              <li><strong>响应式设计</strong> - 在各种设备上提供良好的阅读体验</li>
              <li><strong>搜索功能</strong> - 快速找到您感兴趣的内容</li>
              <li><strong>暗色模式</strong> - 保护您的眼睛，提供舒适的阅读体验</li>
            </ul>
            
            <h2>推荐资源</h2>
            <div className="mt-6 mb-8 p-4 border border-blue-300 dark:border-blue-700 rounded-lg bg-blue-50 dark:bg-blue-900/30">
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-2">全球AI工具排名</h3>
              <p className="mb-3">
                想了解全球AI工具的发展情况和使用趋势吗？我们推荐访问 <a href="https://www.aitoolsrank.online" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-bold underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors">AI Tools Rank</a>，这是一个专业的全球AI工具排名网站。
              </p>
              <p>
                通过这个网站，您可以：
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>实时查看全球AI工具的发展情况</li>
                <li>了解不同AI工具的使用情况和趋势</li>
                <li>分析不同国家和地区的AI工具应用差异</li>
              </ul>
              <div className="mt-4 text-center">
                <a 
                  href="https://www.aitoolsrank.online" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all no-underline"
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  立即访问 AI Tools Rank
                </a>
              </div>
            </div>
            
            <h2>联系我们</h2>
            <p>
              如果您有任何问题、建议或合作意向，欢迎通过以下方式联系我们：
            </p>
            <ul>
              <li>邮箱：mayuzone.com@gmail.com</li>
              {/* <li>微信公众号：AI资讯导航</li> */}
            </ul>
            
            <h2>免责声明</h2>
            <p>
              本网站提供的内容仅供参考和学习，不构成任何投资或商业建议。我们尽力确保内容的准确性和时效性，但不对因内容错误或过时而导致的任何损失负责。
            </p>
            <p>
              本网站尊重知识产权，如有侵权，请及时联系我们删除。
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 