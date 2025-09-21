/**
 * Project data and helper functions
 * Centralized location for all project-related data and data manipulation
 */

import { type Project } from './types';
import { PROJECT_CATEGORIES, PROJECT_TAGS } from './constants';
import octopusGirlCool from '@assets/octopus_girl_cool.png';
import nepal_travel_diaries_cover from '@assets/nepal_travel_diaries_cover.jpg';
import flashmind_cover from '@assets/flashmind_cover.png';
import yihe_miniprogram_cover from '@assets/yihe_miniprogram_cover.jpg';

export const projects: Project[] = [
  {
    id: '1',
    title: {
      en: 'Octopus Girl',
      zh: '章鱼女孩'
    },
    category: PROJECT_CATEGORIES.ART.id,
    description: {
      en: 'My personal avatar inspired by marine life, reflecting the octopus\'s intelligence, curiosity, and adaptability.',
      zh: '以章鱼为灵感的个人化身，体现了章鱼的智慧、好奇与适应力。'
    },
    imageUrl: octopusGirlCool,
    tags: [PROJECT_CATEGORIES.ART.id, PROJECT_TAGS.CHARACTER_DESIGN.id],
    artistStatement: {
      en: 'This character represents my journey of continuous learning and adaptation, just like how an octopus can change its shape and color to fit any environment.',
      zh: '这个角色代表了我持续学习和适应的旅程，就像章鱼可以改变形状和颜色来适应任何环境一样。'
    }
  },
  {
    id: '2',
    title: {
      en: 'Nepal Travel Diaries',
      zh: '尼国游日记'
    },
    category: PROJECT_CATEGORIES.ART.id,
    description: {
      en: 'A graphic travelogue blending classical Chinese prose in Xu Xiake\'s style with ink-and-comic illustrations of Nepal\'s festivals, cities, and mountain trails.',
      zh: '以徐霞客游记风格的古文，结合水墨与漫画的绘画方式，记录尼泊尔的节庆、古城与徒步旅程。'
    },
    imageUrl: nepal_travel_diaries_cover,
    tags: [PROJECT_CATEGORIES.ART.id, PROJECT_TAGS.GRAPHIC_NOVELS.id, PROJECT_TAGS.CHINESE_LITERATURE.id]
  },
  {
    id: '3',
    title: {
      en: 'FlashMind',
      zh: '闪念卡'
    },
    category: PROJECT_CATEGORIES.TECH.id,
    description: {
      en: 'AI flashcards that turn notes, links, or files into dynamic study cards with smart tagging and collections.',
      zh: '记忆卡片应用，把笔记、链接或文件转化为动态学习卡片，并支持智能标签与合集'
    },
    imageUrl: flashmind_cover,
    liveUrl: 'https://flashmind.app',
    technicalStack: ['React', 'TypeScript', 'Node.js', 'OpenAI API'],
    tags: [PROJECT_CATEGORIES.TECH.id, PROJECT_TAGS.WEB_APP.id]
  },
  {
    id: '4',
    title: {
      en: 'Charity Box Mini-Program',
      zh: '益盒小程序'
    },
    category: PROJECT_CATEGORIES.SOCIAL_IMPACT.id,
    description: {
      en: 'A WeChat mini-program that makes donating 1% of income simple and transparent, supporting effective charities across China. I contributed to backend design, payment workflows, and user experience improvements.',
      zh: '基于微信的小程序，让用户轻松透明地捐出收入的1%，支持全中国的高效公益组织。我参与了后端设计、支付流程及用户体验优化。'
    },
    imageUrl: yihe_miniprogram_cover,
    tags: [PROJECT_CATEGORIES.SOCIAL_IMPACT.id, PROJECT_TAGS.WEB_APP.id, PROJECT_TAGS.WECHAT.id, PROJECT_TAGS.PAYMENT.id, PROJECT_TAGS.CHARITY.id],
    impactMetrics: [
      { label: 'Users', value: '10,000+' },
      { label: 'Donations', value: '¥500,000+' },
      { label: 'Charities', value: '50+' }
    ]
  }
];

// Helper functions
export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = (): Project[] => {
  // For now, return all projects since we removed the featured field
  // In the future, you can add a featured field back or use other criteria
  return projects;
};

export const getAllProjectCategories = (): string[] => {
  return Array.from(new Set(projects.map(project => project.category)));
};

export const getProjectsByFilter = (filter: string): Project[] => {
  switch (filter) {
    case 'featured':
      return getFeaturedProjects();
    case 'all':
    default:
      return projects;
  }
};

export const searchProjects = (query: string, language: 'en' | 'zh' = 'en'): Project[] => {
  const lowerQuery = query.toLowerCase();
  return projects.filter(project => {
    const title = project.title[language].toLowerCase();
    const description = project.description[language].toLowerCase();
    const tags = project.tags?.join(' ').toLowerCase() || '';
    
    return title.includes(lowerQuery) || 
           description.includes(lowerQuery) || 
           tags.includes(lowerQuery);
  });
};

export const getProjectStats = () => {
  const totalProjects = projects.length;
  const featuredProjects = getFeaturedProjects().length;
  const categories = getAllProjectCategories();
  
  return {
    total: totalProjects,
    featured: featuredProjects,
    categories: categories.length,
    byCategory: categories.reduce((acc, category) => {
      acc[category] = getProjectsByCategory(category).length;
      return acc;
    }, {} as Record<string, number>)
  };
};
