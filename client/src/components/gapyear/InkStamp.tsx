import { type CSSProperties } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { ArtAsset } from '@/lib/gapyear/art';

interface InkStampProps {
  art: ArtAsset;
  className?: string;
  delay?: number;
}

/**
 * Renders a hand-drawn PNG as a recolorable "ink stamp": the image's alpha
 * channel becomes a CSS mask and currentColor becomes the ink, so one export
 * works on charcoal, vermillion, and cream backgrounds alike.
 */
export default function InkStamp({ art, className = '', delay = 0 }: InkStampProps) {
  const reduce = useReducedMotion();
  const style: CSSProperties = {
    aspectRatio: String(art.ratio),
    backgroundColor: 'currentColor',
    WebkitMaskImage: `url(${art.src})`,
    maskImage: `url(${art.src})`,
    WebkitMaskSize: 'contain',
    maskSize: 'contain',
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
    WebkitMaskPosition: 'center',
    maskPosition: 'center',
  };
  return (
    <motion.div
      aria-hidden="true"
      className={className}
      style={style}
      {...(reduce
        ? {}
        : {
            initial: { opacity: 0, scale: 0.9 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true, margin: '-40px' },
            transition: { duration: 0.5, delay },
          })}
    />
  );
}
