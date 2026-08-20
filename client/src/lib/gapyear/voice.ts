import type { BilingualText } from '@/lib/types';

/**
 * A paragraph that can carry a short label in front of it, so a block can be
 * skimmed by its leads instead of read end to end. Shared by the expandable
 * blocks (多说两句) and the story cards.
 */
export interface VoiceLine {
  lead?: BilingualText;
  text: BilingualText;
}

export type VoiceEntry = BilingualText | VoiceLine;

export const asLine = (p: VoiceEntry): VoiceLine => ('text' in p ? p : { text: p });
