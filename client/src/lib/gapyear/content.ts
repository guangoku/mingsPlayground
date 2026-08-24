/**
 * Gap-year wrap-up page content (bilingual).
 * ZH is the source voice (from the 开放麦 script); EN is a crafted adaptation.
 */
import type { BilingualText } from '@/lib/types';

export type ActKey = 'before' | 'during' | 'after';

export const actLabels: Record<ActKey, { zh: string; en: string }> = {
  before: { zh: '出发前', en: 'before' },
  during: { zh: '在路上', en: 'on the road' },
  after: { zh: '回来之后', en: 'after' },
};

export interface TocEntry {
  key: string;
  id: string;
  label: { zh: string; en: string };
  wip?: boolean;
  act?: ActKey;
}

export const toc: readonly TocEntry[] = [
  { key: 'top', id: 'gy-top', label: { zh: '开场', en: 'opening' } },
  { key: 'who', id: 'gy-who', label: { zh: '背景', en: 'background' } },
  { key: 'why', id: 'gy-why', act: 'before', label: { zh: '为什么停下来', en: 'why I stopped' } },
  { key: 'tests', id: 'gy-tests', act: 'before', label: { zh: '原有轨道的尝试', en: 'tests on the old track' } },
  { key: 'prep', id: 'gy-prep', act: 'before', label: { zh: '离职前的确认', en: 'pre-flight checks' } },
  { key: 'shift', id: 'gy-shift', act: 'during', label: { zh: '最优解 → 小试错', en: 'optimal → experiments' } },
  { key: 'self', id: 'gy-self', act: 'during', label: { zh: '对自己的比较研究', en: 'studying myself' } },
  { key: 'collage', id: 'gy-collage', act: 'during', label: { zh: '世界的拼贴', en: 'world as collage' } },
  { key: 'coliving', id: 'gy-coliving', act: 'during', wip: true, label: { zh: '共居社区', en: 'co-living' } },
  { key: 'family', id: 'gy-family', act: 'during', label: { zh: '重新认识彼此', en: 'three generations' } },
  { key: 'good', id: 'gy-good', act: 'during', label: { zh: '向善的位置', en: 'tech for good' } },
  { key: 'startup', id: 'gy-startup', act: 'during', wip: true, label: { zh: '创业实验中', en: 'startup, mid-experiment' } },
  { key: 'ledger', id: 'gy-ledger', act: 'after', wip: true, label: { zh: 'Gap 的账本', en: 'the ledger of the gap' } },
  { key: 'qa', id: 'gy-qa', act: 'after', wip: true, label: { zh: '快问快答', en: 'quick Q&A' } },
  { key: 'now', id: 'gy-now', act: 'after', wip: true, label: { zh: '未完待续', en: 'to be continued' } },
];

export const title = {
  kicker: { zh: '2024.12 → 2026.05 → ⋯⋯', en: '2024.12 → 2026.05 → ⋯' },
  lineOne: { zh: '东一榔头，', en: 'A whack here,' },
  lineTwo: { zh: '西一棒槌', en: 'a whack there' },
  tail: { zh: '的 Gap Year', en: 'my gap year' },
  sub: {
    zh: '乱七八糟的片段里，慢慢浮出来几条主线。',
    en: 'Fragments first. The threads surfaced later.',
  },
  scrollHint: { zh: '往下滑', en: 'scroll' },
} as const;

export interface WhyItem {
  key: 'industry' | 'intensity' | 'repetition' | 'position' | 'values' | 'lifeloop' | 'window';
  label: BilingualText;
}

/** Reasons come in clusters - the group label is what tells you a lone
 * 「位置不安全」 is about work and not about life. */
export interface WhyGroup {
  key: string;
  label: BilingualText;
  items: readonly WhyItem[];
}

export const whyStop = {
  heading: { zh: '为什么停下来', en: 'Why I stopped' },
  intro: {
    zh: '没有一件特别大的事。就是工作的第十年。',
    en: 'No single big thing happened. Just my tenth year of working.',
  },
  groups: [
    {
      key: 'work',
      label: { zh: '工作上', en: 'at work' },
      items: [
        { key: 'industry', label: { zh: '行业在收缩', en: 'the industry shrinking' } },
        { key: 'intensity', label: { zh: '高强度第十年', en: 'ten years at full tilt' } },
        { key: 'repetition', label: { zh: '活越来越重复', en: 'the work turning repetitive' } },
        { key: 'position', label: { zh: '位置不安全', en: 'my seat not safe' } },
      ],
    },
    {
      key: 'life',
      label: { zh: '生活上', en: 'in life' },
      items: [
        { key: 'lifeloop', label: { zh: '日子越过越窄', en: 'days getting narrower' } },
        { key: 'values', label: { zh: '想把力气用在别处', en: 'wanting to spend myself elsewhere' } },
        { key: 'window', label: { zh: '窗口刚好开着', en: 'the window happened to be open' } },
      ],
    },
  ] satisfies WhyGroup[],
  voiceLabel: { zh: '多说两句', en: 'hear me out' },
  voice: [
    {
      lead: { zh: '行业', en: 'the industry' },
      text: {
        zh: '裁员，项目变保守，重复执行的活变多。我的工作慢慢变成「高压，但没创新」。',
        en: 'Layoffs, safer projects, more execution. My job had quietly become high pressure, low novelty.',
      },
    },
    {
      lead: { zh: 'AI', en: 'AI' },
      text: {
        zh: '大公司里能碰到前沿，但视角和工具都是借来的。留在原地本身就是风险。',
        en: 'Inside a big company you touch the frontier, but the view and the tools are borrowed. Staying put was its own risk.',
      },
    },
    {
      lead: { zh: '生活', en: 'life' },
      text: {
        zh: '城市、爱好、聊天的话题，越来越窄。日子其实挺好，热情还是一点点灭了。',
        en: 'Same city, same hobbies, same safe topics. Life was good, and the spark went out anyway.',
      },
    },
    {
      lead: { zh: '价值', en: 'values' },
      text: {
        zh: '大家拼尽全力在市场里逐利，回报却在降。我想把力气用在让世界好一点点的事上。',
        en: 'Everyone sprinting after returns that kept shrinking. I wanted to spend myself on making things a bit better.',
      },
    },
    {
      text: {
        zh: '但也不知道能干啥。所以先停下来，再想下一步。',
        en: 'But I had no idea what that meant. So: stop first, figure out the next step second.',
      },
    },
  ],
} as const;

export const toBeContinued = {
  heading: { zh: '现在 · 未完待续', en: 'Now · to be continued' },
  intro: {
    zh: 'Gap 在 2026 年 5 月算是告一段落。人回了西雅图，事还没停。',
    en: "The gap more or less wrapped up in May 2026. I'm back in Seattle; most of what it started is still going.",
  },
  /** The closing image: the 1957 first edition of On the Road. */
  ending: {
    alt: {
      zh: '《在路上》1957 年初版封面',
      en: 'On the Road, 1957 first edition cover',
    },
    caption: {
      zh: 'Jack Kerouac《在路上》，1957 年初版封面',
      en: 'Jack Kerouac, On the Road - first edition, 1957',
    },
  },
} as const;
