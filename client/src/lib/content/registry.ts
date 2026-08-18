/**
 * The pool. One entry per published (or in-progress) piece.
 * Cover art and URLs are pulled from the existing project modules so images
 * stay defined in exactly one place.
 */
import { projects } from '@/lib/projects';
import { type Piece } from './types';

const coverOf = (projectSlug: string): string | undefined =>
  projects.find((p) => p.slug === projectSlug)?.imageUrl;

export const pieces: Piece[] = [
  {
    slug: 'atolla-ocean',
    title: { en: 'Atolla Ocean', zh: 'Atolla Ocean' },
    role: { en: 'Founder', zh: '创始人' },
    kicker: {
      en: 'Your dive, understood and remembered.',
      zh: '你的每一次下潜，被理解，被记住。',
    },
    blurb: {
      en: 'My startup. AI that turns raw dive footage into a finished dive story - identifying the marine life you saw, surfacing the best moments, and making the dive worth keeping.',
      zh: '我创办的公司。用 AI 把杂乱的潜水影像变成一段完整的潜水故事——识别你看到的海洋生物，挑出最精彩的瞬间，让这次下潜真的留得下来。',
    },
    cover: coverOf('atolla-ocean'),
    weight: 'flagship',
    topics: ['startup'],
    status: 'live',
    href: '/projects/atolla-ocean',
    externalUrl: 'https://atollaocean.com',
    externalLabel: 'atollaocean.com',
  },
  {
    slug: 'charity-box',
    title: { en: 'CharityBox Mini-Program', zh: '益盒小程序' },
    kicker: { en: 'volunteer build · effective giving', zh: '志愿开发 · 高效公益' },
    blurb: {
      en: 'A WeChat mini-program that makes giving 1% of your income simple and transparent. I work on the backend, payments, and the parts users actually touch.',
      zh: '让「捐出收入 1%」这件事变简单、透明的微信小程序。我负责后端、支付流程，和用户真正会碰到的那些地方。',
    },
    cover: coverOf('charity-box'),
    weight: 'flagship',
    topics: ['for-good', 'building'],
    status: 'live',
    href: '/projects/charity-box',
  },
  {
    slug: 'gap-year',
    title: { en: 'A whack here, a whack there', zh: '东一榔头，西一棒槌的 Gap Year' },
    kicker: { en: 'the gap year, wrapped up', zh: '一段 gap 的收尾' },
    blurb: {
      en: 'Eighteen months of quitting, wandering, and recalibrating - written as one long scroll.',
      zh: '裸辞、旅居、重新校准自己的十八个月，写成一篇长的。',
    },
    weight: 'flagship',
    topics: ['life'],
    status: 'in-progress',
    href: '/gap-year',
  },
  {
    slug: 'octopus-girl',
    title: { en: 'Octopus Girl', zh: '章鱼女孩' },
    kicker: { en: 'a personal avatar', zh: 'personal avatar 设定集' },
    blurb: {
      en: 'My avatar, drawn from the octopus: curious, adaptable, a little shy.',
      zh: '以章鱼为原型的个人化身：好奇、能适应、有点害羞。',
    },
    cover: coverOf('octopus-girl'),
    weight: 'story',
    topics: ['art'],
    status: 'live',
    href: '/projects/octopus-girl',
  },
  {
    slug: 'catch-and-keep',
    title: { en: 'Catch & Keep', zh: 'Catch & Keep' },
    kicker: { en: 'spaced repetition, built end to end', zh: '间隔重复学习工具' },
    blurb: {
      en: 'Catch a word or an idea in seconds, and it turns into a card you actually come back to.',
      zh: '几秒钟捕获一个词或一个想法，它就变成一张你真会回头复习的卡片。',
    },
    cover: coverOf('catch-and-keep'),
    weight: 'story',
    topics: ['building'],
    status: 'live',
    href: '/projects/catch-and-keep',
  },
  {
    slug: 'nepal-travel',
    title: { en: 'Nepal Travel Diaries', zh: '尼国游日记' },
    kicker: { en: 'ink, comics, and classical prose', zh: '水墨、漫画和一点古文' },
    blurb: {
      en: 'Festivals, old cities, and mountain trails, drawn and written on the road.',
      zh: '节庆、古城、徒步路上的画和字。',
    },
    cover: coverOf('nepal-travel'),
    weight: 'note',
    topics: ['travel', 'art'],
    status: 'live',
    href: '/projects/nepal-travel',
  },
];

export const getPiece = (slug: string): Piece | undefined =>
  pieces.find((piece) => piece.slug === slug);

/** Resolve a shelf's slug list into pieces, skipping anything not in the pool. */
export const getPieces = (slugs: string[]): Piece[] =>
  slugs.map(getPiece).filter((piece): piece is Piece => Boolean(piece));
