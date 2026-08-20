import { useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { getBilingualText } from '@/lib/utils';
import type { BilingualText } from '@/lib/types';
import { asLine, type VoiceEntry } from '@/lib/gapyear/voice';

interface StoryCardProps {
  title: BilingualText;
  hook?: BilingualText;
  /** One line of setup before the concrete list */
  intro?: BilingualText;
  /** The concrete stuff, scannable instead of buried in prose */
  bullets?: readonly BilingualText[];
  paragraphs: readonly VoiceEntry[];
  icon?: ReactNode;
  className?: string;
}

/**
 * Hand-drawn expandable box: title (+ optional hook line) always visible,
 * tap to unfold the story. The red ➤ marker is the shared "this opens"
 * affordance across the page.
 */
export default function StoryCard({
  title,
  hook,
  intro,
  bullets,
  paragraphs,
  icon,
  className = '',
}: StoryCardProps) {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <div className={`gy-box ${className}`}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full text-left px-5 py-4 md:px-6 md:py-5 flex items-center gap-4"
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span className="flex-1 min-w-0">
          <span className="gy-h block text-xl md:text-2xl leading-snug">{getBilingualText(title, language)}</span>
          {hook && (
            <span className="block mt-1 text-sm md:text-base opacity-75">{getBilingualText(hook, language)}</span>
          )}
        </span>
        <motion.span
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.25 }}
          className="gy-accent flex-shrink-0"
          aria-hidden="true"
        >
          ➤
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 md:px-6 md:pb-6 space-y-3">
              {intro && (
                <p className="leading-relaxed text-base md:text-lg opacity-90">
                  {getBilingualText(intro, language)}
                </p>
              )}
              {bullets && bullets.length > 0 && (
                <ul className="space-y-1.5">
                  {bullets.map((b, i) => (
                    <li
                      key={i}
                      className="leading-relaxed text-base md:text-lg opacity-90 flex gap-2"
                    >
                      <span className="gy-accent flex-shrink-0" aria-hidden="true">
                        ·
                      </span>
                      <span>{getBilingualText(b, language)}</span>
                    </li>
                  ))}
                </ul>
              )}
              {paragraphs.map(asLine).map((line, i) => (
                <p key={i} className="leading-relaxed text-base md:text-lg opacity-90">
                  {line.lead && (
                    <span className="gy-h gy-accent mr-2">
                      {getBilingualText(line.lead, language)}
                    </span>
                  )}
                  {getBilingualText(line.text, language)}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
