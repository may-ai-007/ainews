import { NewsArticle, Category } from './types';

// 文章数据
export const articles: NewsArticle[] = [
  {
    id: "1",
    title: "AI.Talk 赵汗青：我不是一个创作者",
    summary: "【AI摘要】文章通过对AI.Talk创始人赵汗青的专访，探讨了AI时代下虚拟IP“YURI”的诞生和发展。汗青认为AI赋能下的IP构建，核心在于与用户建立信任和情感连接，且虚拟IP的非人设定规避了传统偶像的风险，并能提供全新的情感寄托。他强调，AI内容创作应聚焦于“认知成本、创意成本和审美成本”高的内容，而非低价内卷的制作业务，以构建持久的IP价值。",
    content: `
      <p>
      文章主要围绕AI.Talk创始人赵汗青对AI内容创作和虚拟IP构建的深入见解展开。汗青在两年前AI.Talk创立之初就致力于用AI建立一个人格化的虚拟IP，尽管当时技术尚不成熟，只能实现静态图片说话。他利用名人IP进行内容创作，验证了AI生成内容的可行性。随着AI音乐生成技术如Suno和Udio的进步，以及字节跳动OmniHuman-1口型技术的出现，他看到了AI音乐IP化的潜力，并最终催生了虚拟IP“YURI”。

汗青对AI内容创作行业持“不乐观”态度，认为目前行业存在过度乐观情绪，短期内难以实现颠覆性突破。他指出，在移动互联网创业逻辑失效、流量结构变化的背景下，用户将筛选信息源而非信息本身，因此建立与信息源之间的信任关系至关重要。AI.Talk正是基于这种共识，选择了一条稳健、注重复利效应的道路。

      <p>文章深入探讨了虚拟IP的核心——信任。汗青有意将YURI塑造成一个“非真人”的虚拟人格，坦诚其AI身份，并认为这恰恰能构成用户关注的理由，因为“真人太多了”。这种设定规避了传统偶像人设崩塌的风险，并能提供一种全新的、无压力的情感寄托。他期望YURI能像一个“冲浪者”，能够自主地对热点事件发表看法，并希望未来YURI的动态能由大模型根据其人格设定涌现，而非人工规定，从而避免团队变动对IP一致性的影响。</p>

      <p>汗青还强调了AI内容创作者应避免低价内卷，转而追求“成本高”的内容，这里的成本并非金钱，而是认知、创意和审美成本。他认为，这些无法轻易量化和复制的要素，如独特的叙事、深刻的思想和一致的审美，才是构建能与用户建立信任和情感连接的IP的关键。</p>

      <p>作为一名产品经理，我对汗青关于AI IP构建的理念深感共鸣。他提出的“IP的核心永远是信任”以及“你一定得做成本高的东西”（指认知、创意和审美成本），是AI内容领域产品成功的关键。在AI工具日益普及、内容生产门槛降低的当下，大量AI生成的内容容易陷入同质化和低价竞争的困境。汗青清醒地认识到，AI生成内容的可复制性强，若无护城河，IP价值极易被稀释。</p>

      <p>他的做法是主动承认AI身份，不假装真人，反而利用“非人设定”的差异化来吸引用户，这是一种高明的策略。这不仅规避了潜在的“人设崩塌”风险，更重要的是，它鼓励用户与一个超越真实个体限制的“理想人格”建立连接。对于产品经理而言，这意味着在设计AI产品时，不应盲目追求“以假乱真”，而是要思考AI特有的价值点和差异化体验。如何通过AI技术，提供传统真人无法持续稳定提供的、具有高认知和审美价值的内容，将是未来AI产品设计的重要方向。同时，通过大模型自主涌现IP动态的设想，也为AI产品的智能化运营提供了新的思路，这将大大提升内容生产的效率和IP的稳定性。</p>   
      </p><p>
    `,
    category: "专访",
    date: "2025-07-02",
    imageUrl: "/images/1.jpg",
    source: "数字生命卡兹克",
    sourceUrl: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA%3D%3D&mid=2647672820&idx=1&sn=f54a6d0029d0861999080c4ea7fd16b0&chksm=f1fd39c43cd9b7d448956f6d42e5441c45559ee5353aec219b04e51c17849ec4c9ebf4a6d406&mpshare=1&scene=1&srcid=0702xDBFYDU9H87NKFc5xBGm&sharer_shareinfo=2c16aba0af11992103845f99c9b1e5d9&sharer_shareinfo_first=2c16aba0af11992103845f99c9b1e5d9&utm_source=substack&utm_medium=email",
    featured: true,
    tags: ["AI.Talk", "虚拟IP", "AI内容创作", "AI IP构建"],
    readingTime: 5,
    aiSummary: "文章通过对AI.Talk创始人赵汗青的专访，探讨了AI时代下虚拟IP“YURI”的诞生和发展。汗青认为AI赋能下的IP构建，核心在于与用户建立信任和情感连接，且虚拟IP的非人设定规避了传统偶像的风险，并能提供全新的情感寄托。他强调，AI内容创作应聚焦于“认知成本、创意成本和审美成本”高的内容，而非低价内卷的制作业务，以构建持久的IP价值。",
  },
  {
    id: "2",
    title: "百万用户团队「元象」推出的 AI 穿越游戏《昭阳传》如何摸着石头过河？",
    summary: "【AI摘要】"+"《昭阳传》是元象团队推出的一款基于AI多智能体决策的文字冒险游戏，玩家扮演穿越成为皇帝的角色，体验无限分支剧情。游戏通过自研大模型实现AI动态生成剧情和角色决策，突破传统固定脚本限制，带来高度自由和沉浸的游戏体验。试玩版已上线Steam，展示了AI在游戏叙事和玩法上的创新应用。",
    content: `
            <p>
                文章详细介绍了元象团队从AI角色扮演应用「Saylo」到AI游戏「昭阳传」的技术积累与产品演进。元象团队由腾讯AI Lab背景的专家组成，具备强大的AI研发能力。通过「Saylo」验证了AI生成内容与用户创作（UGC）结合的可能后，团队将目光转向更深度的AI游戏叙事，打造了「昭阳传」——一款以穿越题材为框架的文字冒险游戏。
                <p>游戏中所有NPC均由多智能体AI驱动，能够基于性格、记忆和环境实时生成动态决策，形成无限剧情分支，极大提升了游戏的自由度和重玩价值。</p>

                <p>游戏设计巧妙地利用皇帝身份的高自由度，涵盖治国、权谋、社交、战争等多维度叙事，结合“PM AI”协调多角色诉求和“导演 AI”生成剧情大纲，最终通过“演绎 AI”实现对话、CG、音乐等多模态动态生成，突破了传统视觉小说的线性限制。团队还在算力优化、剧情质量控制等方面做了大量技术攻关。</p>

      从产品角度看，「昭阳传」不仅是AI技术的展示，更是游戏玩法和叙事模式的创新，推动了AI在游戏领域从陪聊向自主决策演进的边界。它体现了AI与游戏设计的深度融合，开辟了“无限剧情”游戏的新可能。未来随着模型性能提升和算力成本降低，这类AI驱动的高自由度游戏有望成为主流。

      作为产品经理，我认为这款游戏的核心价值在于用AI实现了“玩家+AI共创故事”的新体验，极大拓展了游戏设计的想象空间。它提醒我们，AI不仅是工具，更是游戏世界中活跃的“角色”，为玩家带来前所未有的沉浸和参与感。如何平衡AI自由发挥与剧情张力、优化用户体验，是未来AI游戏设计的重要课题。
            </p>
    <p>
    `,
    category: "专访",
    date: "2025-07-01",
    imageUrl: "/images/2.jpg",
    source: "白鲸出海",
    sourceUrl:"https://mp.weixin.qq.com/s?__biz=MzA3NTQ4NjczNw==&mid=2650671829&idx=1&sn=3efda556adcd7ed17cb9850ec50a27cb",
    featured: true,
    tags: ["AI多智能体", "文字冒险游戏", "AI动态生成剧情", "AI角色决策"],
    readingTime: 15,
    aiSummary: "《昭阳传》是元象团队推出的一款基于AI多智能体决策的文字冒险游戏，玩家扮演穿越成为皇帝的角色，体验无限分支剧情。游戏通过自研大模型实现AI动态生成剧情和角色决策，突破传统固定脚本限制，带来高度自由和沉浸的游戏体验。试玩版已上线Steam，展示了AI在游戏叙事和玩法上的创新应用。"
  },
  {
    id: "3",
    title: "RockFlow 创始人：如何用两年时间，从 0 到 1 打造全球首个投资交易 AI Agent 「Bobby」",
    summary: "【AI摘要】"+"RockFlow 创始人分享了他们如何用两年时间，从 0 到 1 打造全球首个投资交易 AI Agent 「Bobby」。他们从零开始，通过不断迭代和优化，最终实现了这一目标。",
    content: `
      <p>文章通过访谈形式深入剖析了RockFlow创始人Vakee Lai打造AI投资助手Bobby的过程和理念。Bobby作为全球首个金融交易AI Agent，能够全天候通过自然语言对话帮助用户完成从投资灵感捕捉、市场分析、策略制定到交易执行的全流程，极大简化了投资操作，降低了新手的心理和技术门槛。Vakee指出传统券商App功能繁多且复杂，难以满足个性化需求，而Agent结合数据库的模式将成为未来产品形态，彻底改变用户体验。</p>

      <p>Vakee的个人经历从9岁开始炒股，到百度产研、投资AI，再到创业，体现了她对投资和AI深刻的理解与热情。她强调投资不仅是赚钱，更是年轻人表达价值观和生活方式的途径。Bobby的设计理念是让普通人能将日常生活中的认知转化为投资决策，实现“投资飞入寻常百姓家”的梦想。</p>

      <p>技术层面，Bobby经历了两年多的打磨，克服了AI幻觉、响应速度和成本控制等挑战，体现了垂类AI Agent对行业深度理解和技术细节的高度要求。Vakee也坦言，Bobby目前不会主动下单，所有交易均需用户确认，体现了对风险管理的重视。</p>

      <p>从更广阔视角看，Bobby代表了AI与金融结合的创新趋势，推动金融服务民主化，降低投资门槛，促进资本回报的普惠。未来，随着Agent技术成熟，传统App界面或将被自然语言交互取代，投资体验将更加个性化、智能化。这对产品经理和AI创业者来说，是一个值得深思和把握的巨大机遇。</p>
       <p>`,
    category: "专访",
    date: "2025-07-01",
    imageUrl: "/images/3.jpg",
    source: "十字路口",
    sourceUrl: "https://mp.weixin.qq.com/s?__biz=Mzk0MzI3MTMxOA==&mid=2247490252&idx=1&sn=71bf219e89921362ad227ea931d2ab28&chksm=c2ba395cbc4aedf5ec796b7a9ead9ecabc0cf6e5347e37ad03363a28540e5d7ead19520dc4b9&mpshare=1&scene=1&srcid=0701deMcBKTstjbWym7wQMxf&sharer_shareinfo=9bcfdfa850a2ebb9a2e490392fa4059a&sharer_shareinfo_first=9bcfdfa850a2ebb9a2e490392fa4059a",
    featured: true,
    tags: ["AI Agent", "投资交易", "AI Agent 「Bobby」"],
    readingTime: 15,
    aiSummary: "RockFlow 创始人分享了他们如何用两年时间，从 0 到 1 打造全球首个投资交易 AI Agent 「Bobby」。他们从零开始，通过不断迭代和优化，最终实现了这一目标。"
  },
  {
    id: "4",
    title: "2025 过去一半了， AI 带给我的 9 个Aha Moments",
    summary: "【AI摘要】"+"文章总结了2025年上半年AI领域的九大关键进展与思考，涵盖技术开源（如DeepSeek）、Agent应用爆发、设计驱动创新、AI情感价值等方向。核心观点包括：技术民主化降低创业门槛，用户体验迭代成为新壁垒，“去执”思维推动产品创新，以及AI在效率之外重塑情绪价值的潜力。",
    content: `
      <p>本文以播客内容整理形式，呈现了AI行业快速迭代下的九大洞察。作者从技术（DeepSeek开源打破模型垄断）、产品（Manus验证执行速度护城河）、模式（Agent重构交互范式）三个维度展开，强调AI创业需回归用户需求本质，而非盲目追逐技术热点。
      <p>典型案例包括：
      <p>① ​技术普惠​：DeepSeek开源使中小企业能用SOTA模型，Qwen3提供灵活参数选择；
      <p>② ​执行为王​：Manus凭借快速迭代跻身头部，印证“快速试错”在技术剧变期的价值；
      <p>③ ​设计突围​：SunAlly等非AI原生产品通过AI降本增效脱颖而出，证明垂直场景创新空间仍存。

      <p>深层思考：文中“汤姆猫隐喻”值得警惕——早期AI产品常因表面创新被误判，但真正壁垒在于持续满足用户真实需求（如Lovart通过Agent完成完整VI设计）。同时，作者警示勿高估短期变革（如Meta广告革命），却低估长期影响（AI重构商业模式）。对创业者而言，技术是杠杆，但洞察人性、打磨体验才是持久命题。</p>
    <p>`,
    category: "观点",
    date: "2025-06-30",
    imageUrl: "/images/4.jpg",
    source: "十字路口",
    sourceUrl: "https://mp.weixin.qq.com/s?__biz=MzAxMDMxOTI2NA==&mid=2649094876&idx=1&sn=26c46825e7e33ac971a4648a9767b7ad",
    tags: ["AI", "AI Agent", "AI产品", "AI创业"],
    readingTime: 12,
    aiSummary: "文章总结了2025年上半年AI领域的九大关键进展与思考，涵盖技术开源（如DeepSeek）、Agent应用爆发、设计驱动创新、AI情感价值等方向。核心观点包括：技术民主化降低创业门槛，用户体验迭代成为新壁垒，“去执”思维推动产品创新，以及AI在效率之外重塑情绪价值的潜力。"
  },
  {
    id: "5",
    title: "案例 | AI 占星应用 20 天入账 200 万美金",
    summary: "【AI摘要】"+"AI占星应用Starla和Astra通过“Soulmate形象生成+星座匹配”功能，在20天内实现超200万美元收入。两款产品主打低价订阅制（月费$9.99起），利用社交媒体精准投放（聚焦女性用户），以“个性化Soulmate画像+视觉冲击”为卖点，短期内登顶美国iOS下载榜。尽管用户体验被批模板化，但其切中当代人对“灵魂伴侣”的情感需求，反映出技术对孤独经济和快餐爱情的另类解构。",
    content: `
      <p>现象速览​：Starla和Astra通过AI生成虚构的“Soulmate形象”，搭配星座运势解读功能，以低成本实现病毒式传播和高转化率。核心增长策略包括：① 社媒KOL投放（90%素材为“女性寻爱”叙事）；② 付费墙设计（生成Soulmate形象时强制引导订阅）；③ 低价订阅模式（周费$6.99刺激冲动消费）。
      ​<p>深层洞察​↓
      ​<p>用户心理​：产品本质是利用“Soulmate焦虑”变现。美国年轻人线下社交时间锐减（较20年前下降35%）、约会App信任崩塌，导致其对完美伴侣的幻想转向虚拟载体。
      ​<p>技术套壳​：AI功能实际依赖静态星盘匹配，回答模板化（甚至不如ChatGPT自然），但通过视觉符号（铅笔素描头像）制造“专属感”，完成从“工具”到“情感寄托”的转化。
      ​<p>商业悖论​：尽管20天收入超200万美元，但用户评论显示60%以上差评（关键词“浪费钱”），依赖“一次性猎奇消费”难持续。类似案例（如Death Clock死亡日期预测）验证了“痛点不等于可持续需求”。
      <p>​延伸思考​：
      此类应用的成功映射出技术时代的矛盾——人们既渴望通过AI获得情感慰藉，又对虚假承诺极度敏感。其短期爆发或可复制（如换皮“AI灵魂伴侣”），但长期价值取决于能否从“占卜工具”升级为“关系成长助手”。若仅停留在“贩卖焦虑”，终将被用户抛弃。
    <p>`,
    category: "案例",
    date: "2025-07-02",
    imageUrl: "/images/5.jpg",
    source: "白鲸出海",
    sourceUrl: "https://www.huxiu.com/article/4529386.html?f=rss",
    tags: ["AI情感经济", "社交媒体营销", "孤独经济", "产品增长策略"],
    readingTime: 8,
    aiSummary: "AI占星应用Starla和Astra通过“Soulmate形象生成+星座匹配”功能，在20天内实现超200万美元收入。两款产品主打低价订阅制（月费$9.99起），利用社交媒体精准投放（聚焦女性用户），以“个性化Soulmate画像+视觉冲击”为卖点，短期内登顶美国iOS下载榜。尽管用户体验被批模板化，但其切中当代人对“灵魂伴侣”的情感需求，反映出技术对孤独经济和快餐爱情的另类解构。"
  },
  {
    id: "6",
    title: "猫狗的 AI 土味短剧月入 50 万",
    summary: "【AI摘要】"+"AI技术催生“宠物土味短剧”热潮：创作者通过AI生成猫狗拟人化剧情（如《橘猫勇救哪吒》《雪纳瑞霸总逆袭》），以3秒一转折的强冲突、低成本的“抽象幽默”收割流量。抖音账号“橘百万”等月入50万，闲鱼现“AI宠物剧定制”服务，海外YouTube同类账号播放破亿。内容虽被批“低质猎奇”，但凭借萌宠治愈力与AI高效生产，形成“乐子人狂欢”的流量奇观。",

    content: `
      <p>现象解析​：
      <p>​技术驱动​：三步法（ChatAI编剧情+生图AI定分镜+视频AI合成）将制作成本压缩至10分钟/条，闲鱼教程售价仅1元，技术平权催生批量生产。
      ​<p>内容特征​：强冲突（杀妻夺财、手撕黑心老板）、强反转（橘猫变拳击冠军）、强共情（流浪狗逆袭CEO），用“伪现实”包裹抽象幽默，契合短视频用户“3秒抓眼球”需求。
      ​<p>变现模式​：广告植入（单价可达5000元/条）、知识付费（收徒培训）、电商带货（宠物周边），头部账号月入50万验证商业模式。
      ​<p>深层反思​：

      ​<p>用户心理​：① 对萌宠的“可爱侵略性”天然宽容（哪怕剧情荒诞）；② 现实压力下，通过“抽象娱乐”逃避深度思考；③ 对“逆袭爽文”的永恒渴求，投射至动物角色降低心理负担。
      ​<p>行业隐忧​：① 内容同质化严重，已出现“AI动物大战漫威英雄”等低质二创；② 宠物IP生命周期短（平均3个月热度下滑）；③ 伦理争议：动物拟人化是否构成对真实动物的物化？
      ​<p>技术悖论​：AI降低创作门槛却抬高传播阈值，优质内容需兼具“强剧情+视觉冲击+情绪价值”，单纯堆砌冲突难逃审美疲劳。
      ​<p>延伸案例​：

      <p>海外爆款《TungTungTungSahur》：AI生成的鲨鱼+耐克鞋怪物，衍生出“山海经宇宙”二创生态，证明抽象叙事具有跨文化普适性。
      国内“AI小孩”赛道：家长付费观看AI生成儿童成长日记，与宠物短剧共享“低成本情感投射”逻辑。
    <p>
    `,
    category: "案例",
    date: "2025-07-01",
    imageUrl: "/images/6.jpg",
    source: "差评X.PIN",
    sourceUrl: "https://mp.weixin.qq.com/s?__biz=MzA5NDc1NzQ4MA==&mid=2654603613&idx=2&sn=292e7c93f0e2b1214e4bcf647f23a05a&chksm=8abaa92dd4f70cea65993cb77e9e702fa5e6fd33b0939ec7a83b3007f07802f2c404bca20318&mpshare=1&scene=1&srcid=0630AWUkDImws409TgbpYY9K&sharer_shareinfo=39c32f36a1b0ed8ca23deda6c23ae810&sharer_shareinfo_first=39c32f36a1b0ed8ca23deda6c23ae810",
    tags: ["AI内容创作", "萌宠经济", "短视频红利", "流量密码"],
    readingTime: 10,
    aiSummary: "AI技术催生“宠物土味短剧”热潮：创作者通过AI生成猫狗拟人化剧情（如《橘猫勇救哪吒》《雪纳瑞霸总逆袭》），以3秒一转折的强冲突、低成本的“抽象幽默”收割流量。抖音账号“橘百万”等月入50万，闲鱼现“AI宠物剧定制”服务，海外YouTube同类账号播放破亿。内容虽被批“低质猎奇”，但凭借萌宠治愈力与AI高效生产，形成“乐子人狂欢”的流量奇观。"
  },
  {
    id: "7",
    title: "明星教学视频火了，百万网友跟「侃爷」「卡戴珊」学代数",
    summary: "【AI摘要】"+"AI技术催生“明星教学”新形态：创作者通过AI克隆名人形象与声音，以快节奏短视频讲解STEM知识点（如代数、微积分）。海外账号“Onlock Learning”单条播放破亿，国内UP主“johnhuu”借AI女巫讲解英语获百万播放。内容以“寓教于乐”为核心，降低学习门槛，但也面临肖像权争议与伦理质疑。",

    content: `
      <p>现象与模式​：
        ​<p>技术实现​：三步流程（脚本策划→声音克隆→视频生成）将明星IP转化为教学工具，AI工具（如ElevenLabs、HeyGen）支撑低成本量产。
        ​<p>内容特点​：20秒短视频聚焦单一知识点（如“向量公式”），融合明星人设（如霉霉讲微积分）、网络热梗与高密度信息，契合Z世代“碎片化学习”需求。
        ​<p>商业价值​：海外账号“Onlock Learning”涨粉120万，国内案例（如B站英语课）单月销售额破15万元，证明“明星+AI”在教育领域的变现潜力。
        ​<p>争议与反思​：

        ​<p>伦理风险​：AI深度伪造明星形象涉嫌侵犯肖像权，海外账号依赖“免责声明”规避法律风险，国内案例（如“johnhuu”）已多次遭平台限流。
        ​<p>教育效果存疑​：尽管用户反馈“讲解清晰”，但创作者承认快节奏教学缺乏深度，长期效果未获验证，可能沦为“知识快餐”。
        ​<p>技术滥用边界​：a16z指出，AI教育需平衡创新与责任——明星IP可扩大覆盖面，但需警惕“注意力绑架”（如过度娱乐化削弱知识严谨性）。
        ​<p>延伸观察​：

        ​<p>明星自研AI分身​：吴彦祖英语课采用“真人录制+AI陪练”模式，规避版权争议，验证“明星主导、AI辅助”的合规路径。
        ​教育生态变革​：a16z预测，未来教育将呈现“教师+AI双师模式”——人类负责情感引导，AI承担个性化辅导与知识传递。
    <p>
    `,
    category: "案例",
    date: "2025-07-01",
    imageUrl: "/images/7.jpg",
    source: "AI新榜",
    sourceUrl:"https://mp.weixin.qq.com/s?__biz=MzA3NzUxMzQ5Mw==&mid=2648134977&idx=1&sn=8d51c0e4d56fba9515721b1fd2a3830a",
    tags: ["AI教育创新", "明星IP数字化", "知识科普新形态", "生成式AI应用"],
    readingTime: 12,
    aiSummary: "AI技术催生“明星教学”新形态：创作者通过AI克隆名人形象与声音，以快节奏短视频讲解STEM知识点（如代数、微积分）。海外账号“Onlock Learning”单条播放破亿，国内UP主“johnhuu”借AI女巫讲解英语获百万播放。内容以“寓教于乐”为核心，降低学习门槛，但也面临肖像权争议与伦理质疑。"
  }
];

