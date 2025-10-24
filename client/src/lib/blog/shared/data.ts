import { type BlogPost } from './types';
import { BLOG_POST_TYPES } from './constants';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'visual-storytelling-lab',
    type: BLOG_POST_TYPES.static,
    title: {
      en: 'Visual Storytelling Lab: A Systematic Learning Journey',
      zh: '图像叙事实验室：我的系统化学习之旅'
    },
    excerpt: {
      en: 'A hub mapping my visual storytelling learning line — from drawing and picture-book craft to illustrated travel writing and graphic novels. It includes two major projects (Nepal Illustrated Travelogue • Magical-Island Scuba Graphic Novel) and a casual daily sketchbook branch.',
      zh: '作为总览页，用“地铁图”梳理我的图像叙事学习路线：从绘画与绘本技法，到插图旅行写作与图像小说创作。包含两个主要项目（尼泊尔插图书 • 海岛潜水奇幻图像小说）以及日常速写分支。'
    },
    tags: {
      en: ['Visual Storytelling','Illustrated Book','Graphic Novel','Manga','Sketchbook','Storytelling','Chinese Ink','Travelogue','Art'],
      zh: ['图像叙事','插图书','图像小说','漫画','速写本','故事叙事','水墨','旅行插图','艺术']
    },
    isFeatured: true,
    date: '2025-03-01',
    readTimeMinutes: 7,
    category: 'systematic-study',
    journeyMapId: 'visual-storytelling-lab',
    staticContent: {
      component: 'GraphicNovelDetail',
      images: ['sketch-process.jpg', 'final-pages.jpg']
    }
  },
  {
    id: '2',
    slug: 'travel-with-stories-spain',
    type: BLOG_POST_TYPES.static,
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
    isFeatured: false,
    date: '2025-02-20',
    readTimeMinutes: 6,
    category: 'travel-notes',
    staticContent: {
      component: 'TravelNotesDetail',
      images: ['spain-photos.jpg', 'book-stack.jpg']
    }
  },
  {
    id: '3',
    slug: '12-months-1-goal-data-ml',
    type: BLOG_POST_TYPES.static,
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
    isFeatured: true,
    date: '2025-02-05',
    readTimeMinutes: 10,
    category: 'systematic-study',
    staticContent: {
      component: 'SystematicStudyDetail',
      images: ['learning-plan.jpg']
    }
  },
  {
    id: '4',
    slug: 'why-colors-look-different',
    type: BLOG_POST_TYPES.static,
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
    isFeatured: false,
    date: '2025-01-28',
    readTimeMinutes: 5,
    category: 'curious-minds',
    staticContent: {
      component: 'CuriousMindsDetail',
      images: ['color-examples.jpg']
    },
  },
  {
    id: '5',
    slug: 'invisible-highways-cdn-guide',
    type: BLOG_POST_TYPES.static,
    title: {
      en: 'The Invisible Highways of the Internet: A Beginner\'s Guide to CDNs',
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
    isFeatured: false,
    date: '2025-01-18',
    readTimeMinutes: 6,
    category: 'curious-minds',
    staticContent: {
      component: 'CDNGuideDetail',
      images: ['cdn-diagram.jpg']
    }
  },
  {
    id: '6',
    slug: 'chroniques-birmanes',
    type: BLOG_POST_TYPES.notion,
    title: {
      en: 'Chroniques Birmanes',
      zh: '缅甸编年史'
    },
    excerpt: {
      en: 'Travel notes and cultural observations from Myanmar, exploring the intersection of tradition and modernity.',
      zh: '来自缅甸的旅行笔记和文化观察，探索传统与现代的交汇点。'
    },
    tags: {
      en: ['Travel', 'Culture', 'Myanmar'],
      zh: ['旅行', '文化', '缅甸']
    },
    isFeatured: true,
    date: '2025-01-15',
    readTimeMinutes: 8,
    category: 'travel-notes',
    notionContent: {
      pageId: '28dd61d413a180c7998fe3a145acfff9', 
      lastUpdated: '2025-01-15'
    }
  },
  {
    id: '7',
    slug: 'hosting-refugee-family',
    type: BLOG_POST_TYPES.static,
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
    isFeatured: false,
    date: '2025-01-10',
    readTimeMinutes: 8,
    category: 'life-experiences',
    staticContent: {
      component: 'LifeExperiencesDetail',
      images: ['volunteer-photos.jpg']
    }
  },
  {
    id: '8',
    slug: 'teaching-skiing-disabilities',
    type: BLOG_POST_TYPES.static,
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
    isFeatured: false,
    date: '2025-01-02',
    readTimeMinutes: 7,
    category: 'life-experiences',
    staticContent: {
      component: 'LifeExperiencesDetail',
      images: ['skiing-photos.jpg']
    }
  },
  {
    id: '9',
    slug: 'city-lofts-rural-houses',
    type: BLOG_POST_TYPES.static,
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
    isFeatured: false,
    date: '2024-12-15',
    readTimeMinutes: 9,
    category: 'life-experiences',
    staticContent: {
      component: 'LifeExperiencesDetail',
      images: ['coliving-photos.jpg']
    }
  }
];

// Helper function to get all posts
export const getAllBlogPosts = (): BlogPost[] => blogPosts;

// Helper function to get posts by type
export const getStaticPosts = (): BlogPost[] => blogPosts.filter(post => post.type === BLOG_POST_TYPES.static);

export const getNotionPosts = (): BlogPost[] => blogPosts.filter(post => post.type === BLOG_POST_TYPES.notion);