/**
 * Landing page curation. Each shelf is an ordered list of slugs, so
 * rearranging the page - promoting a piece, retiring one, adding a new
 * thread - is a data edit rather than a layout change.
 */
import { type Shelf } from './types';

export const FEATURED_SHELF: Shelf = {
  key: 'featured',
  eyebrow: { en: 'On the table', zh: '台面上' },
  title: { en: "What I'm up to", zh: '最近在忙的' },
  pieces: ['atolla-ocean', 'charity-box', 'gap-year'],
};

export const MORE_SHELF: Shelf = {
  key: 'more',
  eyebrow: { en: 'Also here', zh: '还有这些' },
  title: { en: 'Around the playground', zh: '其他角落' },
  lede: {
    en: 'Stories and smaller notes - drawn, built, or written along the way.',
    zh: '一些故事和小记，画的、做的、写的都有。',
  },
  pieces: ['octopus-girl', 'catch-and-keep', 'nepal-travel'],
};

export const shelves: Shelf[] = [FEATURED_SHELF, MORE_SHELF];
