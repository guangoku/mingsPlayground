/**
 * Blog module - Main entry point
 * Re-exports all blog-related functionality
 */

// Shared utilities and types
export * from './shared/types';
export * from './shared/constants';
export * from './shared/utils';

// Blog data
export { blogPosts, getAllBlogPosts, getStaticPosts, getNotionPosts } from './shared/data';

// Import slug mapping functions
import { getBlogPostSlug as _getBlogPostSlug, getBlogPostIdFromSlug as _getBlogPostIdFromSlug } from './shared/utils';
import { blogPosts } from './shared/data';

// Slug mapping functions that use the blogPosts array
export const getBlogPostSlug = (postId: string) => _getBlogPostSlug(postId, blogPosts);
export const getBlogPostIdFromSlug = (slug: string) => _getBlogPostIdFromSlug(slug, blogPosts);

// Re-export specific types for convenience
export type { BlogPost } from './shared/types';
export type { BlogPostType, BlogCategoryId } from './shared/constants';
export type { BlogSectionProps, BlogDetailModalProps, BlogDetailComposerProps } from './shared/types';
