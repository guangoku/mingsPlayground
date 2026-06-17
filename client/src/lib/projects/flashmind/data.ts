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

  problem: {
    title: {
      en: 'The Problem',
      zh: '痛点'
    },
    content: {
      en: `Existing tools force a trade-off. Anki makes *capture* painful — building a card is so much friction that you stop. Quizlet makes *review* too passive — you recognize the answer without ever having to produce it.

So the words and ideas you want to own scatter across notes apps, highlights, and screenshots — and never turn into anything you actually remember.`,
      zh: `现有工具总让你二选一。Anki 的「录入」太痛苦——做一张卡片的摩擦大到让你放弃；Quizlet 的「复习」又太被动——你只是认出答案，却从不需要主动产出。

于是那些你想真正掌握的词和想法，散落在笔记、划线和截图里——最终什么都没记住。`
    }
  },

  solution: {
    title: {
      en: 'What It Does',
      zh: '它做什么'
    },
    content: {
      en: `Catch & Keep splits learning into two clean moments:

- **Capture is sacred** — send a word, voice note, link, or photo from your phone (Telegram bot or iOS Shortcut) or the web in 2–3 taps. It lands in a GTD-style inbox, unprocessed.
- **AI drafts, you approve** — each capture is pre-filled into a card draft (definition, translation, IPA, mnemonic, example sentences). You review, edit, and approve — you stay the quality gate.
- **Active recall, not recognition** — review forces you to *produce*: see the word, form a sentence, then reveal, hear it, and rate. A "Quick Burn" mode handles high-volume maintenance days.

Scheduling runs on FSRS, so cards come back right when you're about to forget — and a fresh example sentence is generated each review so you learn the word, not the example.`,
      zh: `Catch & Keep 把学习拆成两个清爽的时刻：

- **捕获至上** —— 用手机（Telegram 机器人或 iOS 快捷指令）或网页，2–3 次点击就能发送一个词、一段语音、一个链接或一张照片，落入 GTD 式收件箱，暂不处理。
- **AI 起草，你来定稿** —— 每条捕获都会预填成卡片草稿（释义、翻译、音标、助记、例句）。你审阅、编辑、确认——质量始终由你把关。
- **主动回忆，而非被动识别** —— 复习要求你「产出」：看到词、造一个句子，再揭晓、朗读、评分。还有「Quick Burn」快速模式应对高频维护日。

调度基于 FSRS 算法，让卡片在你快要忘记时恰好出现——每次复习还会生成新的例句，让你记住的是这个词，而不是某个例句。`
    }
  },

  approach: {
    title: {
      en: 'How I Built It',
      zh: '我是怎么做的'
    },
    content: {
      en: `Catch & Keep is a full-stack build: a FastAPI + SQLModel backend, a React + TypeScript front end, FSRS for scheduling, and GPT-4o + Whisper for card drafting and voice transcription. Captures process asynchronously, so the moment of capture stays instant.

It started as a tool for my own English-vocabulary practice — capturing from AI chats, reading, and conversation — and grew into a product now live at catch-and-keep.com, deployed on Render with Neon Postgres. Next up: a "seed" learning-path model that groups cards into atomic stages, plus teaching-to-learn review.`,
      zh: `Catch & Keep 是一个全栈项目：FastAPI + SQLModel 后端，React + TypeScript 前端，FSRS 负责调度，GPT-4o 与 Whisper 负责卡片起草与语音转写。捕获采用异步处理，确保「捕获那一刻」始终即时。

它最初是为我自己练习英语词汇而做的工具——从 AI 对话、阅读和交谈中捕获——后来成长为一个已上线的产品（catch-and-keep.com，部署在 Render + Neon Postgres）。接下来：把卡片组织成原子阶段的「种子」学习路径模型，以及「以教促学」的复习模式。`
    }
  }
};
