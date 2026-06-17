/**
 * Atolla Ocean project images
 * Hero is a placeholder SVG cover — drop real screenshots into
 * attached_assets/projects/atolla-ocean/screenshots/ and they load automatically.
 */

// Hero image (screenshot of atollaocean.com). hero.svg kept as a fallback placeholder.
import heroImage from '@assets/projects/atolla-ocean/cover.png';

// Dynamically import screenshot images (none yet — glob returns [] until added)
const screenshotImages = import.meta.glob('@assets/projects/atolla-ocean/screenshots/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default'
});

const screenshotGallery = Object.values(screenshotImages) as string[];

export const ATOLLA_OCEAN_IMAGES = {
  hero: heroImage,
  screenshots: screenshotGallery,
} as const;
