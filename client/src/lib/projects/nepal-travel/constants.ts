/**
 * Nepal Travel Diaries project constants
 * Project-specific constants and configuration
 */

export const NEPAL_TRAVEL_CONSTANTS = {
  PROJECT_ID: '2',
  CREATED_YEAR: '2023',
  MEDIUM: 'Ink & Comic',
  STYLE: 'Graphic Novel',
  
  // Page configuration
  PAGES: {
    ASPECT_RATIO: 'portrait' as const,
    MAX_IMAGES_PER_ROW: 2,
    SHOW_NAVIGATION: true,
  },
  
  // Sketch section configuration
  SKETCHES: {
    SHOW_CHARACTER_DEVELOPMENT: true,
    SHOW_PROCESS: true,
    SHOW_BEHIND_SCENES: true,
  },
  
  // Literary style configuration
  LITERARY_STYLE: {
    SHOW_CLASSICAL_PROSE: true,
    SHOW_CHINESE_LITERATURE: true,
    SHOW_XU_XIAKE_STYLE: true,
  }
} as const;
