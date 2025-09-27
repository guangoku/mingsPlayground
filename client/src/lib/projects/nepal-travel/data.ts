/**
 * Nepal Travel Diaries project data
 * Complete project data and configuration
 */

import { type ProjectData } from '../shared/types';
import { PROJECT_CATEGORIES, PROJECT_TAGS } from '../shared/constants';
import { NEPAL_TRAVEL_IMAGES } from './images';
import { NEPAL_TRAVEL_CONSTANTS } from './constants';

export const nepalTravelData: ProjectData = {
  id: NEPAL_TRAVEL_CONSTANTS.PROJECT_ID,
  title: {
    en: 'Nepal Travel Diaries',
    zh: '尼国游日记'
  },
  category: PROJECT_CATEGORIES.ART.id,
  description: {
    en: 'A graphic travelogue blending classical Chinese prose in Xu Xiake\'s style with ink-and-comic illustrations of Nepal\'s festivals, cities, and mountain trails.',
    zh: '以徐霞客游记风格的古文，结合水墨与漫画的绘画方式，记录尼泊尔的节庆、古城与徒步旅程。'
  },
  imageUrl: NEPAL_TRAVEL_IMAGES.hero,
  tags: [PROJECT_CATEGORIES.ART.id, PROJECT_TAGS.GRAPHIC_NOVELS.id, PROJECT_TAGS.CHINESE_LITERATURE.id],
  
  // Rich detail data
  detailImages: [...NEPAL_TRAVEL_IMAGES.pages],
  processImages: [...NEPAL_TRAVEL_IMAGES.sketches],
  
  // Type-specific fields
  medium: NEPAL_TRAVEL_CONSTANTS.MEDIUM,
  techniques: ['Ink Painting', 'Comic Illustration', 'Classical Chinese Prose'],
  timeline: NEPAL_TRAVEL_CONSTANTS.CREATED_YEAR,
  
  // Challenges and learnings
  challenges: {
    en: 'Balancing classical Chinese literary style with modern graphic novel format, and capturing the essence of Nepalese culture through art.',
    zh: '平衡古典中国文学风格与现代图像小说格式，并通过艺术捕捉尼泊尔文化的精髓。'
  },
  
  learnings: {
    en: 'Developed skills in classical Chinese prose writing, learned to blend traditional and modern art styles, and gained deep appreciation for cross-cultural storytelling.',
    zh: '发展了古典中国散文写作技能，学会了融合传统和现代艺术风格，并对跨文化叙事有了深刻的理解。'
  }
};
