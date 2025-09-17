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
  category: 'tech' | 'travel' | 'learning';
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
    category: 'tech'
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
    category: 'learning'
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
    category: 'travel'
  }
];

const categories = [
  { id: 'all', label: { en: 'All Posts', zh: '所有文章' } },
  { id: 'tech', label: { en: 'Tech', zh: '技术' } },
  { id: 'travel', label: { en: 'Travel', zh: '旅行' } },
  { id: 'learning', label: { en: 'Learning', zh: '学习' } }
];

const categoryMap = {
  tech: { en: 'Tech', zh: '技术' },
  travel: { en: 'Travel', zh: '旅行' },
  learning: { en: 'Learning', zh: '学习' }
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
    <section className="py-16 px-6 bg-background" id="blog">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground" data-testid="text-blog-title">
            {language === 'en' ? 'Blog & Thoughts' : '博客与思考'}
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground" data-testid="text-blog-description">
            {language === 'en' 
              ? 'Sharing insights on technology, travel, and continuous learning.'
              : '分享关于技术、旅行和持续学习的见解。'
            }
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={language === 'en' ? 'Search posts...' : '搜索文章...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
              data-testid="input-blog-search"
            />
          </div>
          <div className="flex gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="hover-elevate rounded-full"
                data-testid={`button-category-${category.id}`}
              >
                {category.label[language]}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="group cursor-pointer hover-elevate" onClick={() => handlePostClick(post.id)} data-testid={`card-post-${post.id}`}>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="capitalize">{categoryMap[post.category][language]}</Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime[language]}
                  </div>
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors" data-testid={`text-post-title-${post.id}`}>
                  {post.title[language]}
                </h3>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4" data-testid={`text-post-excerpt-${post.id}`}>
                  {post.excerpt[language]}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags[language].map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">{tag}</Badge>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(post.date).toLocaleDateString(language === 'en' ? 'en-US' : 'zh-CN')}
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground" data-testid="text-no-posts">
              {language === 'en' ? 'No posts found matching your criteria.' : '未找到符合条件的文章。'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}