import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { getBilingualText } from '@/lib/utils';
import type { BilingualText } from '@/lib/types';
import { asLine, type VoiceEntry } from '@/lib/gapyear/voice';

interface MoreVoiceProps {
  label: BilingualText;
  paragraphs: readonly VoiceEntry[];
}

/** Expandable narration block ("多说两句") carrying the spoken-script voice. */
export default function MoreVoice({ label, paragraphs }: MoreVoiceProps) {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-10">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="gy-h gy-accent text-xl md:text-2xl inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
        aria-expanded={open}
      >
        <motion.span
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.25 }}
          className="inline-block"
          aria-hidden="true"
        >
          ➤
        </motion.span>
        {getBilingualText(label, language)}
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
            <div className="gy-voice mt-4 px-5 py-5 md:px-7 md:py-6 space-y-3">
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
