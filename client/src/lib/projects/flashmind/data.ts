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
  slug: 'flashmind',
  title: {
    en: 'FlashMind',
    zh: '闪念卡'
  },
  category: PROJECT_CATEGORIES.TECH.id,
  description: {
    en: 'Smart Flashcards from What Matters. Turn anything into flashcards—in seconds—with a guided assistant.Review, tag, and study with dynamic practice that stays fresh.',
    zh: '来自What Matters的智能闪念卡。将任何内容转化为闪念卡——只需几秒——通过引导式助手。复习、标签和动态练习，保持新鲜。'
  },
  imageUrl: FLASHMIND_IMAGES.hero,
  tags: [PROJECT_CATEGORIES.TECH.id, PROJECT_TAGS.WEB_APP.id],
  detailImages: FLASHMIND_IMAGES.screenshots
};
