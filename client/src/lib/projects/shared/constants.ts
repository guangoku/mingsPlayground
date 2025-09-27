/**
 * Shared project constants
 * Constants used across all project modules
 */

// Project category definitions with visual indicators
export const PROJECT_CATEGORIES = {
  ART: {
    id: 'art',
    label: { en: 'Art & Illustration', zh: '艺术插画' },
    icon: 'Palette'
  },
  TECH: {
    id: 'tech',
    label: { en: 'Tech Development', zh: '技术开发' },
    icon: 'Code'
  },
  SOCIAL_IMPACT: {
    id: 'social-impact',
    label: { en: 'Social Impact', zh: '社会影响' },
    icon: 'Heart'
  }
} as const;

export type ProjectCategory = typeof PROJECT_CATEGORIES[keyof typeof PROJECT_CATEGORIES]['id'];

// Project-specific UI constants
export const PROJECT_UI = {
  CARD_IMAGE_SIZE: 'w-32 h-32',
  MAX_TAGS_DISPLAY: 3,
  FEATURED_PROJECTS_LIMIT: 6
} as const;

// Project filter constants
export const PROJECT_FILTERS = {
  ALL: 'all',
  FEATURED: 'featured'
} as const;

// Content tags (not all filterable)
const CONTENT_TAGS = {
  CHARACTER_DESIGN: {
    id: 'character-design',
    label: { en: 'Character Design', zh: '角色设计' },
    filterable: false
  },
  GRAPHIC_NOVELS: {
    id: 'graphic-novels',
    label: { en: 'Graphic Novels', zh: '图像小说' },
    filterable: true
  },
  CHINESE_LITERATURE: {
    id: 'chinese-literature',
    label: { en: 'Chinese Literature', zh: '中国文学' },
    filterable: false
  },
  WEB_APP: {
    id: 'web-app',
    label: { en: 'Web App', zh: '网页应用' },
    filterable: true
  },
  WECHAT: {
    id: 'wechat',
    label: { en: 'WeChat', zh: '微信' },
    filterable: false
  },
  PAYMENT: {
    id: 'payment',
    label: { en: 'Payment', zh: '支付' },
    filterable: false
  },
  CHARITY: {
    id: 'charity',
    label: { en: 'Charity', zh: '慈善' },
    filterable: false
  }
} as const;

// Automatically combine categories and content tags
export const PROJECT_TAGS = {
  // Add categories as tags (always filterable)
  ...Object.fromEntries(
    Object.values(PROJECT_CATEGORIES).map(cat => [
      cat.id.toUpperCase().replace('-', '_'),
      {
        id: cat.id,
        label: cat.label,
        filterable: true
      }
    ])
  ),
  // Add content tags
  ...CONTENT_TAGS
} as const;

export type ProjectTag = typeof PROJECT_TAGS[keyof typeof PROJECT_TAGS]['id'] | ProjectCategory;

// Helper function to get all filterable tags
export const getFilterableTags = () => {
  return Object.values(PROJECT_TAGS).filter(tag => tag.filterable);
};
