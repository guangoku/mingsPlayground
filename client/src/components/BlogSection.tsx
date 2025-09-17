import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Search, ArrowRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
  readTime: string;
  category: 'tech' | 'travel' | 'learning';
}

interface BlogSectionProps {
  language: 'en' | 'zh';
}

// TODO: Remove mock data - replace with real blog posts
const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Data Pipelines with Modern Tools',
    excerpt: 'Exploring the latest tools and techniques for efficient data engineering workflows.',
    tags: ['Data Engineering', 'Python', 'ETL'],
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'tech'
  },
  {
    id: '2',
    title: 'Minimalist Art and Code: Finding Beauty in Simplicity',
    excerpt: 'How minimalist design principles can improve both artistic expression and code quality.',
    tags: ['Design', 'Art', 'Programming'],
    date: '2024-01-10', 
    readTime: '6 min read',
    category: 'learning'
  },
  {
    id: '3',
    title: 'Digital Nomad Journey: Working from Cafes Around the World',
    excerpt: 'Lessons learned from remote work while traveling and exploring new cultures.',
    tags: ['Remote Work', 'Travel', 'Lifestyle'],
    date: '2024-01-05',
    readTime: '10 min read',
    category: 'travel'
  }
];

const categories = [
  { id: 'all', label: { en: 'All Posts', zh: '所有文章' } },
  { id: 'tech', label: { en: 'Tech', zh: '技术' } },
  { id: 'travel', label: { en: 'Travel', zh: '旅行' } },
  { id: 'learning', label: { en: 'Learning', zh: '学习' } }
];

export default function BlogSection({ language }: BlogSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPosts = mockPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
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
                className="hover-elevate"
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
                  <Badge variant="secondary" className="capitalize">{post.category}</Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors" data-testid={`text-post-title-${post.id}`}>
                  {post.title}
                </h3>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4" data-testid={`text-post-excerpt-${post.id}`}>
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.map((tag, index) => (
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