/**
 * Nepal Travel Diaries project data
 * Complete project data and configuration
 */

import { type ProjectData } from '../shared/types';
import { PROJECT_CATEGORIES, PROJECT_TAGS } from '../shared/constants';
import { NEPAL_TRAVEL_IMAGES } from './images';
import { NEPAL_TRAVEL_CONSTANTS } from './constants';
import nepalTravelJournalEn from './nepal-travel-journal-en.md?raw';
import nepalTravelJournalZh from './nepal-travel-journal-zh.md?raw';

export const nepalTravelData: ProjectData = {
  id: NEPAL_TRAVEL_CONSTANTS.PROJECT_ID,
  slug: 'nepal-travel',
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
  
  // Rich content for Nepal Travel
  mainContentTitle: {
    en: 'Travel Journal',
    zh: '游记正文'
  },
  
  travelJournal: {
    title: {
      en: 'Nepal Travel Journal',
      zh: '尼泊尔游记'
    },
    content: {
      en: nepalTravelJournalEn,
      zh: nepalTravelJournalZh
    }
  }
};
