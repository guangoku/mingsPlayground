/**
 * Charity Box project constants
 * Project-specific constants and configuration
 */

export const CHARITY_BOX_CONSTANTS = {
  PROJECT_ID: '4',
  LAUNCH_YEAR: '2023',
  
  // Impact metrics
  IMPACT_METRICS: [
    { label: 'Users', value: '10,000+' },
    { label: 'Donations', value: '¥500,000+' },
    { label: 'Charities', value: '50+' }
  ],
  
  // Technical stack
  TECHNICAL_STACK: ['WeChat Mini-Program', 'JavaScript', 'Payment Integration'],
  
  // Features configuration
  FEATURES: {
    DONATION_TRACKING: true,
    TRANSPARENCY: true,
    CHARITY_SELECTION: true,
    PAYMENT_INTEGRATION: true,
  },
  
  // Screenshots configuration
  SCREENSHOTS: {
    ASPECT_RATIO: 'mobile' as const,
    MAX_IMAGES_PER_ROW: 2,
    SHOW_CAPTIONS: true,
  },
  
  // Impact section configuration
  IMPACT: {
    SHOW_METRICS: true,
    SHOW_TESTIMONIALS: true,
    SHOW_STORIES: true,
  }
} as const;
