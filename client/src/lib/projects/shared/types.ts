/**
 * Shared project types and interfaces
 * Common types used across all project modules
 */

import { type BilingualText } from '../../types';

// Project category type
export type { ProjectCategory } from '../constants';

// Enhanced project interface with rich detail support
export interface Project {
  id: string;
  title: BilingualText;
  category: import('../constants').ProjectCategory;
  description: BilingualText;
  imageUrl: string;
  
  // Rich detail data
  detailImages?: string[];
  processImages?: string[];
  liveUrl?: string;
  githubUrl?: string;
  impactMetrics?: { label: string; value: string }[];
  artistStatement?: BilingualText;
  technicalStack?: string[];
  tags?: import('../constants').ProjectTag[]; // Additional tags (separate from category)
}

// Project filter type
export type ProjectFilter = 'all' | 'featured' | string;

// Project display mode
export type ProjectDisplayMode = 'grid' | 'list' | 'category-rows';

// Project card props
export interface ProjectCardProps {
  project: Project;
  language: import('../../types').Language;
  onLike: (id: string) => void;
  displayMode?: ProjectDisplayMode;
}

// Project section props
export interface ProjectSectionProps {
  language: import('../../types').Language;
  showFeaturedOnly?: boolean;
  displayMode?: ProjectDisplayMode;
}

// Project detail props (for modal/page implementation)
export interface ProjectDetailProps {
  project: Project;
  language: import('../../types').Language;
  onClose?: () => void;
  showNavigation?: boolean;
}

// Project-specific data interface
export interface ProjectData {
  id: string;
  title: BilingualText;
  category: import('../constants').ProjectCategory;
  description: BilingualText;
  imageUrl: string;
  tags: import('../constants').ProjectTag[];
  
  // Rich detail data
  detailImages?: string[];
  processImages?: string[];
  liveUrl?: string;
  githubUrl?: string;
  impactMetrics?: { label: string; value: string }[];
  artistStatement?: BilingualText;
  technicalStack?: string[];
  
  // Type-specific fields
  medium?: string;
  techniques?: string[];
  collaborators?: string[];
  timeline?: string;
  challenges?: BilingualText;
  learnings?: BilingualText;
}
