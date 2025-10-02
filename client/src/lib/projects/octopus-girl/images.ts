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

// Dynamically import toy variation images
const toyImages = import.meta.glob('@assets/projects/octopus-girl/toy/*.{png,jpg,jpeg,webp}', { 
  eager: true,
  import: 'default'
});

// Dynamically import 3D cartoon model images
const cartoon3DImages = import.meta.glob('@assets/projects/octopus-girl/cartoon3D/*.{png,jpg,jpeg,webp}', { 
  eager: true,
  import: 'default'
});

// Dynamically import 2D anime variation images
const anime2DImages = import.meta.glob('@assets/projects/octopus-girl/anime2D/*.{png,jpg,jpeg,webp}', { 
  eager: true,
  import: 'default'
});

// Convert the glob results to arrays of image URLs
const initialDesignGallery = Object.values(initialDesignImages) as string[];
const toyGallery = Object.values(toyImages) as string[];
const cartoon3DGallery = Object.values(cartoon3DImages) as string[];
const anime2DGallery = Object.values(anime2DImages) as string[];

export const OCTOPUS_GIRL_IMAGES = {
  hero: heroImage,
  aboutOctopus: aboutOctopus,
  
  // Specific galleries for different sections
  initialDesigns: initialDesignGallery,
  toy: toyGallery,
  cartoon3D: cartoon3DGallery,
  anime2D: anime2DGallery,
  
  // Legacy gallery (all images combined)
  gallery: [...initialDesignGallery, ...toyGallery, ...cartoon3DGallery, ...anime2DGallery]
} as const;

