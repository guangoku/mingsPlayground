import { type ReactNode } from 'react';

export type SlideVariant = 'charcoal' | 'verm' | 'cream';

interface SlideProps {
  variant: SlideVariant;
  children: ReactNode;
  /** Render as a short strip instead of a full-height slide */
  strip?: boolean;
  className?: string;
  id?: string;
  /** Direction tag worn by Act II chapters, e.g. 生活 / life */
  tag?: string;
  /** Pinned to the bottom edge of the slide, outside the centered column */
  footer?: ReactNode;
}

/** Full-bleed "slide" section in the deck's three-color system. */
export default function Slide({
  variant,
  children,
  strip = false,
  className = '',
  id,
  tag,
  footer,
}: SlideProps) {
  return (
    <section id={id} className={`gy-slide gy-bg-${variant} ${strip ? 'gy-strip' : ''} ${className}`}>
      {tag && <span className="gy-dir-tag gy-h gy-accent" aria-hidden="true">「{tag}」</span>}
      <div className="gy-inner">{children}</div>
      {footer && (
        <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center">{footer}</div>
      )}
    </section>
  );
}
