/**
 * The content pool: everything Ming publishes is a "piece", regardless of
 * whether it started life as a project or a post. Weight and topics are
 * metadata, so a piece can be promoted (note -> story -> flagship) by editing
 * one field instead of moving it between systems.
 */
import { type BilingualText } from '@/lib/types';

/** How much room a piece earns on the page. */
export type PieceWeight = 'flagship' | 'story' | 'note';

/** Threads a piece belongs to. A piece can sit in several. */
export type PieceTopic = 'building' | 'for-good' | 'art' | 'travel' | 'life';

export type PieceStatus = 'live' | 'in-progress';

export interface Piece {
  slug: string;
  title: BilingualText;
  /** Short line under the title, in the site's italic display voice. */
  kicker?: BilingualText;
  blurb: BilingualText;
  /** Cover art. Pieces without one render an ink tile instead. */
  cover?: string;
  weight: PieceWeight;
  topics: PieceTopic[];
  status: PieceStatus;
  /** Where the piece lives. Omitted while a piece is still unpublished. */
  href?: string;
}

/** A curated, ordered row on the landing page. */
export interface Shelf {
  key: string;
  eyebrow: BilingualText;
  title: BilingualText;
  lede?: BilingualText;
  /** Slugs, in display order. Reordering the landing page is a data edit. */
  pieces: string[];
}

export const TOPIC_LABELS: Record<PieceTopic, BilingualText> = {
  building: { en: 'Building', zh: '在做的' },
  'for-good': { en: 'For good', zh: '公益' },
  art: { en: 'Art', zh: '画画' },
  travel: { en: 'Travel', zh: '旅行' },
  life: { en: 'Life', zh: '生活' },
};
