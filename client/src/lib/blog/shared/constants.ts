/**
 * Blog constants and configuration
 * Centralized constants for blog functionality
 */

import { type BilingualText } from '../../types';

// Blog categories (reusing existing structure)
export const BLOG_CATEGORIES = {
  'featured': {
    id: 'featured',
    label: { en: 'Featured', zh: '精选' },
    isDefault: true
  },
  'all': {
    id: 'all',
    label: { en: 'All Posts', zh: '所有文章' }
  },
  'systematic-study': {
    id: 'systematic-study',
    label: { en: 'Systematic Study', zh: '系统学习' }
  },
  'curious-minds': {
    id: 'curious-minds',
    label: { en: 'Curious Minds', zh: '好奇之心' }
  },
  'life-experiences': {
    id: 'life-experiences',
    label: { en: 'Life & Experiences', zh: '生活与经历' }
  },
  'travel-notes': {
    id: 'travel-notes',
    label: { en: 'Travel & Field Notes', zh: '旅行笔记' }
  },
  'reading-notes': {
    id: 'reading-notes',
    label: { en: 'Reading Notes', zh: '读书笔记' }
  }
} as const;

// Featured filter constants
export const FEATURED_FILTER = {
  ID: 'featured' as const,
  LABEL: { en: 'Featured', zh: '精选' } as BilingualText,
} as const;

// Default filter selection
export const DEFAULT_FILTER = FEATURED_FILTER.ID;

// Blog post types
export const BLOG_POST_TYPES = {
  static: 'static',
  notion: 'notion'
} as const;

// Subway map configuration
export const SUBWAY_MAP_CONFIG = {
  colors: {
    'systematic-study': '#3B82F6',  // Blue
    'travel-notes': '#10B981',      // Green
    'life-experiences': '#F59E0B',  // Orange
    'curious-minds': '#8B5CF6',     // Purple
    'reading-notes': '#EF4444'      // Red
  },
  defaultConnectionColor: '#6B7280',
  animatedConnectionColor: '#F59E0B'
} as const;

// Cache configuration
export const CACHE_CONFIG = {
  notionContent: {
    duration: 24 * 60 * 60 * 1000, // 24 hours
    keyPrefix: 'blog-notion-'
  },
  relationshipMap: {
    duration: 7 * 24 * 60 * 60 * 1000, // 7 days
    keyPrefix: 'blog-relationships-'
  }
} as const;

// Derived types from constants (following project pattern)
export type BlogPostType = typeof BLOG_POST_TYPES[keyof typeof BLOG_POST_TYPES];
export type BlogCategoryId = keyof typeof BLOG_CATEGORIES;
