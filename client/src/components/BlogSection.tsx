import { useState } from "react";
// Removed Card imports - using newspaper-style layout
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Search, ArrowRight } from "lucide-react";
import { getBilingualText, getBilingualArray, formatReadTime } from "@/lib/utils";
import { LANGUAGES, CATEGORIES } from "@/lib/constants";
import { type Language, type BilingualText, type BilingualArray } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";

// Single source of truth for categories
const categories = [
  { id: 'all', label: { en: 'All Posts', zh: '所有文章' } },
  { id: 'systematic-study', label: { en: 'Systematic Study', zh: '系统学习' } },
  { id: 'curious-minds', label: { en: 'Curious Minds', zh: '好奇之心' } },
  { id: 'life-experiences', label: { en: 'Life & Experiences', zh: '生活与经历' } },
  { id: 'travel-notes', label: { en: 'Travel & Field Notes', zh: '旅行笔记' } },
  { id: 'reading-notes', label: { en: 'Reading Notes', zh: '读书笔记' } }
] as const;

// Extract category IDs for type safety (excluding 'all')
type CategoryId = typeof categories[number]['id'];
type BlogCategoryId = Exclude<CategoryId, 'all'>;

interface BlogPost {
  id: string;
  title: BilingualText;
  excerpt: BilingualText;
  tags: BilingualArray;
  date: string;
  readTimeMinutes: number;
  category: BlogCategoryId;
}

interface BlogSectionProps {
  language: Language;
}

// Real blog posts with bilingual support
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: {
      en: 'From Panels to Prose: My First Steps in Graphic Novel Storytelling',
      zh: '从分镜到文字：我的图像小说初体验'
    },
    excerpt: {
      en: 'Notes on how I approached graphic novel writing and illustration, from choosing materials to studying narrative flow.',
      zh: '记录我学习图像小说写作与插画的过程：从材料选择到叙事节奏的探索。'
    },
    tags: {
      en: ['Reading Journey', 'Graphic Novel', 'Art'],
      zh: ['阅读之旅', '图像小说', '艺术']
    },
    date: '2025-03-01',
    readTimeMinutes: 7,
    category: 'systematic-study'
  },
  {
    id: '2',
    title: {
      en: 'Travel with Stories: a Note on Spain',
      zh: '带着故事去旅行：西班牙笔记'
    },
    excerpt: {
      en: 'How books, films, and on-site discoveries shape travel experiences.',
      zh: '书籍、影视与现场感受如何塑造旅行体验。'
    },
    tags: {
      en: ['Travel Prep', 'Books', 'Culture', 'Spain'],
      zh: ['旅行准备', '书籍', '文化', '西班牙']
    },
    date: '2025-02-20',
    readTimeMinutes: 6,
    category: 'travel-notes'
  },
  {
    id: '3',
    title: {
      en: '12 Months, 1 Goal: Building Staff-Level Fluency in Data & ML Systems',
      zh: '十二个月，一个目标：构建数据与机器学习系统的架构师思维'
    },
    excerpt: {
      en: 'A structured study plan to go from analytics to architect-level thinking—foundation, systems fluency, and one deep specialization.',
      zh: '从分析师到架构师的学习计划：夯实基础、精通系统，并在一个领域深度专攻。'
    },
    tags: {
      en: ['Systematic Study', 'Data Engineering', 'ML', 'Career Growth'],
      zh: ['系统学习', '数据工程', '机器学习', '职业成长']
    },
    date: '2025-02-05',
    readTimeMinutes: 10,
    category: 'systematic-study'
  },
  {
    id: '4',
    title: {
      en: 'Why Colors Look Different in Nature vs on Your Computer',
      zh: '为什么自然界的颜色和电脑上的颜色不同'
    },
    excerpt: {
      en: 'An accessible explanation of how human eyes, pigments, and computer pixels mix light differently.',
      zh: '浅显易懂地解释人眼、颜料与像素在颜色混合上的不同。'
    },
    tags: {
      en: ['Casual Learning', 'Science', 'Tech Basics'],
      zh: ['轻松学习', '科学', '技术基础']
    },
    date: '2025-01-28',
    readTimeMinutes: 5,
    category: 'curious-minds'
  },
  {
    id: '5',
    title: {
      en: 'The Invisible Highways of the Internet: A Beginner’s Guide to CDNs',
      zh: '互联网的隐形高速公路：CDN入门指南'
    },
    excerpt: {
      en: 'Explaining how content delivery networks speed up websites, in plain language.',
      zh: '用通俗语言解释内容分发网络（CDN）如何加速网站。'
    },
    tags: {
      en: ['Web Basics', 'Infrastructure', 'CDN'],
      zh: ['网络基础', '基础设施', 'CDN']
    },
    date: '2025-01-18',
    readTimeMinutes: 6,
    category: 'curious-minds'
  },
  {
    id: '6',
    title: {
      en: 'What I Learned from Hosting a Refugee Family',
      zh: '接待难民家庭的收获与感悟'
    },
    excerpt: {
      en: 'Reflections on empathy, logistics, and the unexpected joys of opening your home.',
      zh: '关于同理心、生活安排与敞开家庭大门的意外喜悦的思考。'
    },
    tags: {
      en: ['Volunteering', 'Refugee Support', 'Social Impact'],
      zh: ['志愿服务', '难民支持', '社会影响']
    },
    date: '2025-01-10',
    readTimeMinutes: 8,
    category: 'life-experiences'
  },
  {
    id: '7',
    title: {
      en: 'Teaching Skiing to People with Disabilities: Lessons on Patience and Joy',
      zh: '教授残障人士滑雪：关于耐心与快乐的课程'
    },
    excerpt: {
      en: 'My experience as a ski instructor for adaptive programs, and what it taught me about resilience.',
      zh: '我作为残障滑雪课程教练的经历，以及它带给我的坚韧启示。'
    },
    tags: {
      en: ['Volunteering', 'Outdoor', 'Inclusion'],
      zh: ['志愿服务', '户外', '包容']
    },
    date: '2025-01-02',
    readTimeMinutes: 7,
    category: 'life-experiences'
  },
  {
    id: '8',
    title: {
      en: 'From City Lofts to Rural Houses: My Co-Living Experiences in China and Spain',
      zh: '从城市阁楼到乡村民居：我在中西两国的合住体验'
    },
    excerpt: {
      en: 'Observations on community, culture, and the trade-offs of living together in different settings.',
      zh: '关于社区、文化与合住在不同环境下的利弊的观察。'
    },
    tags: {
      en: ['Travel', 'Lifestyle', 'Co-living', 'Culture'],
      zh: ['旅行', '生活方式', '合住', '文化']
    },
    date: '2024-12-15',
    readTimeMinutes: 9,
    category: 'life-experiences'
  },
];

