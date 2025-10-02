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
    en: 'CharityBox (WeChat App)',
    zh: '益盒（微信小程序）'
  },
  category: PROJECT_CATEGORIES.SOCIAL_IMPACT.id,
  description: {
    en: 'A WeChat-based app that makes donating 1% of income simple and transparent, supporting effective charities across China. ',
    zh: '一款基于微信的小程序，让用户轻松透明地捐出收入的 1%，支持全中国的高效公益组织。'
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
   mainContent: {
    en: `I contributed as a volunteer full-stack developer, with a focus on front-end development and improving the donation experience.  

Users can scan the QR code shown in the project poster image (with WeChat) to access the mini-program directly.`,
    zh: `我以志愿全栈开发者身份参与项目，重点负责前端开发与捐赠体验优化。  

用户可以使用微信扫描项目海报中的二维码，直接访问该小程序。`
  }
};
