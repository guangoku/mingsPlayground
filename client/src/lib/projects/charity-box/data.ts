/**
 * Charity Box project data
 * Framed around Ming's role + ongoing non-profit advisory positioning.
 */

import { type ProjectData } from '../shared/types';
import { PROJECT_CATEGORIES, PROJECT_TAGS } from '../shared/constants';
import { CHARITY_BOX_IMAGES } from './images';
import { CHARITY_BOX_CONSTANTS } from './constants';

export const charityBoxData: ProjectData = {
  id: CHARITY_BOX_CONSTANTS.PROJECT_ID,
  slug: 'charity-box',
  title: {
    en: 'CharityBox (WeChat App)',
    zh: '益盒（微信小程序）'
  },
  category: PROJECT_CATEGORIES.SOCIAL_IMPACT.id,
  description: {
    en: 'A WeChat mini-program that makes donating 1% of your income simple, transparent, and effective — supporting vetted high-impact charities across China.',
    zh: '一款微信小程序，让「捐出收入的 1%」变得简单、透明且高效——支持全中国经过筛选的高影响力公益组织。'
  },
  imageUrl: CHARITY_BOX_IMAGES.hero,
  tags: [
    PROJECT_CATEGORIES.SOCIAL_IMPACT.id,
    PROJECT_TAGS.WEB_APP.id,
    PROJECT_TAGS.WECHAT.id,
    PROJECT_TAGS.PAYMENT.id,
    PROJECT_TAGS.CHARITY.id
  ],
  detailImages: CHARITY_BOX_IMAGES.posters,

  about: {
    title: {
      en: 'About CharityBox',
      zh: '关于益盒'
    },
    content: {
      en: `CharityBox (益盒) helps everyday donors give 1% of their income to effective, vetted charities — with full transparency into where the money goes. It's part of a growing effective-giving movement in China.`,
      zh: `益盒帮助普通捐赠者把收入的 1% 捐给经过筛选的高效公益组织，并对善款流向保持完全透明。它是中国不断壮大的「有效公益」运动的一部分。`
    }
  },

  roleChip: {
    en: 'Sole Engineer & AI Advisor · Volunteer',
    zh: '唯一工程师与 AI 顾问 · 志愿'
  },

  period: { en: 'Jan 2025 - present', zh: '2025 年 1 月至今' },

  // Ming's part. The organisation's own record is kept separate below so the
  // two never blur together.
  contribution: [
    {
      kicker: { en: 'What I own', zh: '我负责什么' },
      title: { en: 'The whole stack', zh: '整个技术栈' },
      body: {
        en: 'The only technical contributor to the WeChat mini-program - full-stack, end to end, from payments to the parts donors actually touch.',
        zh: '小程序唯一的技术贡献者——端到端的全栈开发，从支付流程到捐赠人真正会碰到的每个地方。'
      }
    },
    {
      kicker: { en: 'What I am changing', zh: '我在推动什么' },
      title: { en: 'AI, where it earns its place', zh: '让 AI 用在该用的地方' },
      body: {
        en: "Leading the org's AI transformation: building internal tools, and advising on where AI genuinely helps a small non-profit rather than where it merely looks impressive.",
        zh: '主导机构的 AI 转型：搭建内部工具，也帮忙判断 AI 在一个小机构里真正有用的地方在哪——而不是哪里看起来厉害。'
      }
    },
    {
      kicker: { en: 'What it replaced', zh: '它替掉了什么' },
      title: { en: 'Spreadsheets, by hand', zh: '手工表格' },
      body: {
        en: 'An automated ops data pipeline pulling multiple sources through Feishu, so a small team can report and run programs without wrangling spreadsheets.',
        zh: '一条自动化的运营数据管道，通过飞书打通多个数据源，让小团队不必再手工搬表格也能出报告、跑项目。'
      }
    }
  ],

  // The organisation's record, not Ming's - kept explicitly attributed.
  orgNote: {
    en: 'CharityBox (益盒) is an effective-giving research and advisory organisation, incubated by MiraclePlus and Tsinghua X-Lab. Its research is held to standards comparable with GiveWell, and it has mobilised over 5M RMB for the projects it recommends.',
    zh: '益盒是一家有效公益研究与咨询机构，由奇绩创坛与清华大学 X-Lab 孵化。其研究被认为与 GiveWell 的学术质量相当，累计为推荐的公益项目筹集超过 500 万元。'
  },

  links: {
    miniProgram: { en: 'Scan to open the mini-program', zh: '扫码打开小程序' },
    podcast: {
      url: 'https://podcasts.apple.com/us/podcast/%E8%84%86%E5%BC%B1%E4%B8%96%E7%95%8C/id1644236790',
      label: { en: 'Podcast: 脆弱世界', zh: '播客：脆弱世界' }
    }
  },

  upcoming: {
    title: { en: 'One Day a Week', zh: 'One Day a Week' },
    blurb: {
      en: 'Being an entire tech team for a mission-driven org - solo, with AI. Writing this one up now.',
      zh: '一个人，加上 AI，给一家公益机构当整个技术团队。正在写。'
    }
  }
};
