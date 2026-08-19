/**
 * Atolla Ocean project constants
 * Project-specific constants and configuration
 */

export const ATOLLA_OCEAN_CONSTANTS = {
  PROJECT_ID: '5',
  FOUNDED: 'Jan 2026',
  LIVE_URL: 'https://atollaocean.com',

  // Technical focus
  TECHNICAL_STACK: ['Computer Vision', 'Machine Learning', 'Python', 'React', 'TypeScript'],

  // Screenshots configuration
  SCREENSHOTS: {
    ASPECT_RATIO: 'wide' as const,
    MAX_IMAGES_PER_ROW: 2,
    SHOW_CAPTIONS: true,
  },
} as const;
