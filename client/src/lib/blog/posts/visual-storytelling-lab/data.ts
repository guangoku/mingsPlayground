/**
 * Visual Storytelling Lab Blog Post Data
 * Blog post data for the visual storytelling learning journey
 */

import { BlogPost } from '../../shared/types';

export const visualStorytellingLabData: BlogPost = {
  id: '1',
  slug: 'visual-storytelling-lab',
  type: 'static',
  title: {
    en: 'Visual Storytelling Lab: A Systematic Learning Journey',
    zh: '图像叙事实验室：我的系统化学习之旅'
  },
  excerpt: {
    en: 'A hub mapping my visual storytelling learning line — from drawing and picture-book craft to illustrated travel writing and graphic novels. It includes two major projects (Nepal Illustrated Travelogue • Magical-Island Scuba Graphic Novel) and a casual daily sketchbook branch.',
    zh: '作为总览页，用“地铁图”梳理我的图像叙事学习路线：从绘画与绘本技法，到插图旅行写作与图像小说创作。包含两个主要项目（尼泊尔插图书 • 海岛潜水奇幻图像小说）以及日常速写分支。'
  },
  tags: {
    en: ['Visual Storytelling', 'Learning Journey', 'Systematic Study'],
    zh: ['图像叙事', '学习路线', '系统化学习']
  },
  date: '2024-01-15',
  readTimeMinutes: 8,
  category: 'systematic-study',
  isFeatured: true,
  
  // Journey map reference
  journeyMapId: 'visual-storytelling-lab',
  
  // Static content
  staticContent: {
    component: 'GraphicNovelDetail',
    images: ['hero.png'],
    attachments: []
  }
};
