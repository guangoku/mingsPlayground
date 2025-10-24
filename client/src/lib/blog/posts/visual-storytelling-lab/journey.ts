/**
 * Visual Storytelling Lab Journey Map Data
 * Journey map for the visual storytelling learning path
 */

import { JourneyMap } from '../../journey/types';

export const visualStorytellingJourney: JourneyMap = {
  id: 'visual-storytelling-lab',
  title: {
    en: 'Learning Journey Map',
    zh: '学习路线图'
  },
  description: {
    en: 'My systematic learning journey in visual storytelling',
    zh: '我的图像叙事系统化学习之旅'
  },
  nodes: [
    {
      id: 'foundations',
      type: 'foundation',
      title: { en: 'Foundations', zh: '基础篇' },
      description: { en: 'Core skills and knowledge', zh: '核心技能与知识' },
      position: { x: 0, y: 0 },
      connections: ['drawing', 'storytelling', 'picture-book', 'manga']
    },
    {
      id: 'drawing',
      type: 'foundation',
      title: { en: 'Drawing & Sketching', zh: '绘画与速写' },
      description: { en: 'Gesture, form, composition, material fluency', zh: '姿态、形态、构图、材料熟练度' },
      position: { x: -200, y: 100 },
      connections: ['foundations']
    },
    {
      id: 'storytelling',
      type: 'foundation',
      title: { en: 'Storytelling', zh: '故事叙事' },
      description: { en: 'Emotional rhythm and narrative arcs', zh: '情感节奏与叙事弧线' },
      position: { x: -100, y: 100 },
      connections: ['foundations']
    },
    {
      id: 'picture-book',
      type: 'foundation',
      title: { en: 'Picture-Book Craft', zh: '绘本技法' },
      description: { en: 'Page turns, pacing, image sequences', zh: '翻页、节奏、图像序列' },
      position: { x: 0, y: 100 },
      connections: ['foundations']
    },
    {
      id: 'manga',
      type: 'foundation',
      title: { en: 'Manga / Visual Language', zh: '漫画语言' },
      description: { en: 'Panel flow, cinematic rhythm, cultural styles', zh: '分镜流程、电影节奏、文化风格' },
      position: { x: 100, y: 100 },
      connections: ['foundations', 'chroniques-birmanes']
    },
    {
      id: 'nepal-project',
      type: 'project',
      title: { en: 'Nepal Travelogue', zh: '尼泊尔插图书' },
      description: { en: 'Modern-ink illustrated travelogue', zh: '现代水墨插图旅行书' },
      position: { x: -300, y: 200 },
      connections: ['foundations'],
      metadata: { 
        projectId: 'nepal-travel',
        status: 'in-progress',
        priority: 'high'
      }
    },
    {
      id: 'bubble-lodge',
      type: 'project',
      title: { en: 'Bubble Lodge / Half-Salt', zh: '海岛潜水奇幻图像小说' },
      description: { en: 'Scuba-diving fantasy graphic novel', zh: '潜水奇幻图像小说' },
      position: { x: -200, y: 200 },
      connections: ['foundations'],
      metadata: { 
        status: 'planned',
        priority: 'medium'
      }
    },
    {
      id: 'daily-sketchbook',
      type: 'branch',
      title: { en: 'Daily Sketchbook', zh: '日常速写本' },
      description: { en: 'Life, travel, and marine observations', zh: '生活、旅行与海洋观察' },
      position: { x: 200, y: 200 },
      connections: ['foundations'],
      metadata: { 
        status: 'in-progress',
        priority: 'low'
      }
    },
    {
      id: 'chroniques-birmanes',
      type: 'reference',
      title: { en: 'Chroniques Birmanes', zh: '缅甸纪事' },
      description: { en: 'Blog post about manga visual language', zh: '关于漫画视觉语言的博客文章' },
      position: { x: 100, y: 200 },
      connections: ['manga'],
      metadata: { 
        blogPostId: 'chroniques-birmanes',
        status: 'completed'
      }
    }
  ],
  edges: [
    { id: 'e1', source: 'foundations', target: 'drawing', type: 'connection' },
    { id: 'e2', source: 'foundations', target: 'storytelling', type: 'connection' },
    { id: 'e3', source: 'foundations', target: 'picture-book', type: 'connection' },
    { id: 'e4', source: 'foundations', target: 'manga', type: 'connection' },
    { id: 'e5', source: 'foundations', target: 'nepal-project', type: 'prerequisite' },
    { id: 'e6', source: 'foundations', target: 'bubble-lodge', type: 'prerequisite' },
    { id: 'e7', source: 'foundations', target: 'daily-sketchbook', type: 'prerequisite' },
    { id: 'e9', source: 'manga', target: 'chroniques-birmanes', type: 'connection' }
  ],
  layout: {
    type: 'vertical',
    spacing: { x: 200, y: 150 }
  }
};