// 分类数据
export const categories: Category[] = [
  {
    id: "模型发布",
    name: "模型发布",
    description: "最新的AI模型发布信息，包括大型语言模型、多模态模型等前沿AI技术。"
  },
  {
    id: "产品更新",
    name: "产品更新",
    description: "AI相关产品的更新和发布信息，了解最新的AI应用和服务。"
  },
  {
    id: "开源项目",
    name: "开源项目",
    description: "开源AI项目的最新进展，包括框架、工具和模型等。"
  },
  {
    id: "医疗AI",
    name: "医疗AI",
    description: "AI在医疗健康领域的应用和突破，包括诊断、药物研发和医疗影像等。"
  },
  {
    id: "开发工具",
    name: "开发工具",
    description: "面向开发者的AI工具和平台，提高开发效率和创新能力。"
  },
  {
    id: "研究进展",
    name: "研究进展",
    description: "AI学术研究的最新进展和突破，了解前沿科研成果。"
  },
  {
    id: "行业应用",
    name: "行业应用",
    description: "AI在各行业的实际应用案例和最佳实践。"
  },
  {
    id: "政策法规",
    name: "政策法规",
    description: "AI相关的政策、法规和伦理讨论，了解行业监管动态。"
  }
];

// 获取所有文章
export function getAllArticles() {
  return articles;
}

