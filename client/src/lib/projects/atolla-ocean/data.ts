/**
 * Atolla Ocean project data
 * Content sourced from atollaocean.com and the project's working docs.
 */

import { type ProjectData } from '../shared/types';
import { PROJECT_CATEGORIES, PROJECT_TAGS } from '../shared/constants';
import { ATOLLA_OCEAN_IMAGES } from './images';
import { ATOLLA_OCEAN_CONSTANTS } from './constants';

export const atollaOceanData: ProjectData = {
  id: ATOLLA_OCEAN_CONSTANTS.PROJECT_ID,
  slug: 'atolla-ocean',
  title: {
    en: 'Atolla Ocean',
    zh: 'Atolla Ocean'
  },
  category: PROJECT_CATEGORIES.TECH.id,
  description: {
    en: 'My startup. AI that turns raw dive footage into a finished, shareable dive story — identifying the marine life you saw, surfacing the best moments, and helping you remember every dive.',
    zh: '我创办的公司。用 AI 把杂乱的潜水影像变成一段完整、可分享的潜水故事——识别你看到的海洋生物，挑出最精彩的瞬间，帮你记住每一次下潜。'
  },
  imageUrl: ATOLLA_OCEAN_IMAGES.hero,
  liveUrl: ATOLLA_OCEAN_CONSTANTS.LIVE_URL,
  technicalStack: [...ATOLLA_OCEAN_CONSTANTS.TECHNICAL_STACK],
  tags: [PROJECT_CATEGORIES.TECH.id, PROJECT_TAGS.AI_ML.id],
  detailImages: ATOLLA_OCEAN_IMAGES.screenshots,

  // The page on this site is about Ming's part in Atolla, not a second copy of
  // the product pitch - atollaocean.com does that, and stays current.
  liveLabel: {
    en: 'Open to early users, free - upload a dive, get a story back.',
    zh: '面向早期用户免费开放——上传一次潜水，拿回一篇潜水故事。'
  },

  credentials: {
    en: 'Atolla Ocean, Inc.',
    zh: 'Atolla Ocean, Inc.'
  },

  founderStory: [
    {
      kicker: { en: 'What I built', zh: '我做了什么' },
      title: { en: 'End to end', zh: '端到端' },
      body: {
        en: 'Product, data pipeline, and the ML behind species identification - computer vision on messy, real-world underwater footage.',
        zh: '产品、数据管道，以及物种识别背后的机器学习——把计算机视觉用在真实、杂乱的水下影像上。'
      }
    },
    {
      kicker: { en: 'How I validated it', zh: '怎么验证的' },
      title: { en: 'The hard way', zh: '笨办法' },
      body: {
        en: 'Interviewed divers, ran concierge tests by hand, and shaped the MVP around what people actually paid attention to.',
        zh: '访谈潜水者，手工跑「人工 concierge」测试，围绕用户真正在意的点打磨 MVP。'
      }
    },
    {
      kicker: { en: 'Where it stands', zh: '现在到哪了' },
      title: { en: 'Live, and early', zh: '上线了，还很早期' },
      body: {
        en: 'Incorporated, built, and live. Free for early users while I am still learning what divers actually want.',
        zh: '公司注册了，东西做出来了，也上线了。还在摸索潜水者到底要什么，所以对早期用户免费。'
      }
    }
  ],

  facts: [
    { value: '200+', label: { en: 'dives · certified divemaster', zh: '次下潜 · 持证潜水长' } },
    { value: '10+ yrs', label: { en: 'data & ML engineering', zh: '数据与机器学习工程' } }
  ],

  whyMe: {
    en: "I'm an ML engineer and a certified divemaster. I know the problem, the technology, and the dive community.",
    zh: '我是机器学习工程师，也是持证潜水长。这个问题、这项技术，还有潜水这个圈子，我都熟。'
  },

  tagline: {
    en: 'Your dive, understood & remembered. Turn raw dive media into a finished dive story.',
    zh: '你的每一次下潜，被理解，被记住。把原始潜水素材变成一段完整的潜水故事。'
  }
};
