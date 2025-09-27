/**
 * Charity Box project data
 * Complete project data and configuration
 */

import { type ProjectData } from '../shared/types';
import { PROJECT_CATEGORIES, PROJECT_TAGS } from '../shared/constants';
import { CHARITY_BOX_IMAGES } from './images';
import { CHARITY_BOX_CONSTANTS } from './constants';

export const charityBoxData: ProjectData = {
  id: CHARITY_BOX_CONSTANTS.PROJECT_ID,
  title: {
    en: 'Charity Box Mini-Program',
    zh: '益盒小程序'
  },
  category: PROJECT_CATEGORIES.SOCIAL_IMPACT.id,
  description: {
    en: 'A WeChat mini-program that makes donating 1% of income simple and transparent, supporting effective charities across China. I contributed to backend design, payment workflows, and user experience improvements.',
    zh: '基于微信的小程序，让用户轻松透明地捐出收入的1%，支持全中国的高效公益组织。我参与了后端设计、支付流程及用户体验优化。'
  },
  imageUrl: CHARITY_BOX_IMAGES.hero,
  tags: [PROJECT_CATEGORIES.SOCIAL_IMPACT.id, PROJECT_TAGS.WEB_APP.id, PROJECT_TAGS.WECHAT.id, PROJECT_TAGS.PAYMENT.id, PROJECT_TAGS.CHARITY.id],
  
  // Rich detail data
  detailImages: [...CHARITY_BOX_IMAGES.screenshots],
  impactMetrics: [...CHARITY_BOX_CONSTANTS.IMPACT_METRICS],
  technicalStack: [...CHARITY_BOX_CONSTANTS.TECHNICAL_STACK],
  
  // Type-specific fields
  timeline: CHARITY_BOX_CONSTANTS.LAUNCH_YEAR,
  collaborators: ['Yihe Team'],
  
  // Challenges and learnings
  challenges: {
    en: 'Designing secure payment workflows, ensuring transparency in charity selection, and creating an intuitive user experience for donation tracking.',
    zh: '设计安全的支付流程，确保慈善机构选择的透明度，并为捐赠跟踪创建直观的用户体验。'
  },
  
  learnings: {
    en: 'Gained expertise in WeChat mini-program development, learned payment system integration, and developed skills in social impact technology design.',
    zh: '获得了微信小程序开发的专业知识，学习了支付系统集成，并发展了社会影响技术设计技能。'
  }
};
