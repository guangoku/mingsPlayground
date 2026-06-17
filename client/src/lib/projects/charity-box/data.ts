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

  role: {
    title: {
      en: 'My Role',
      zh: '我的角色'
    },
    content: {
      en: `**Sole Engineer & AI Advisor** · Volunteer · Jan 2025 – present

- The **only technical contributor** to the WeChat-based platform — owning full-stack development end to end.
- Leading the organization's **AI transformation**: building internal tools and advising on where AI genuinely helps a small non-profit.
- Built an **automated operational data pipeline** integrating multiple sources via Feishu, so the team can report and run programs without manual spreadsheet wrangling.

You can scan the QR code in the posters below (with WeChat) to open the mini-program.`,
      zh: `**唯一工程师与 AI 顾问** · 志愿 · 2025年1月 – 至今

- 平台**唯一的技术贡献者**——端到端负责全栈开发。
- 主导机构的 **AI 转型**：搭建内部工具，并就「AI 在小型公益机构中真正有用的地方」提供建议。
- 通过飞书构建**自动化运营数据管道**，整合多方数据源，让团队无需手工处理表格即可完成报告与项目运营。

可用微信扫描下方海报中的二维码，打开该小程序。`
    }
  }
};
