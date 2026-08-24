/**
 * Drawn covers, for pieces whose subject is better served by a motif than by
 * a photograph. Keyed by the string a piece carries in the registry so cover
 * art stays data, not a component import in the content pool.
 */
import { type ComponentType } from 'react';
import OneDayCover from './OneDayCover';

export const COVER_ART: Record<string, ComponentType<{ className?: string }>> = {
  'one-day-a-week': OneDayCover,
};
