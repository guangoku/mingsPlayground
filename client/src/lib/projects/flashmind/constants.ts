/**
 * FlashMind project constants
 * Project-specific constants and configuration
 */

export const FLASHMIND_CONSTANTS = {
  PROJECT_ID: '3',
  LAUNCH_YEAR: '2024',
  LIVE_URL: 'https://flashmind.app',
  
  // Technical stack
  TECHNICAL_STACK: ['React', 'TypeScript', 'Node.js', 'OpenAI API'],
  
  // Features configuration
  FEATURES: {
    AI_GENERATION: true,
    SMART_TAGGING: true,
    COLLECTIONS: true,
    SHARING: true,
  },
  
  // Screenshots configuration
  SCREENSHOTS: {
    ASPECT_RATIO: 'wide' as const,
    MAX_IMAGES_PER_ROW: 2,
    SHOW_CAPTIONS: true,
  },
  
  // Architecture diagrams configuration
  ARCHITECTURE: {
    SHOW_DIAGRAMS: true,
    SHOW_TECH_STACK: true,
    SHOW_API_FLOW: true,
  }
} as const;
