import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Search, ArrowRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: { en: string; zh: string };
  excerpt: { en: string; zh: string };
  tags: { en: string[]; zh: string[] };
  date: string;
  readTime: { en: string; zh: string };
  category: 'learning-journey' | 'curious-minds' | 'adventure-travel' | 'deep-dives' | 'reading-notes';
}

interface BlogSectionProps {
  language: 'en' | 'zh';
}

// Real blog posts with bilingual support
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: {
      en: 'Building Data Pipelines with Modern Tools',
      zh: '用现代工具构建数据管道'
    },
    excerpt: {
      en: 'Exploring the latest tools and techniques for efficient data engineering workflows.',
      zh: '探索高效数据工程工作流的最新工具和技术。'
    },
    tags: {
      en: ['Data Engineering', 'Python', 'ETL'],
      zh: ['数据工程', 'Python', 'ETL']
    },
    date: '2024-01-15',
    readTime: { en: '8 min read', zh: '8分钟阅读' },
    category: 'learning-journey'
  },
  {
    id: '2',
    title: {
      en: 'Minimalist Art and Code: Finding Beauty in Simplicity',
      zh: '極简艺术与代码：在简单中发现美'
    },
    excerpt: {
      en: 'How minimalist design principles can improve both artistic expression and code quality.',
      zh: '极简设计原则如何提升艺术表达和代码质量。'
    },
    tags: {
      en: ['Design', 'Art', 'Programming'],
      zh: ['设计', '艺术', '编程']
    },
    date: '2024-01-10',
    readTime: { en: '6 min read', zh: '6分钟阅读' },
    category: 'deep-dives'
  },
  {
    id: '3',
    title: {
      en: 'Digital Nomad Journey: Working from Cafes Around the World',
      zh: '数字游民之旅：在世界各地咖啡厅工作'
    },
    excerpt: {
      en: 'Lessons learned from remote work while traveling and exploring new cultures.',
      zh: '在旅行和探索新文化的同时远程工作的经验教训。'
    },
    tags: {
      en: ['Remote Work', 'Travel', 'Lifestyle'],
      zh: ['远程工作', '旅行', '生活方式']
    },
    date: '2024-01-05',
    readTime: { en: '10 min read', zh: '10分钟阅读' },
    category: 'adventure-travel'
  },
  {
    id: '4',
    title: {
      en: 'Why Do We Dream? Exploring the Science of Sleep',
      zh: '我们为什么会做梦？探索睡眠的科学'
    },
    excerpt: {
      en: 'A deep dive into the fascinating world of dreams and what they reveal about our minds.',
      zh: '深入探索梦境的神奇世界，以及它们揭示的关于我们心灵的信息。'
    },
    tags: {
      en: ['Science', 'Psychology', 'Sleep'],
      zh: ['科学', '心理学', '睡眠']
    },
    date: '2024-01-20',
    readTime: { en: '7 min read', zh: '7分钟阅读' },
    category: 'curious-minds'
  },
  {
    id: '5',
    title: {
      en: 'Book Review: "Atomic Habits" - Building Better Systems',
      zh: '书评：《原子习惯》- 构建更好的系统'
    },
    excerpt: {
      en: 'Key insights from James Clear\'s masterpiece on habit formation and personal improvement.',
      zh: '从詹姆斯·克利尔的习惯养成和个人提升杰作中获得的深刻见解。'
    },
    tags: {
      en: ['Book Review', 'Habits', 'Productivity'],
      zh: ['书评', '习惯', '生产力']
    },
    date: '2024-01-18',
    readTime: { en: '5 min read', zh: '5分钟阅读' },
    category: 'reading-notes'
  }
];

const categories = [
  { id: 'all', label: { en: 'All Posts', zh: '所有文章' } },
  { id: 'learning-journey', label: { en: 'Learning Journey', zh: '学习之旅' } },
  { id: 'curious-minds', label: { en: 'Curious Minds', zh: '好奇之心' } },
  { id: 'adventure-travel', label: { en: 'Adventure & Travel', zh: '冒险与旅行' } },
  { id: 'deep-dives', label: { en: 'Deep Dives', zh: '深度探索' } },
  { id: 'reading-notes', label: { en: 'Reading Notes', zh: '读书笔记' } }
];

