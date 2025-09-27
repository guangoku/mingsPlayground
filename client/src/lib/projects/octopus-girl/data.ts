/**
 * Octopus Girl project data
 * Complete project data and configuration
 */

import { type ProjectData } from '../shared/types';
import { PROJECT_CATEGORIES, PROJECT_TAGS } from '../shared/constants';
import { OCTOPUS_GIRL_IMAGES } from './images';
import { OCTOPUS_GIRL_CONSTANTS } from './constants';

export const octopusGirlData: ProjectData = {
  id: OCTOPUS_GIRL_CONSTANTS.PROJECT_ID,
  title: {
    en: 'Octopus Gir: A Personal Avatar',
    zh: '章鱼女孩'
  },
  category: PROJECT_CATEGORIES.ART.id,
  description: {
    en: 'My personal avatar inspired by marine life, reflecting the octopus\'s intelligence, curiosity, and adaptability.',
    zh: '以章鱼为灵感的个人化身，体现了章鱼的智慧、好奇与适应力。'
  },
  imageUrl: OCTOPUS_GIRL_IMAGES.hero,
  tags: [PROJECT_CATEGORIES.ART.id, PROJECT_TAGS.CHARACTER_DESIGN.id],
  
  // Rich detail data
  detailImages: [...OCTOPUS_GIRL_IMAGES.gallery],
  
  // Artist statement
  artistStatement: {
    en: 'Octopus Girl is more than a character — she is my personal avatar and a recurring theme in my creative work. Inspired by my love of scuba diving and fascination with marine life, she embodies the qualities I admire most in octopuses: intelligence, curiosity, adaptability, playfulness, and a touch of shyness. Through a series of illustrations, I explore her moods, colors, and personalities — from warm and curious to contemplative and serene. This project is both a visual journey and a reflection of my own values: problem-solving, exploration, and embracing the unknown.',
    zh: '这个角色代表了我持续学习和适应的旅程，就像章鱼可以改变形状和颜色来适应任何环境一样。'
  },
  
  // Type-specific fields
  techniques: ['Digital Painting', 'Character Design', 'Color Theory'],
  
  // Challenges and learnings
  challenges: {
    en: 'Creating a character that balances cuteness with intelligence, and designing a versatile avatar that works across different contexts.',
    zh: '创造一个平衡可爱与智慧的角色，设计一个在不同语境下都能通用的化身。'
  },
  
  learnings: {
    en: 'Learned the importance of character consistency while maintaining visual variety, and how to create a memorable personal brand through design.',
    zh: '学会了在保持视觉多样性的同时保持角色一致性，以及如何通过设计创造令人难忘的个人品牌。'
  }
};