// Helper function to get category label by ID
const getCategoryLabel = (categoryId: string, language: Language) => {
  const category = categories.find(cat => cat.id === categoryId);
  return category ? category.label[language] : categoryId;
};

export default function BlogSection({ language }: BlogSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  const filteredPosts = blogPosts.filter(post => {
    const title = post.title[language];
    const tags = post.tags[language];
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const q = searchTerm.trim().toLowerCase();
    const matchesSearch = q === '' || title.toLowerCase().includes(q) || tags.some(t => t.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  const handlePostClick = (postId: string) => {
    // Show toast notification for placeholder content
    // TODO: Remove this once the blog post is ready
    toast({
      title: getBilingualText({ en: "Coming Soon", zh: "即将发布" }, language),
      description: getBilingualText({
        en: "Full post coming soon!",
        zh: "正文即将发布"
      }, language),
      duration: 1500,
    });
    console.log(`Preview blog post: ${postId} (placeholder content)`);
  };

  return (
    <section className="py-8 md:py-12 px-6 blog-bg" id="blog">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-200" data-testid="text-blog-title">
              {getBilingualText({ en: 'Blog', zh: '博客' }, language)}
            </h2>
            <Badge variant="outline" className="bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 border-yellow-300 dark:border-yellow-600">
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
            {categories.map((category) => (
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
                {category.label[language]}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Posts List - Newspaper Style */}
        <div className="space-y-0">
          {filteredPosts.map((post, index) => (
            <article
              key={post.id}
              className="group cursor-pointer hover:bg-stone-50/50 dark:hover:bg-stone-900/20 transition-all duration-300 py-4 px-0 relative opacity-90 hover:opacity-100"
              onClick={() => handlePostClick(post.id)}
              data-testid={`card-post-${post.id}`}
            >
              {/* Placeholder indicator */}
              <div className="absolute top-2 right-2 z-10">
                <Badge variant="outline" className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 border-orange-300 dark:border-orange-600 text-xs">
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
                      {getCategoryLabel(post.category, language)}
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
                  setSelectedCategory('all');
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
    </section>
  );
}