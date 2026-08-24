import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { getBilingualText } from '@/lib/utils';
import { family } from '@/lib/gapyear/chapters';
import Slide from '../Slide';
import Reveal from '@/components/Reveal';
import { Doodle, HEART, UNDERLINE_DASHED } from '../doodles';

export default function ThreeGenerations() {
  const { language } = useLanguage();
  const t = (bt: { zh: string; en: string }) => getBilingualText(bt, language);
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <Slide variant="verm" id="gy-family" tag={t({ zh: '关系', en: 'people' })}>
      <div className="absolute bottom-14 right-6 md:right-16 w-10 md:w-14 gy-accent rotate-12">
        <Doodle {...HEART} className="w-full" delay={0.5} />
      </div>
      <Reveal>
        <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
          <h2 className="gy-h" style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)' }}>
            {t(family.heading)}
          </h2>
          <p className="gy-h text-xl md:text-2xl opacity-85">{t(family.sub)}</p>
        </div>
        <div className="gy-accent w-56 md:w-72 mt-1">
          <Doodle {...UNDERLINE_DASHED} className="w-full" strokeWidth={5} />
        </div>
      </Reveal>

      <div className="mt-12 space-y-10">
        {family.rows.map((row, i) => {
          const open = openKey === row.key;
          return (
            <Reveal key={row.key} delay={0.12 * i}>
              <button
                type="button"
                onClick={() => setOpenKey(open ? null : row.key)}
                aria-expanded={open}
                className="w-full text-left flex items-baseline gap-6 md:gap-10 group"
              >
                <span className="gy-h flex-shrink-0" style={{ fontSize: 'clamp(2.4rem, 7vw, 4.5rem)' }}>
                  {row.num}
                </span>
                <span className="gy-h text-xl md:text-3xl">{t(row.title)}</span>
                <motion.span
                  animate={{ rotate: open ? 90 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="gy-accent ml-auto flex-shrink-0"
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
                    <div className="pt-4 pl-4 md:pl-28 space-y-3 max-w-2xl">
                      {row.paragraphs.map((p, j) => (
                        <p key={j} className="leading-relaxed text-base md:text-lg opacity-90">
                          {t(p)}
                        </p>
                      ))}
                      {'bullets' in row && row.bullets && (
                        <ul className="space-y-1.5 pt-1">
                          {row.bullets.map((b, j) => (
                            <li
                              key={j}
                              className="text-base md:text-lg leading-relaxed opacity-90 flex gap-2"
                            >
                              <span className="gy-accent flex-shrink-0" aria-hidden="true">
                                ·
                              </span>
                              <span>{t(b)}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {'closing' in row && row.closing && (
                        <p className="leading-relaxed text-base md:text-lg opacity-90 pt-1">
                          {t(row.closing)}
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          );
        })}
      </div>
    </Slide>
  );
}
