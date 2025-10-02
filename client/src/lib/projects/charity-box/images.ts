/**
 * Charity Box project images
 * Dynamically loads images from specific directories
 */

// Hero image
import heroImage from '@assets/projects/charity-box/hero.jpg';

// Dynamically import poster images
const posterImages = import.meta.glob('@assets/projects/charity-box/posters/*.{png,jpg,jpeg,webp,JPG}', { 
  eager: true,
  import: 'default'
});

// Dynamically import screenshot images (placeholder for future additions)
const screenshotImages = import.meta.glob('@assets/projects/charity-box/screenshots/*.{png,jpg,jpeg,webp}', { 
  eager: true,
  import: 'default'
});

// Convert the glob results to arrays of image URLs
const posterGallery = Object.values(posterImages) as string[];
const screenshotGallery = Object.values(screenshotImages) as string[];

export const CHARITY_BOX_IMAGES = {
  hero: heroImage,
  posters: posterGallery,
  screenshots: screenshotGallery
} as const;