// 获取精选文章
export function getFeaturedArticles(count: number = 3) {
  return articles
    .filter(article => article.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

// 获取最新文章
export function getRecentArticles(count: number = 10, excludeIds: string[] = []) {
  return articles
    .filter(article => !excludeIds.includes(article.id))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

// 根据ID获取文章
export function getArticleById(id: string) {
  return articles.find(article => article.id === id);
}

// 根据分类获取文章
export function getArticlesByCategory(categoryId: string) {
  return articles
    .filter(article => article.category === categoryId)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// 搜索文章
export function searchArticles(query: string) {
  const lowercaseQuery = query.toLowerCase();
  
  return articles.filter(article => {
    return (
      article.title.toLowerCase().includes(lowercaseQuery) ||
      article.summary.toLowerCase().includes(lowercaseQuery) ||
      article.category.toLowerCase().includes(lowercaseQuery) ||
      (article.tags && article.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)))
    );
  });
}

// 获取所有分类
export function getAllCategories() {
  return categories;
}

// 根据ID获取分类
export function getCategoryById(id: string) {
  return categories.find(category => category.id === id);
}

// 获取分类文章数量
export function getCategoryArticleCount(categoryId: string) {
  return articles.filter(article => article.category === categoryId).length;
}

// 获取所有标签
export function getAllTags() {
  const tagsSet = new Set<string>();
  
  articles.forEach(article => {
    if (article.tags) {
      article.tags.forEach(tag => tagsSet.add(tag));
    }
  });
  
  return Array.from(tagsSet);
}

// 根据标签获取文章
export function getArticlesByTag(tag: string) {
  return articles
    .filter(article => article.tags && article.tags.includes(tag))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
