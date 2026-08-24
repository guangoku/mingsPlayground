/**
 * Charity Box project images
 * Dynamically loads images from specific directories
 */

// WeChat mini-program QR - the only way into the product
import miniProgramQr from '@assets/projects/charity-box/miniprogram-qr.png';

// Torn-paper collage used as the landing-page card cover
import cardCover from '@assets/projects/charity-box/collage.webp';

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
  card: cardCover,
  miniProgramQr,
  posters: posterGallery,
  screenshots: screenshotGallery
} as const;
