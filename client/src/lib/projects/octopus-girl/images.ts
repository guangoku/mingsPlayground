/**
 * Octopus Girl project images
 * Dynamically loads images from specific directories
 */

// Individual images
import heroImage from '@assets/projects/octopus-girl/hero.png';
import aboutOctopus from '@assets/projects/octopus-girl/aboutOctopus/aboutOctopus.png';

// Dynamically import initial design images
const initialDesignImages = import.meta.glob('@assets/projects/octopus-girl/initialDesign/*.{png,jpg,jpeg,webp}', { 
  eager: true,
  import: 'default'
});

// Dynamically import variation images
const variationImages = import.meta.glob('@assets/projects/octopus-girl/variation/*.{png,jpg,jpeg,webp}', { 
  eager: true,
  import: 'default'
});

// Convert the glob results to arrays of image URLs
const initialDesignGallery = Object.values(initialDesignImages) as string[];
const variationGallery = Object.values(variationImages) as string[];

export const OCTOPUS_GIRL_IMAGES = {
  hero: heroImage,
  aboutOctopus: aboutOctopus,
  
  // Specific galleries for different sections
  initialDesigns: initialDesignGallery,
  variations: variationGallery,
  
  // Legacy gallery (all images combined)
  gallery: [...initialDesignGallery, ...variationGallery]
} as const;

