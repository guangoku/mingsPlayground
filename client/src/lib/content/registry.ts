/**
 * The pool. One entry per published (or in-progress) piece.
 * Cover art and URLs are pulled from the existing project modules so images
 * stay defined in exactly one place.
 */
import { projects } from '@/lib/projects';
import atollaCard from '@assets/projects/atolla-ocean/card.jpg';
import charityBoxCollage from '@assets/projects/charity-box/collage.webp';
import gapYearCard from '@assets/gapyear/card.webp';
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
      en: 'My startup. AI that turns raw dive footage into a finished dive story - the species you saw, and the moments worth keeping.',
      zh: '我创办的公司。用 AI 把杂乱的潜水影像变成一段完整的潜水故事——你看到的物种，和值得留下的瞬间。',
    },
    // The site screenshot carried its own headline; this is a frame from the
    // dives the product is built on, which competes with nothing.
    cover: atollaCard,
    // Anchoring left keeps the jellyfish out of the text when the card
    // narrows on mobile and the frame crops horizontally.
    coverPosition: 'left center',
    coverLayout: 'full',
    weight: 'flagship',
    topics: ['startup'],
    status: 'live',
    href: '/projects/atolla-ocean',
    externalUrl: 'https://atollaocean.com',
    externalLabel: 'atollaocean.com',
  },
  {
    slug: 'charity-box',
    title: { en: 'CharityBox 益盒', zh: '益盒 CharityBox' },
    role: { en: 'Volunteer · sole engineer', zh: '志愿 · 唯一工程师' },
    kicker: {
      en: 'An effective-giving research organisation in China.',
      zh: '一家做有效公益的研究与咨询机构。',
    },
    blurb: {
      en: 'Donors pledge 1% of their income through its platform, to charities its researchers have vetted. I am the only engineer on it.',
      zh: '捐赠人通过它的平台承诺捐出收入的 1%，捐给研究团队筛选过的项目。这个平台唯一的工程师是我。',
    },
    // The campaign poster carried its own headline, which out-shouted the
    // card's title. A torn-paper collage has no words to compete with.
    cover: charityBoxCollage,
    coverLayout: 'full',
    // Reads as a stack: the project page, and the write-up behind it.
    stacked: true,
    weight: 'flagship',
    topics: ['for-good', 'building'],
    status: 'live',
    href: '/projects/charity-box',
  },
  {
    slug: 'one-day-a-week',
    title: { en: 'One Day a Week', zh: '每周一天' },
    kicker: {
      en: 'An entire tech team - solo, with AI.',
      zh: '一个人加 AI，当整个技术团队。',
    },
    blurb: {
      en: 'The CharityBox work, written up: four moves that let one volunteer day a week cover what used to take a team.',
      zh: '益盒工作的复盘：四步，让每周一天的志愿时间，顶住原来一个团队的活儿。',
    },
    coverArt: 'one-day-a-week',
    weight: 'story',
    topics: ['for-good', 'building'],
    status: 'live',
    href: '/blog/one-day-a-week',
  },
  {
    slug: 'gap-year',
    title: { en: 'A whack here, a whack there', zh: '东一榔头，西一棒槌的 Gap Year' },
    kicker: { en: 'the gap year, wrapped up', zh: '一段 gap 的收尾' },
    blurb: {
      en: 'Eighteen months of quitting, wandering, and recalibrating - written as one long scroll.',
      zh: '裸辞、旅居、重新校准自己的十八个月，写成一篇长的。',
    },
    // A card-specific crop of the page's opening artwork: the motif rides
    // high so the title lands on clean charcoal, the way the other two
    // flagships put their text on a quiet part of the picture.
    cover: gapYearCard,
    // Anchoring top means a card wider than the art trims empty charcoal off
    // the bottom instead of taking the top off the drawing.
    coverPosition: 'center top',
    coverLayout: 'full',
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
    role: { en: 'Solo build', zh: '独立开发' },
    kicker: { en: 'Spaced repetition, built end to end.', zh: '间隔重复学习工具，独立做完。' },
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
    status: 'in-progress',
    href: '/projects/nepal-travel',
  },
];

export const getPiece = (slug: string): Piece | undefined =>
  pieces.find((piece) => piece.slug === slug);

/** Resolve a shelf's slug list into pieces, skipping anything not in the pool. */
export const getPieces = (slugs: string[]): Piece[] =>
  slugs.map(getPiece).filter((piece): piece is Piece => Boolean(piece));
