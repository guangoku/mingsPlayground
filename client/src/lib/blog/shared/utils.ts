/**
 * Blog utility functions
 * Helper functions for blog functionality
 */

import { type BlogPost } from './types';
import { type BlogCategoryId, type BlogPostType } from './constants';
import { type Language } from '../../types';
import { BLOG_CATEGORIES } from './constants';
import { getBilingualText, getBilingualArray } from '../../utils';

// Get category label by ID
export const getCategoryLabel = (categoryId: string, language: Language): string => {
  const category = Object.values(BLOG_CATEGORIES).find(cat => cat.id === categoryId);
  return category ? getBilingualText(category.label, language) : categoryId;
};

// Get blog post by ID
export const getBlogPostById = (posts: BlogPost[], id: string): BlogPost | undefined => {
  return posts.find(post => post.id === id);
};

// Filter posts by category
export const getPostsByCategory = (posts: BlogPost[], category: BlogCategoryId): BlogPost[] => {
  if (category === 'all') return posts;
  return posts.filter(post => post.category === category);
};

// Filter posts by type
export const getPostsByType = (posts: BlogPost[], type: BlogPostType | 'all'): BlogPost[] => {
  if (type === 'all') return posts;
  return posts.filter(post => post.type === type);
};

// Search posts
export const searchPosts = (posts: BlogPost[], query: string, language: Language): BlogPost[] => {
  if (!query.trim()) return posts;
  
  const searchTerm = query.toLowerCase();
  return posts.filter(post => {
    const title = getBilingualText(post.title, language).toLowerCase();
    const excerpt = getBilingualText(post.excerpt, language).toLowerCase();
    const tags = getBilingualArray(post.tags, language).join(' ').toLowerCase();
    
    return title.includes(searchTerm) || 
           excerpt.includes(searchTerm) || 
           tags.includes(searchTerm);
  });
};

// Format read time
export const formatReadTime = (minutes: number, language: Language): string => {
  if (language === 'zh') {
    return `${minutes} 分钟阅读`;
  }
  return `${minutes} min read`;
};

// Cache utilities
export const getCachedContent = (key: string): any | null => {
  try {
    const cached = localStorage.getItem(key);
    if (!cached) return null;
    
    const { data, timestamp } = JSON.parse(cached);
    const now = Date.now();
    
    // Check if cache is expired (24 hours)
    if (now - timestamp > 24 * 60 * 60 * 1000) {
      localStorage.removeItem(key);
      return null;
    }
    
    return data;
  } catch {
    return null;
  }
};

export const setCachedContent = (key: string, data: any): void => {
  try {
    const cacheData = {
      data,
      timestamp: Date.now()
    };
    localStorage.setItem(key, JSON.stringify(cacheData));
  } catch {
    // Ignore cache errors
  }
};

// Blog URL mapping functions (following project pattern)
export const getBlogPostSlug = (postId: string, posts: BlogPost[]): string => {
  const post = posts.find(p => p.id === postId);
  return post?.slug || 'unknown';
};

export const getBlogPostIdFromSlug = (slug: string, posts: BlogPost[]): string | null => {
  const post = posts.find(p => p.slug === slug);
  return post?.id || null;
};
