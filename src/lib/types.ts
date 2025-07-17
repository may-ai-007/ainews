export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  date: string;
  imageUrl?: string;
  source?: string;
  sourceUrl?: string;
  featured?: boolean;
  tags?: string[];
  readingTime?: number;
  aiSummary?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface SearchResult {
  articles: NewsArticle[];
  total: number;
  page: number;
  pageSize: number;
} 