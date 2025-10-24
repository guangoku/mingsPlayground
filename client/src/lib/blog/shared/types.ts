/**
 * Shared blog types and interfaces
 * Common types used across all blog modules
 */

import { type BilingualText, type BilingualArray } from '../../types';
import { type BlogPostType, type BlogCategoryId } from './constants';

// Re-export common types for convenience
export type { BilingualText, BilingualArray };

// Enhanced blog post interface
export interface BlogPost {
  id: string;
  slug: string; // URL-friendly identifier
  type: BlogPostType;
  title: BilingualText;
  excerpt: BilingualText;
  tags: BilingualArray;
  date: string;
  readTimeMinutes: number;
  category: BlogCategoryId;
  isFeatured: boolean; // Explicit featured flag instead of relying on tags
  
  // Journey map reference
  journeyMapId?: string; // Reference to journey map
  
  // Static post data
  staticContent?: {
    component: string;        // Component name for static posts
    images?: string[];        // Local images
    attachments?: string[];   // PDFs, etc.
  };
  
  // Notion post data
  notionContent?: {
    pageId: string;          // Notion page ID
    lastUpdated: string;     // For cache invalidation
  };
}

// Blog section props
export interface BlogSectionProps {
  language: import('../../types').Language;
}

// Blog detail modal props
export interface BlogDetailModalProps {
  post: BlogPost;
  isOpen: boolean;
  onClose: () => void;
  language: import('../../types').Language;
}

// Blog detail composer props
export interface BlogDetailComposerProps {
  post: BlogPost;
  language: import('../../types').Language;
}

// Relationship map data
export interface RelationshipMapData {
  lines: SubwayLine[];
  connections: SubwayConnection[];
}

export interface SubwayLine {
  id: string;
  name: BilingualText;
  color: string;
  stations: SubwayStation[];
}

export interface SubwayStation {
  id: string;
  name: BilingualText;
  position: { x: number; y: number };
  posts: string[];  // Post IDs at this station
}

export interface SubwayConnection {
  id: string;
  from: string;
  to: string;
  color?: string;
  animated?: boolean;
}
