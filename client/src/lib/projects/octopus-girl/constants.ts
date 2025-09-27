/**
 * Octopus Girl project constants
 * Project-specific constants and configuration
 */

export const OCTOPUS_GIRL_CONSTANTS = {
  PROJECT_ID: '1',
  
  // Gallery configuration
  GALLERY: {
    ASPECT_RATIO: 'square' as const,
    MAX_IMAGES_PER_ROW: 3,
    SHOW_ZOOM: true,
  },
  
  // Process section configuration
  PROCESS: {
    SHOW_SKETCHES: true,
    SHOW_ITERATIONS: true,
    SHOW_BEHIND_SCENES: true,
  },
  
  // Artist statement configuration
  ARTIST_STATEMENT: {
    SHOW_ICON: true,
    ICON: 'Palette',
    MAX_WIDTH: '3xl',
  }
} as const;
