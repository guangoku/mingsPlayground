/**
 * FlashMind project data
 * Complete project data and configuration
 */

import { type ProjectData } from '../shared/types';
import { PROJECT_CATEGORIES, PROJECT_TAGS } from '../shared/constants';
import { FLASHMIND_IMAGES } from './images';
import { FLASHMIND_CONSTANTS } from './constants';

export const flashmindData: ProjectData = {
  id: FLASHMIND_CONSTANTS.PROJECT_ID,
  title: {
    en: 'FlashMind',
    zh: '闪念卡'
  },
  category: PROJECT_CATEGORIES.TECH.id,
  description: {
    en: 'AI flashcards that turn notes, links, or files into dynamic study cards with smart tagging and collections.',
    zh: '记忆卡片应用，把笔记、链接或文件转化为动态学习卡片，并支持智能标签与合集'
  },
  imageUrl: FLASHMIND_IMAGES.hero,
  tags: [PROJECT_CATEGORIES.TECH.id, PROJECT_TAGS.WEB_APP.id],
  
  // Rich detail data
  detailImages: [...FLASHMIND_IMAGES.screenshots],
  processImages: [...FLASHMIND_IMAGES.architecture] ,
  liveUrl: FLASHMIND_CONSTANTS.LIVE_URL,
  technicalStack: [...FLASHMIND_CONSTANTS.TECHNICAL_STACK],
  // Type-specific fields
  timeline: FLASHMIND_CONSTANTS.LAUNCH_YEAR,
  collaborators: ['Solo Project'],
  
  // Challenges and learnings
  challenges: {
    en: 'Integrating AI APIs effectively, creating an intuitive user interface for complex functionality, and optimizing performance for large datasets.',
    zh: '有效集成AI API，为复杂功能创建直观的用户界面，以及优化大数据集的性能。'
  },
  
  learnings: {
    en: 'Mastered AI integration patterns, learned advanced React state management, and gained experience with modern web app architecture.',
    zh: '掌握了AI集成模式，学习了高级React状态管理，并获得了现代Web应用架构的经验。'
  }
};
