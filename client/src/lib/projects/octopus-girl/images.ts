/**
 * Octopus Girl project images
 * Dynamically loads all images from the gallery directory
 */

// Hero image (separate from gallery)
import heroImage from '@assets/projects/octopus-girl/hero.png';

// Dynamically import all gallery images
const galleryImages = import.meta.glob('@assets/projects/octopus-girl/gallery/*.{png,jpg,jpeg,webp}', { 
  eager: true,
  import: 'default'
});

// Convert the glob result to an array of image URLs
const filteredGallery = Object.values(galleryImages) as string[];

export const OCTOPUS_GIRL_IMAGES = {
  hero: heroImage,
  gallery: filteredGallery
} as const;
