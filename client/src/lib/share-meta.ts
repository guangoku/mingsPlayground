/**
 * What each route looks like when someone shares it.
 *
 * The site is a single-page app, so every route is served the same
 * index.html - and every link shared anywhere showed the home page's title
 * and picture. `scripts/prerender-meta.ts` writes a real HTML file per route
 * at build time using this table, and the app reads it too so the browser
 * tab matches.
 *
 * These are not the card blurbs from the content registry. A share card is
 * read cold, by someone who has never seen the site, in a feed - so it says
 * what the page is rather than teasing it.
 */

export interface ShareMeta {
  /** The share-card headline. One language, because a share card only gets one. */
  title: string;
  description: string;
  /** Absolute path under /public. */
  image: string;
  type?: 'website' | 'article';
  /**
   * The browser tab, which can follow the reader's language. Shaped like
   * BilingualText but declared inline: this file is also read by a build
   * script running outside Vite, so it stays import-free.
   */
  tab?: { en: string; zh: string };
}

export const SITE_URL = 'https://mingsplayground.com';

export const HOME_META: ShareMeta = {
  title: "Ming's Playground - data, art, and curiosity",
  description:
    'Ming Guan: founder of Atolla Ocean, data and ML engineer, sole engineer at CharityBox. Projects, writing, and things drawn along the way.',
  image: '/og-image.png',
};

export const ROUTE_META: Record<string, ShareMeta> = {
  '/': HOME_META,

  '/blog/one-day-a-week': {
    title: 'One Day a Week: an entire tech team, solo, with AI',
    description:
      'One volunteered day a week covers the tech for a Chinese effective-giving social enterprise. Four moves - a context layer, a harness, a loop, a handover - what the day bought, and the three things still hard.',
    image: '/og/one-day-a-week.jpg',
    type: 'article',
    tab: { en: "One Day a Week | Ming's Playground", zh: "每周一天 | Ming's Playground" },
  },

  '/gap-year': {
    title: 'A whack here, a whack there - a gap year, wrapped up',
    description:
      'Eighteen months of quitting, wandering and recalibrating, written as one long scroll.',
    image: '/og/gap-year.jpg',
    type: 'article',
    tab: { en: "A Whack Here, a Whack There | Ming's Playground", zh: "东一榔头，西一棒槌的 Gap Year | Ming's Playground" },
  },

  '/projects/atolla-ocean': {
    title: 'Atolla Ocean - your dive, understood and remembered',
    description:
      'My startup. AI that turns raw dive footage into a finished dive story: the species you saw, and the moments worth keeping.',
    image: '/og/atolla-ocean.jpg',
    tab: { en: "Atolla Ocean | Ming's Playground", zh: "Atolla Ocean | Ming's Playground" },
  },

  '/projects/charity-box': {
    title: 'CharityBox 益盒 - the engineering behind effective giving',
    description:
      'A research and advisory organisation for effective giving in China, and the pro bono engineering that keeps its donation platform running.',
    image: '/og/charity-box.jpg',
    tab: { en: "CharityBox 益盒 | Ming's Playground", zh: "益盒 CharityBox | Ming's Playground" },
  },

  '/projects/octopus-girl': {
    title: 'Octopus Girl - a personal avatar',
    description: 'An avatar drawn from the octopus: curious, adaptable, a little shy.',
    image: '/og/octopus-girl.jpg',
    tab: { en: "Octopus Girl | Ming's Playground", zh: "章鱼女孩 | Ming's Playground" },
  },

  '/projects/catch-and-keep': {
    title: 'Catch & Keep - spaced repetition, built end to end',
    description:
      'Catch a word or an idea in seconds, and it turns into a card you actually come back to. Designed, built and shipped solo.',
    image: '/og/catch-and-keep.jpg',
    tab: { en: "Catch & Keep | Ming's Playground", zh: "Catch & Keep | Ming's Playground" },
  },

  '/projects/nepal-travel': {
    title: 'Nepal Travel Diaries - ink, comics, and classical prose',
    description: 'Festivals, old cities and mountain trails, drawn and written on the road.',
    image: '/og/nepal-travel.jpg',
    tab: { en: "Nepal Travel Diaries | Ming's Playground", zh: "尼国游日记 | Ming's Playground" },
  },
};

/** The metadata for a path, falling back to the home card. */
export const metaFor = (pathname: string): ShareMeta =>
  ROUTE_META[pathname.replace(/\/+$/, '') || '/'] ?? HOME_META;

/** What the browser tab should read, in the language on screen. */
export const tabTitleFor = (pathname: string, language: 'en' | 'zh'): string => {
  const meta = metaFor(pathname);
  return meta.tab?.[language] ?? meta.title;
};
