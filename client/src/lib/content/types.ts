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
export type PieceTopic = 'startup' | 'building' | 'for-good' | 'art' | 'travel' | 'life';

export type PieceStatus = 'live' | 'in-progress';

export interface Piece {
  slug: string;
  title: BilingualText;
  /** What Ming is to this piece, when that is the point. e.g. Founder. */
  role?: BilingualText;
  /** Short line under the title, in the site's italic display voice. */
  kicker?: BilingualText;
  blurb: BilingualText;
  /** Cover art. Pieces without one render an ink tile instead. */
  cover?: string;
  /** object-position for the cover, when centre-cropping would cut the subject. */
  coverPosition?: string;
  /** A drawn cover instead of a photo - see components/content/covers. */
  coverArt?: string;
  /**
   * How much of the card the cover occupies.
   * - "banner" (default) - a band above the text
   * - "full"   - the cover is the card, text sits on it
   * - "strip"  - a narrow band, so the typography leads
   */
  coverLayout?: 'banner' | 'full' | 'strip';
  weight: PieceWeight;
  topics: PieceTopic[];
  status: PieceStatus;
  /** Where the piece lives on this site. Omitted while unpublished. */
  href?: string;
  /** The real thing, off-site. Surfaced on the card itself, not buried in the detail page. */
  externalUrl?: string;
  /** Label for that link, e.g. atollaocean.com */
  externalLabel?: string;
}

/** A curated, ordered row on the landing page. */
export interface Shelf {
  key: string;
  eyebrow: BilingualText;
  title: BilingualText;
  lede?: BilingualText;
  /** Slugs, in display order. Reordering the landing page is a data edit. */
  pieces: string[];
  /** "lead" gives the first piece a wide card and grids the rest beneath it. */
  layout?: 'grid' | 'lead';
}

export const TOPIC_LABELS: Record<PieceTopic, BilingualText> = {
  startup: { en: 'Startup', zh: '创业' },
  building: { en: 'Building', zh: '在做的' },
  'for-good': { en: 'For good', zh: '公益' },
  art: { en: 'Art', zh: '画画' },
  travel: { en: 'Travel', zh: '旅行' },
  life: { en: 'Life', zh: '生活' },
};
