# AI资讯导航网站内容管理指南

## 概述

本文档提供了如何管理和更新AI资讯导航网站内容的指南。网站的内容管理采用了集中式数据源方法，所有文章和分类数据都存储在 `src/lib/data.ts` 文件中，便于维护和更新。

## 文件结构

- `src/lib/data.ts`: 所有文章和分类数据的集中存储位置
- `src/lib/types.ts`: 定义了文章和分类的数据类型

## 如何添加新文章

1. 打开 `src/lib/data.ts` 文件
2. 在 `articles` 数组的开头添加新的文章对象
3. 为新文章分配一个唯一的 ID（通常是递增的数字）
4. 填写必要的字段：`title`, `summary`, `content`, `category`, `date`, `imageUrl`
5. 可选字段：`source`, `sourceUrl`, `featured`, `tags`, `readingTime`, `aiSummary`

### 文章对象示例

```typescript
{
  id: "7",  // 唯一ID
  title: "文章标题",
  summary: "简短摘要，通常不超过200字",
  content: `
    <p>文章内容第一段</p>
    
    <p>文章内容第二段</p>
    
    <ul>
      <li>列表项1</li>
      <li>列表项2</li>
    </ul>
    
    <p>更多内容...</p>
  `,
  category: "分类名称",  // 必须与已有分类匹配
  date: "2023-06-01",  // 格式：YYYY-MM-DD
  imageUrl: "/images/your-image.jpg",
  source: "来源网站",
  sourceUrl: "https://source-website.com/article",
  featured: false,  // 是否为精选文章
  tags: ["标签1", "标签2", "标签3"],
  readingTime: 5,  // 阅读时间（分钟）
  aiSummary: "由AI生成的文章摘要，突出关键点和主要发现"
}
```

## 如何添加新分类

1. 打开 `src/lib/data.ts` 文件
2. 在 `categories` 数组中添加新的分类对象
3. 确保分类的 `id` 是唯一的，并且与文章的 `category` 字段匹配

### 分类对象示例

```typescript
{
  id: "新分类ID",  // 这将用作文章的category字段
  name: "分类显示名称",
  description: "分类的详细描述"
}
```

## AI摘要生成

您可以使用以下方法为文章生成AI摘要：

1. 使用OpenAI API或其他AI服务
2. 提示词示例：
   ```
   请为以下文章生成一个简洁的摘要（100-150字），突出其关键点和主要发现：
   
   [文章内容]
   ```
3. 将生成的摘要添加到文章的 `aiSummary` 字段

## 图片管理

1. 将文章相关的图片放在 `public/images/` 目录下
2. 在文章对象中使用相对路径引用图片：`imageUrl: "/images/your-image.jpg"`
3. 建议使用统一尺寸的图片（例如 1200x630 像素）以保持一致的外观

## 内容更新流程

1. 每周从订阅邮件中收集AI领域的重要资讯
2. 对每篇文章进行整理和编辑，确保内容准确、结构清晰
3. 使用AI生成文章摘要
4. 将新文章添加到 `src/lib/data.ts` 文件中
5. 将相关图片添加到 `public/images/` 目录
6. 测试网站，确保新内容正确显示

## 未来扩展计划

在未来，我们可以考虑以下改进：

1. 将数据迁移到数据库（如MongoDB、Firebase等）
2. 开发一个简单的内容管理系统（CMS）
3. 实现自动化的内容收集和AI摘要生成
4. 添加用户账户和个性化推荐功能

## 注意事项

- 保持内容的专业性和准确性
- 定期检查和更新过时的信息
- 确保所有链接都是有效的
- 尊重原始内容的版权，适当引用来源 