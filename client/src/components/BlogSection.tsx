import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Search, ArrowRight } from "lucide-react";
import { getBilingualText, getBilingualArray, formatReadTime } from "@/lib/utils";
import { LANGUAGES, CATEGORIES } from "@/lib/constants";
import { type Language, type BilingualText, type BilingualArray } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";
import {
  blogPosts,
  BLOG_CATEGORIES,
  FEATURED_FILTER,
  DEFAULT_FILTER,
  getBlogPostSlug,
  type BlogPost,
  type BlogCategoryId
} from "@/lib/blog";
import BlogDetailModal from "./blog/BlogDetailModal";

// Single source of truth for categories (using new blog constants)
const categories = Object.values(BLOG_CATEGORIES);

interface BlogSectionProps {
  language: Language;
}

export default function BlogSection({ language }: BlogSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategoryId>(DEFAULT_FILTER);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toast } = useToast();

  // Use new utility functions for filtering
  const filteredPosts = blogPosts.filter((post: BlogPost) => {
    const matchesCategory = selectedCategory === 'all' ||
      (selectedCategory === FEATURED_FILTER.ID ? post.isFeatured : post.category === selectedCategory);
    const matchesSearch = searchTerm === '' ||
      getBilingualText(post.title, language).toLowerCase().includes(searchTerm.toLowerCase()) ||
      getBilingualArray(post.tags, language).some(tag =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  const handlePostClick = (post: BlogPost, event: React.MouseEvent) => {
    event.preventDefault(); // Prevent navigation on left-click
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  // Remove right-click handler - let browser handle it naturally

  return (
    <section className="py-8 md:py-12 px-6 blog-bg" id="blog">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-200" data-testid="text-blog-title">
              {getBilingualText({ en: 'Blog', zh: '博客' }, language)}
            </h2>
            <Badge variant="outline" className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-600">
              {getBilingualText({ en: 'Coming Soon', zh: '即将发布' }, language)}
            </Badge>
          </div>
          <p className="text-lg max-w-2xl mx-auto text-stone-700 dark:text-stone-300" data-testid="text-blog-description">
            {getBilingualText({
              en: 'Reflections on technology, lifelong learning, books, and the world around me. The section is under construction — first posts coming soon!',
              zh: '分享关于技术、旅行和持续学习的见解。完整文章正在准备中 —— 敬请期待。'
            }, language)}
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-stone-600 dark:text-stone-400" />
            <Input
              placeholder={getBilingualText({ en: 'Search posts...', zh: '搜索文章...' }, language)}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 rounded-full border-2 bg-stone-50 dark:bg-stone-900/20 border-stone-300 dark:border-stone-600 text-stone-900 dark:text-stone-200 placeholder:text-stone-600 dark:placeholder:text-stone-400 focus:border-stone-500 dark:focus:border-stone-400 transition-colors"
              data-testid="input-blog-search"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2 px-2">
            {/* Featured filter first */}
            <Button
              variant={selectedCategory === FEATURED_FILTER.ID ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(FEATURED_FILTER.ID)}
              className={`hover-elevate rounded-full transition-all duration-200 ${selectedCategory === FEATURED_FILTER.ID
                ? 'bg-stone-800 dark:bg-stone-600 text-stone-50 dark:text-white border-stone-800 dark:border-stone-600 shadow-sm'
                : 'bg-transparent text-stone-800 dark:text-stone-300 border-stone-600 dark:border-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800/50'
                }`}
              data-testid="button-category-featured"
            >
              {getBilingualText(FEATURED_FILTER.LABEL, language)}
            </Button>

            {/* Other categories */}
            {categories.filter(cat => cat.id !== FEATURED_FILTER.ID).map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={`hover-elevate rounded-full transition-all duration-200 ${selectedCategory === category.id
                  ? 'bg-stone-800 dark:bg-stone-600 text-stone-50 dark:text-white border-stone-800 dark:border-stone-600 shadow-sm'
                  : 'bg-transparent text-stone-800 dark:text-stone-300 border-stone-600 dark:border-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800/50'
                  }`}
                data-testid={`button-category-${category.id}`}
              >
                {getBilingualText(category.label, language)}
              </Button>
            ))}
          </div>

        </div>

        {/* Blog Posts List - Newspaper Style */}
        <div className="space-y-0">
          {filteredPosts.map((post: BlogPost, index: number) => (
            <a
              key={post.id}
              href={`/blog/${getBlogPostSlug(post.id)}`}
              onClick={(e) => handlePostClick(post, e)}
              className="block"
            >
              <article
                className="group cursor-pointer hover:bg-stone-50/50 dark:hover:bg-stone-900/20 transition-all duration-300 py-4 px-0 relative opacity-90 hover:opacity-100"
                data-testid={`card-post-${post.id}`}
              >
                {/* Preview Flag - Restored */}
                <div className="absolute top-2 right-2 z-10">
                  <Badge
                    variant="outline"
                    className="text-xs bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 border-yellow-300 dark:border-yellow-600"
                  >
                    {getBilingualText({ en: 'Preview', zh: '预览' }, language)}
                  </Badge>
                </div>
                {/* Newspaper-style layout */}
                <div className="space-y-2">
                  {/* Header with category, date, and read time - newspaper style */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge
                        variant="secondary"
                        className="capitalize text-xs bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-0 font-medium tracking-wide"
                      >
                        {getBilingualText(BLOG_CATEGORIES[post.category as keyof typeof BLOG_CATEGORIES]?.label || { en: post.category, zh: post.category }, language)}
                      </Badge>
                      <div className="flex items-center text-xs text-stone-500 dark:text-stone-500 font-mono">
                        <Calendar className="h-3 w-3 mr-1 flex-shrink-0" />
                        <span className="whitespace-nowrap">
                          {new Date(post.date).toLocaleDateString(language === LANGUAGES.EN ? 'en-US' : 'zh-CN')}
                        </span>
                      </div>
                      <div className="flex items-center text-xs text-stone-500 dark:text-stone-500 font-mono">
                        <Clock className="h-3 w-3 mr-1 flex-shrink-0" />
                        <span className="whitespace-nowrap">
                          {formatReadTime(post.readTimeMinutes, language)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Title - newspaper headline style */}
                  <h3 className="text-lg md:text-xl font-bold group-hover:text-stone-600 dark:group-hover:text-stone-400 transition-colors text-stone-900 dark:text-stone-100 leading-tight tracking-tight" data-testid={`text-post-title-${post.id}`}>
                    {getBilingualText(post.title, language)}
                  </h3>

                  {/* Excerpt - newspaper body text style */}
                  <p className="text-sm md:text-base leading-relaxed text-stone-700 dark:text-stone-300 max-w-4xl" data-testid={`text-post-excerpt-${post.id}`}>
                    {getBilingualText(post.excerpt, language)}
                  </p>

                  {/* Tags - newspaper tags style with better alignment */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex flex-wrap gap-1.5 flex-1 min-w-0">
                      {getBilingualArray(post.tags, language).slice(0, 4).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs text-stone-500 dark:text-stone-500 bg-stone-100 dark:bg-stone-800 px-2 py-0.5 rounded-sm font-mono tracking-wide inline-block"
                        >
                          #{tag}
                        </span>
                      ))}
                      {post.tags[language].length > 4 && (
                        <span className="text-xs text-stone-500 dark:text-stone-500 font-mono">
                          +{post.tags[language].length - 4} more
                        </span>
                      )}
                    </div>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-all text-stone-400 dark:text-stone-600 flex-shrink-0 ml-3" />
                  </div>

                </div>

                {/* Single line divider */}
                {index < filteredPosts.length - 1 && (
                  <div className="mt-4 pt-2 border-t border-stone-200 dark:border-stone-800" ></div>
                )}
              </article>
            </a>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center">
                <Search className="h-8 w-8 text-stone-400 dark:text-stone-500" />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-2">
                {getBilingualText({
                  en: 'No posts found',
                  zh: '未找到文章'
                }, language)}
              </h3>
              <p data-testid="text-no-posts" className="text-stone-600 dark:text-stone-400 mb-4">
                {getBilingualText({
                  en: 'Try adjusting your search terms or category filter.',
                  zh: '尝试调整搜索词或分类筛选。'
                }, language)}
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory(DEFAULT_FILTER);
                }}
                className="hover-elevate"
              >
                {getBilingualText({
                  en: 'Clear filters',
                  zh: '清除筛选'
                }, language)}
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Blog Detail Modal */}
      {selectedPost && (
        <BlogDetailModal
          post={selectedPost}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedPost(null);
          }}
          language={language}
        />
      )}
    </section>
  );
}