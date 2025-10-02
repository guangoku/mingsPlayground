/**
 * FlashMind project images
 * Dynamically loads images from specific directories
 */

// Hero image
import heroImage from '@assets/projects/flashmind/hero.png';

// Dynamically import screenshot images
const screenshotImages = import.meta.glob('@assets/projects/flashmind/screenshots/*.{png,jpg,jpeg,webp}', { 
  eager: true,
  import: 'default'
});

// Dynamically import architecture images (placeholder for future additions)
const architectureImages = import.meta.glob('@assets/projects/flashmind/architecture/*.{png,jpg,jpeg,webp}', { 
  eager: true,
  import: 'default'
});

// Convert the glob results to arrays of image URLs
const screenshotGallery = Object.values(screenshotImages) as string[];
const architectureGallery = Object.values(architectureImages) as string[];

export const FLASHMIND_IMAGES = {
  hero: heroImage,
  screenshots: screenshotGallery,
  architecture: architectureGallery
} as const;