const categoryMap = {
  'learning-journey': { en: 'Learning Journey', zh: '学习之旅' },
  'curious-minds': { en: 'Curious Minds', zh: '好奇之心' },
  'adventure-travel': { en: 'Adventure & Travel', zh: '冒险与旅行' },
  'deep-dives': { en: 'Deep Dives', zh: '深度探索' },
  'reading-notes': { en: 'Reading Notes', zh: '读书笔记' }
} as const;

export default function BlogSection({ language }: BlogSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const title = post.title[language];
    const tags = post.tags[language];
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const q = searchTerm.trim().toLowerCase();
    const matchesSearch = q === '' || title.toLowerCase().includes(q) || tags.some(t => t.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  const handlePostClick = (postId: string) => {
    console.log(`Opening blog post: ${postId}`);
    // TODO: Navigate to blog post detail page
  };

  return (
    <section className="py-8 md:py-12 px-6 blog-bg" id="blog">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-stone-900 dark:text-stone-200" data-testid="text-blog-title">
            {language === 'en' ? 'Blog' : '博客'}
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-stone-700 dark:text-stone-300" data-testid="text-blog-description">
            {language === 'en'
              ? 'Reflections on technology, lifelong learning, books, and the world around me.'
              : '分享关于技术、旅行和持续学习的见解。'
            }
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-6 space-y-3">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-stone-600 dark:text-stone-400" />
            <Input
              placeholder={language === 'en' ? 'Search posts...' : '搜索文章...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 rounded-full border-2 bg-stone-50 dark:bg-stone-900/20 border-stone-300 dark:border-stone-600 text-stone-900 dark:text-stone-200 placeholder:text-stone-600 dark:placeholder:text-stone-400"
              data-testid="input-blog-search"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={`hover-elevate rounded-full ${selectedCategory === category.id
                  ? 'bg-stone-800 dark:bg-stone-600 text-stone-50 dark:text-white border-stone-800 dark:border-stone-600'
                  : 'bg-transparent text-stone-800 dark:text-stone-300 border-stone-600 dark:border-stone-400'
                  }`}
                data-testid={`button-category-${category.id}`}
              >
                {category.label[language]}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Posts List */}
        <div className="space-y-1">
          {filteredPosts.map((post, index) => (
            <div key={post.id}>
              <article
                className="group cursor-pointer hover:bg-stone-50 dark:hover:bg-stone-900/10 transition-all py-4 px-2 rounded"
                onClick={() => handlePostClick(post.id)}
                data-testid={`card-post-${post.id}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge
                        variant="secondary"
                        className="capitalize flex-shrink-0 text-xs bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200 border-stone-300 dark:border-stone-700"
                      >
                        {categoryMap[post.category][language]}
                      </Badge>
                      <div className="flex items-center text-xs text-stone-600 dark:text-stone-400">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(post.date).toLocaleDateString(language === 'en' ? 'en-US' : 'zh-CN')}
                      </div>
                      <div className="flex items-center text-xs text-stone-600 dark:text-stone-400">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime[language]}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold mb-2 group-hover:text-opacity-80 transition-colors text-stone-900 dark:text-stone-100" data-testid={`text-post-title-${post.id}`}>
                      {post.title[language]}
                    </h3>

                    <p className="text-sm leading-relaxed text-stone-700 dark:text-stone-300" data-testid={`text-post-excerpt-${post.id}`}>
                      {post.excerpt[language]}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-all text-stone-600 dark:text-stone-400" />
                    <div className="flex flex-wrap gap-1 justify-end max-w-[200px]">
                      {post.tags[language].slice(0, 3).map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="text-xs border-stone-400 dark:border-stone-600 text-stone-600 dark:text-stone-400 bg-transparent"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {post.tags[language].length > 3 && (
                        <span className="text-xs text-stone-600 dark:text-stone-400">
                          +{post.tags[language].length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
              {index < filteredPosts.length - 1 && (
                <hr className="border-stone-200 dark:border-stone-800" style={{ borderWidth: '0.5px' }} />
              )}
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p data-testid="text-no-posts" className="text-stone-600 dark:text-stone-400">
              {language === 'en' ? 'No posts found matching your criteria.' : '未找到符合条件的文章。'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}