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

  tagline: {
    en: 'Your dive, understood & remembered. Turn raw dive media into a finished dive story.',
    zh: '你的每一次下潜，被理解，被记住。把原始潜水素材变成一段完整的潜水故事。'
  },

  problem: {
    title: {
      en: 'The Problem: Post-Dive Chaos',
      zh: '痛点：潜水后的「素材黑洞」'
    },
    content: {
      en: `Divers spend thousands of dollars and travel across the world for a few hours underwater — then come home with hundreds of photos and hours of GoPro footage that stay unorganized, unidentified, and eventually forgotten.

Three questions come up after almost every dive:

- **What did I actually see?** — half the species are a mystery by dinner.
- **How do I organize and relive this dive?**
- **How do I share it without spending hours editing?**

Most dives never become anything. The biggest competitor isn't another app — it's the camera roll.`,
      zh: `潜水者花费数千美元、飞越大半个地球，只为水下短短几个小时——回来后却面对成百上千张照片和数小时的 GoPro 影像，杂乱无章、无人识别，最终被遗忘。

几乎每次潜水后都会冒出三个问题：

- **我到底看到了什么？**——一半的物种到晚饭时就已经记不清了。
- **怎么把这次潜水整理好、再回味一遍？**
- **怎么不花几个小时剪辑就能分享出去？**

大多数潜水最终什么都没留下。最大的对手不是另一个 App，而是相机胶卷。`
    }
  },

  solution: {
    title: {
      en: "What I'm Building",
      zh: '我在做什么'
    },
    content: {
      en: `Atolla Ocean turns raw dive media into a finished **dive story**. Dump in your photos, videos, and (optionally) your dive metadata, and it returns:

- **Species identification** from real underwater footage
- **The best moments**, automatically trimmed and color-corrected
- **Fun facts** about the marine life you encountered
- **Dive context** — depth, duration, visibility, temperature, current — organized into a log
- A **shareable recap**, with your full-resolution originals kept and private by default

The insight from talking to divers: they don't want another fish-ID app, dive log, or video editor. They want to *dump everything in and get back something worth keeping.*`,
      zh: `Atolla Ocean 把原始潜水素材变成一段完整的**潜水故事**。把照片、视频（以及可选的潜水数据）一股脑丢进来，它会返回：

- 基于真实水下影像的**物种识别**
- 自动裁剪与调色后的**最佳瞬间**
- 关于你遇见的海洋生物的**趣味知识**
- 整理成日志的**潜水信息**——深度、时长、能见度、水温、流向
- 一份**可分享的回顾**，原始全分辨率素材始终归你、默认私密

与潜水者交流后的洞察：他们不想要又一个鱼类识别 App、潜水日志或视频剪辑工具。他们想要的是——*把一切丢进去，拿回一份值得珍藏的东西。*`
    }
  },

  approach: {
    title: {
      en: 'Why Now',
      zh: '为什么是现在'
    },
    content: {
      en: `The tools finally exist: computer vision good enough to understand messy underwater footage, open marine datasets, and dive gear that syncs with phones — plus a new generation of divers ready for them.

I'm building Atolla end to end — product, data pipeline, and ML — and validating it the hard way: interviewing divers, running concierge tests, and shaping the MVP around what people actually pay attention to. It started as a sprint during the **Founder Institute 2025** cohort and is now incorporated as Atolla Ocean, Inc.

I'm an ML engineer and a certified divemaster with 200+ dives — so I understand the problem, the technology, and the dive community.`,
      zh: `条件终于成熟了：计算机视觉已经足以理解杂乱的水下影像，海洋数据集逐渐开放，潜水装备能与手机同步——还有新一代愿意拥抱这些工具的潜水者。

我在端到端地打造 Atolla——产品、数据管道与机器学习——并用最扎实的方式验证它：访谈潜水者、做「人工 concierge」测试，围绕用户真正在意的点打磨 MVP。它最初是 **Founder Institute 2025** 期间的一次冲刺，如今已注册为 Atolla Ocean, Inc.。

我既是机器学习工程师，也是拥有 200+ 次下潜经验的持证潜水长——所以我懂这个痛点、这项技术，也懂这个潜水社区。`
    }
  },

  mission: {
    title: {
      en: 'Mission',
      zh: '使命'
    },
    content: {
      en: `> Empower divers to explore, learn, and protect the ocean through AI-powered identification, community knowledge, and citizen science.

The long arc is simple — **See → Understand → Protect** — making the ocean's life visible and understood, and turning every diver into a guardian of the sea.`,
      zh: `> 通过 AI 识别、社区知识与公民科学，让潜水者去探索、学习并守护海洋。

它的长期脉络很简单——**看见 → 理解 → 守护**——让海洋的生命被看见、被理解，让每一位潜水者都成为海洋的守护者。`
    }
  }
};
