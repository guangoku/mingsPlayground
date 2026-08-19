/**
 * Catch & Keep project data (internal module name: flashmind)
 * Formerly "FlashMind" — rebranded and live at catch-and-keep.com.
 * Content sourced from the Catch & Keep project spec.
 */

import { type ProjectData } from '../shared/types';
import { PROJECT_CATEGORIES, PROJECT_TAGS } from '../shared/constants';
import { FLASHMIND_IMAGES } from './images';
import { FLASHMIND_CONSTANTS } from './constants';

export const flashmindData: ProjectData = {
  id: FLASHMIND_CONSTANTS.PROJECT_ID,
  slug: 'catch-and-keep',
  title: {
    en: 'Catch & Keep',
    zh: 'Catch & Keep'
  },
  category: PROJECT_CATEGORIES.TECH.id,
  description: {
    en: 'A spaced-repetition learning tool I designed and built end-to-end. Catch & Keep closes the gap between discovering something worth knowing and actually remembering it — capture a word or idea in seconds, and it becomes a review card you keep coming back to.',
    zh: '我独立设计并全栈打造的间隔重复学习工具。Catch & Keep 弥合「发现」与「记住」之间的鸿沟——几秒钟捕获一个词或一个想法，它就会变成一张你真正会反复复习的卡片。'
  },
  imageUrl: FLASHMIND_IMAGES.hero,
  liveUrl: FLASHMIND_CONSTANTS.LIVE_URL,
  technicalStack: [...FLASHMIND_CONSTANTS.TECHNICAL_STACK],
  tags: [PROJECT_CATEGORIES.TECH.id, PROJECT_TAGS.AI_ML.id, PROJECT_TAGS.WEB_APP.id],
  detailImages: FLASHMIND_IMAGES.screenshots,

  tagline: {
    en: 'Turn the moments you notice something worth knowing into knowledge you actually keep.',
    zh: '把你注意到「值得记住」的瞬间，变成真正留下来的知识。'
  },

  roleChip: { en: 'Solo build · design + full stack', zh: '独立开发 · 设计与全栈' },

  liveLabel: {
    en: 'Free plan, no card needed - try it with a word you want to keep.',
    zh: '有免费版，不用绑卡——拿一个你想记住的词试试。'
  },

  // What catch-and-keep.com will never say: how it got built, and why.
  founderStory: [
    {
      kicker: { en: 'What I built', zh: '我做了什么' },
      title: { en: 'All of it', zh: '全都是我' },
      body: {
        en: 'Design and full stack, alone: FastAPI and SQLModel behind React and TypeScript, FSRS for scheduling, GPT-4o and Whisper drafting cards from text and voice. Captures process asynchronously so the moment of capture stays instant.',
        zh: '设计和全栈都是我一个人：FastAPI + SQLModel 做后端，React + TypeScript 做前端，FSRS 负责调度，GPT-4o 和 Whisper 把文字和语音起草成卡片。捕获走异步，所以「记下来那一刻」始终是即时的。'
      }
    },
    {
      kicker: { en: 'Why it exists', zh: '为什么会有它' },
      title: { en: 'My own vocabulary', zh: '我自己的单词' },
      body: {
        en: 'It started as a tool for my own English practice - catching words from AI chats, reading, and conversation. I was the first user long before anyone else was.',
        zh: '一开始只是给我自己练英语用的——从 AI 对话、阅读和聊天里随手捞词。在有别的用户之前，我先当了很久的用户。'
      }
    },
    {
      kicker: { en: 'Where it stands', zh: '现在到哪了' },
      title: { en: 'Live, and still moving', zh: '上线了，还在改' },
      body: {
        en: 'Running at catch-and-keep.com on Render with Neon Postgres. Next: a learning-path model that groups cards into atomic stages, and a teaching-to-learn review mode.',
        zh: '跑在 catch-and-keep.com，Render + Neon Postgres。接下来：把卡片编成原子阶段的学习路径，以及「以教促学」的复习模式。'
      }
    }
  ]
};
