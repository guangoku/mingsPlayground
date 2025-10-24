/**
 * Journey Map Data Index
 * Export all journey maps
 */

import { visualStorytellingJourney } from './visual-storytelling-lab/journey';
import { JourneyMap } from '../journey/types';

// Export all journey maps
export const journeyMaps: Record<string, JourneyMap> = {
  'visual-storytelling-lab': visualStorytellingJourney
};

/**
 * Get journey map by ID
 */
export const getJourneyMap = (journeyMapId: string): JourneyMap | null => {
  return journeyMaps[journeyMapId] || null;
};

/**
 * Get all journey maps
 */
export const getAllJourneyMaps = (): JourneyMap[] => {
  return Object.values(journeyMaps);
};

/**
 * Get journey map IDs
 */
export const getJourneyMapIds = (): string[] => {
  return Object.keys(journeyMaps);
};
