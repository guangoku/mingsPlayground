import { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { getBilingualText } from '@/lib/utils';
import { Doodle, type DoodleSpec } from './doodles';
import type { StudyNote } from './StudyBoard';

interface PhotoSpreadProps {
  notes: readonly StudyNote[];
  photos: Record<string, string>;
  art: Record<string, DoodleSpec>;
  label?: string;
}

/** Scatter slots: [left%, top%, rotation]. Tuned so most of every photo
 * shows at a glance - tossed on the table, not filed in a grid. */
const SLOTS: Record<number, [number, number, number][]> = {
  1: [[16, 4, -2]],
  2: [[2, 4, -4], [46, 10, 3]],
  3: [[0, 6, -4], [31, 0, 2], [61, 9, -2]],
  4: [[2, 2, -5], [50, 0, 3], [12, 46, 3], [56, 48, -3]],
  5: [[0, 2, -5], [32, 0, 3], [63, 5, -2], [14, 46, 4], [50, 49, -3]],
  6: [[0, 2, -5], [32, 0, 3], [63, 5, -2], [3, 47, 4], [34, 51, -3], [64, 47, 5]],
  7: [[0, 2, -5], [32, 0, 3], [63, 5, -2], [0, 47, 4], [31, 51, -3], [61, 47, 5], [45, 24, 2]],
};

/**
 * A loose spread of snapshots - every picture partly visible at once,
 * no swiping needed. Tapping one lifts it above the others.
 */
export default function PhotoSpread({ notes, photos, art, label }: PhotoSpreadProps) {
  const { language } = useLanguage();
  const reduce = useReducedMotion();
  const [zOrder, setZOrder] = useState<Record<string, number>>({});
  const zCounter = useRef(10);
  if (!notes.length) return null;

  const n = Math.min(notes.length, 7);
  const slots = SLOTS[n];
  const twoRows = n >= 4;
  const captions = notes.filter((note) => note.caption);

  const lift = (id: string) => {
    zCounter.current += 1;
    setZOrder((z) => ({ ...z, [id]: zCounter.current }));
  };

  return (
    <div className="gy-spread-wrap">
      {label && <p className="gy-h text-sm md:text-base opacity-55 mb-2">{label}</p>}
      <div className="gy-spread" style={{ aspectRatio: twoRows ? '3 / 2.1' : '3 / 1.5' }}>
        {notes.slice(0, 7).map((note, i) => {
          const [x, y, rot] = slots[i];
          const photo = photos[note.id];
          const lifted = zOrder[note.id];
          return (
            <motion.button
              key={note.id}
              type="button"
              onClick={() => lift(note.id)}
              className="gy-spread-item"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: twoRows ? '35%' : '37%',
                zIndex: lifted ?? i + 1,
              }}
              initial={false}
              animate={reduce ? undefined : { rotate: rot, scale: lifted ? 1.12 : 1 }}
              whileHover={reduce ? undefined : { scale: 1.12, rotate: rot / 2 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              aria-label={
                note.caption
                  ? getBilingualText(note.caption, language)
                  : language === 'zh'
                    ? `照片 ${i + 1}`
                    : `photo ${i + 1}`
              }
            >
              {photo ? (
                <img src={photo} alt="" loading="lazy" />
              ) : (
                <span className="gy-spread-sketch">
                  {art[note.art] && <Doodle {...art[note.art]} className="w-12 md:w-16" />}
                </span>
              )}
            </motion.button>
          );
        })}
      </div>
      {captions.length > 0 && (
        <ul className="mt-3 space-y-1">
          {captions.map((note) => (
            <li key={note.id} className="gy-hand text-base md:text-lg leading-snug opacity-90 flex gap-2">
              <span className="gy-accent flex-shrink-0" aria-hidden="true">·</span>
              <span>{getBilingualText(note.caption!, language)}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
