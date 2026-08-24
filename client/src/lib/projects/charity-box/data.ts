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
  imageUrl: CHARITY_BOX_IMAGES.card,
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
    en: 'Sole Engineer & AI Advisor · Pro bono',
    zh: '唯一工程师与 AI 顾问 · 志愿'
  },

  period: { en: 'Jan 2025 - present', zh: '2025 年 1 月至今' },

  // Ming's part. The organisation's own record is kept separate below so the
  // two never blur together.
  contribution: [
    {
      kicker: { en: 'What I own', zh: '我负责的' },
      title: { en: 'The product, end to end', zh: '整个产品' },
      body: {
        en: 'The only technical contributor to the WeChat mini-program - full-stack, from the payment flows to what donors actually touch.',
        zh: '小程序唯一的技术贡献者——全栈，从支付流程到捐赠人真正会碰到的每个地方。'
      }
    },
    {
      kicker: { en: 'What I have shipped', zh: '做出来的东西' },
      title: { en: 'The giving machinery', zh: '捐赠这套机器' },
      body: {
        en: 'Matched giving through invite codes, one-time gifts, letting donors change their amount, an in-app notification system - plus the dev-ops that keeps all of it shippable by one person.',
        zh: '邀请码配捐、次捐、更改捐赠金额、站内通知系统，还有让这一切能被一个人持续交付的 DevOps。'
      }
    },
    {
      kicker: { en: 'Where else I help', zh: '产品之外' },
      title: { en: 'Tools, and where AI fits', zh: '工具，和 AI 的位置' },
      body: {
        en: 'An automated ops pipeline through Feishu so a small team can report without spreadsheets. Beyond the product I build internal tools and push on where AI genuinely helps other teams, without owning their work.',
        zh: '用飞书搭的自动化运营数据管道，让小团队不用再手工搬表格出报告。产品之外，我做内部工具，也推动 AI 在其他团队真正能帮上忙的地方——但那些活儿不归我管。'
      }
    }
  ],

  // The organisation's record, not Ming's - kept explicitly attributed.
  orgNote: {
    en: 'CharityBox (益盒) is an effective-giving research and advisory organisation, incubated by MiraclePlus and Tsinghua X-Lab. Its research is held to standards comparable with GiveWell, and it has mobilised over 5M RMB for the projects it recommends.',
    zh: '益盒是一家有效公益研究与咨询机构，由奇绩创坛与清华大学 X-Lab 孵化。其研究被认为与 GiveWell 的学术质量相当，累计为推荐的公益项目筹集超过 500 万元。'
  },

  links: {
    miniProgram: { en: 'Scan inside WeChat to open the mini-program', zh: '用微信扫码打开小程序' },
    podcast: {
      url: 'https://podcasts.apple.com/us/podcast/%E8%84%86%E5%BC%B1%E4%B8%96%E7%95%8C/id1644236790',
      label: { en: 'Podcast: 脆弱世界', zh: '播客：脆弱世界' }
    }
  },

  writeUp: {
    title: { en: 'One Day a Week', zh: '每周一天' },
    kicker: {
      en: 'Being an entire tech team for a mission-driven org - solo, with AI.',
      zh: '独自一人，带着 AI，做一家公益机构的整个技术团队。'
    },
    blurb: {
      en: 'The full write-up of this work: four moves that let one volunteer day a week cover what used to take a team.',
      zh: '这份工作的完整复盘：四步，让每周一天的志愿时间，顶住原来一个团队的活儿。'
    },
    href: '/blog/one-day-a-week'
  }
};
