/**
 * Hand-drawn doodle library for the gap-year page.
 * All doodles are stroke-based SVGs that "draw themselves" on scroll
 * (framer-motion pathLength). Color comes from currentColor so the same
 * doodle works on charcoal / vermillion / cream backgrounds.
 *
 * Placeholder art: to be swapped for Ming's Procreate exports where available.
 */
import { motion, useReducedMotion } from 'framer-motion';

export interface DoodleSpec {
  viewBox?: string;
  paths: string[];
  /** Filled dots: [cx, cy, r] */
  dots?: [number, number, number][];
  texts?: { x: number; y: number; size: number; v: string }[];
  strokeWidth?: number;
}

interface DoodleProps extends DoodleSpec {
  className?: string;
  delay?: number;
  duration?: number;
}

export function Doodle({
  viewBox = '0 0 120 120',
  paths,
  dots = [],
  texts = [],
  strokeWidth = 5,
  className = '',
  delay = 0,
  duration = 0.8,
}: DoodleProps) {
  const reduce = useReducedMotion();
  const drawProps = (i: number) =>
    reduce
      ? {}
      : {
          initial: { pathLength: 0, opacity: 0 },
          whileInView: { pathLength: 1, opacity: 1 },
          viewport: { once: true, margin: '-40px' },
          transition: { duration, delay: delay + 0.12 * i, ease: 'easeInOut' as const },
        };
  const popProps = (i: number) =>
    reduce
      ? {}
      : {
          initial: { scale: 0, opacity: 0 },
          whileInView: { scale: 1, opacity: 1 },
          viewport: { once: true, margin: '-40px' },
          transition: { duration: 0.3, delay: delay + 0.12 * paths.length + 0.08 * i },
        };

  return (
    <motion.svg viewBox={viewBox} fill="none" className={className} aria-hidden="true">
      {paths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          {...drawProps(i)}
        />
      ))}
      {dots.map(([cx, cy, r], i) => (
        <motion.circle key={`d${i}`} cx={cx} cy={cy} r={r} fill="currentColor" {...popProps(i)} />
      ))}
      {texts.map((t, i) => (
        <motion.text
          key={`t${i}`}
          x={t.x}
          y={t.y}
          fontSize={t.size}
          fill="currentColor"
          stroke="none"
          textAnchor="middle"
          fontFamily="'Patrick Hand','ZCOOL KuaiLe',cursive"
          {...popProps(dots.length + i)}
        >
          {t.v}
        </motion.text>
      ))}
    </motion.svg>
  );
}

/* ---------------------------------- presets ---------------------------------- */

export const HAMMER: DoodleSpec = {
  paths: [
    'M28 32 C46 26 74 25 90 31 C93 39 93 45 90 51 C72 46 48 47 30 52 C27 45 26 38 28 32',
    'M57 51 C59 68 61 86 60 104',
    'M65 50 C67 66 68 84 67 102',
    'M59 104 C62 106 65 105 67 102',
  ],
};

export const CLUB: DoodleSpec = {
  paths: [
    'M58 18 C72 14 84 26 82 44 C80 62 70 78 58 86 C50 90 42 86 40 76 C38 62 42 34 50 22 C52 19 55 19 58 18',
    'M70 22 L77 15',
    'M81 37 L90 35',
    'M78 56 L86 61',
    'M48 88 C44 96 40 102 36 108',
  ],
  strokeWidth: 4.5,
};

export const SCRIBBLE: DoodleSpec = {
  paths: [
    'M62 26 C94 18 106 56 74 64 C42 72 30 38 60 34 C90 30 102 66 66 76 C34 84 26 50 54 46',
    'M50 40 C24 48 30 84 62 84 C94 84 96 48 66 50 C44 52 42 76 64 78',
    'M58 60 C46 92 84 96 88 70',
    'M45 54 a7 7 0 1 0 14 0 a7 7 0 1 0 -14 0',
    'M59 54 L66 54',
    'M66 54 a7 7 0 1 0 14 0 a7 7 0 1 0 -14 0',
  ],
  strokeWidth: 4,
};

export const OCTOPUS: DoodleSpec = {
  paths: [
    'M44 46 C42 24 78 22 78 44 C78 56 72 60 60 61 C50 60 45 55 44 46',
    'M48 58 C42 70 50 78 44 90',
    'M57 60 C56 72 62 80 57 92',
    'M66 60 C70 70 64 80 70 90',
    'M74 54 C84 58 88 50 84 42',
    'M56 26 C54 18 60 12 66 14',
  ],
  dots: [
    [54, 44, 2.6],
    [66, 44, 2.6],
    [67, 13, 1.8],
  ],
};

export const ARROW: DoodleSpec = {
  paths: [
    'M22 62 C44 55 70 54 90 58',
    'M80 47 C85 53 89 56 94 59 C87 62 83 66 79 70',
  ],
};

export const SPARKLE: DoodleSpec = {
  paths: [
    'M60 24 C63 40 68 46 82 50 C68 54 63 60 60 76 C57 60 52 54 38 50 C52 46 57 40 60 24',
  ],
};

export const TICKS: DoodleSpec = {
  paths: ['M34 72 C38 61 42 52 47 42', 'M56 64 C58 55 60 47 62 38'],
};

export const DOLLAR_DOWN: DoodleSpec = {
  paths: [
    'M60 22 C84 22 98 40 96 62 C94 84 76 96 56 94 C36 92 24 76 26 56 C28 38 42 22 60 22',
    'M70 42 C58 36 46 42 48 52 C50 62 70 58 72 68 C74 78 58 84 48 76',
    'M60 32 L58 88',
    'M82 82 C90 90 96 96 102 102',
    'M102 102 L92 100',
    'M102 102 L100 92',
  ],
  strokeWidth: 4.5,
};

export const LEDGER: DoodleSpec = {
  paths: [
    'M36 28 C54 24 72 24 84 28 C87 50 87 74 84 96 C66 100 50 100 38 96 C34 74 34 50 36 28',
    'M46 44 C56 42 66 42 74 44',
    'M46 58 C56 56 66 56 74 58',
    'M46 72 C54 70 64 70 72 72',
  ],
};

export const ROBOT_LOOP: DoodleSpec = {
  paths: [
    'M42 46 C42 34 52 30 60 30 C68 30 78 34 78 46 C78 56 68 60 60 60 C52 60 42 56 42 46',
    'M60 30 C60 24 60 22 60 20',
    'M32 52 C24 74 40 92 60 90',
    'M60 90 L51 86',
    'M60 90 L53 97',
    'M88 50 C94 28 76 12 58 14',
    'M58 14 L67 17',
    'M58 14 L65 8',
  ],
  dots: [
    [54, 45, 2.4],
    [66, 45, 2.4],
    [60, 18, 2],
  ],
  strokeWidth: 4.5,
};

export const AI_CHIP: DoodleSpec = {
  paths: [
    'M40 40 C54 37 68 37 80 40 C83 54 83 66 80 80 C66 83 54 83 40 80 C37 66 37 54 40 40',
    'M50 40 L50 30',
    'M70 40 L70 30',
    'M50 80 L50 90',
    'M70 80 L70 90',
    'M40 50 L30 50',
    'M40 70 L30 70',
    'M80 50 L90 50',
    'M80 70 L90 70',
  ],
  texts: [{ x: 60, y: 69, size: 26, v: 'AI' }],
  strokeWidth: 4.5,
};

export const SIGNPOST: DoodleSpec = {
  paths: [
    'M60 34 L60 102',
    'M34 38 C50 35 68 36 80 38 L88 45 L80 52 C64 54 48 53 34 52 C33 47 33 42 34 38',
    'M86 62 C70 59 52 60 40 62 L32 69 L40 76 C56 78 72 77 86 76 C87 71 87 66 86 62',
    'M50 102 C56 100 64 100 70 102',
  ],
  strokeWidth: 4.5,
};

export const SITTER: DoodleSpec = {
  paths: [
    'M50 40 C50 24 74 24 74 40 C74 50 66 54 62 54 C56 54 50 50 50 40',
    'M50 52 C42 60 38 72 42 84 C44 92 52 96 62 96 C74 96 82 90 82 80 C82 72 78 64 72 58',
    'M50 74 C58 66 70 66 78 74',
    'M48 80 C58 76 70 76 80 80',
  ],
  dots: [[68, 38, 2]],
  strokeWidth: 4.5,
};

export const HOURGLASS: DoodleSpec = {
  paths: [
    'M38 24 C52 21 68 21 82 24',
    'M38 100 C52 103 68 103 82 100',
    'M42 26 C44 42 52 52 60 60 C68 52 76 42 78 26',
    'M42 98 C44 82 52 72 60 62 C68 72 76 82 78 98',
  ],
  dots: [
    [60, 52, 1.8],
    [60, 72, 1.8],
    [60, 86, 2.2],
    [55, 91, 1.8],
    [65, 91, 1.8],
  ],
  strokeWidth: 4.5,
};

export const HEART: DoodleSpec = {
  paths: [
    'M60 88 C34 68 28 46 42 36 C52 30 60 38 60 46 C60 38 68 30 78 36 C92 46 86 68 60 88',
  ],
};

export const PENCIL: DoodleSpec = {
  paths: [
    'M32 88 C46 72 62 56 76 42',
    'M40 94 C54 78 70 62 82 50',
    'M32 88 L26 96 L40 94',
    'M76 42 C78 38 82 36 84 40 C86 44 84 48 82 50',
  ],
  strokeWidth: 4.5,
};

export const SUPPORT: DoodleSpec = {
  paths: [
    'M34 46 a10 10 0 1 0 20 0 a10 10 0 1 0 -20 0',
    'M40 58 C36 72 36 84 38 96',
    'M46 58 C58 54 68 56 76 62',
    'M70 50 a8 8 0 1 0 16 0 a8 8 0 1 0 -16 0',
    'M76 66 C74 78 74 88 76 96',
    'M30 100 C46 98 66 98 88 100',
  ],
  strokeWidth: 4.5,
};

export const WAVE: DoodleSpec = {
  viewBox: '0 0 320 44',
  paths: [
    'M6 26 C26 10 46 10 66 26 C86 42 106 42 126 26 C146 10 166 10 186 26 C206 42 226 42 246 26 C266 10 286 10 306 24',
  ],
};

export const BUBBLES: DoodleSpec = {
  viewBox: '0 0 80 110',
  paths: [
    'M26 84 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0',
    'M40 54 a8 8 0 1 0 16 0 a8 8 0 1 0 -16 0',
    'M28 28 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0',
  ],
  strokeWidth: 3.5,
};

export const UNDERLINE: DoodleSpec = {
  viewBox: '0 0 200 16',
  paths: ['M5 11 C35 4 70 14 100 9 C130 4 165 13 195 7'],
};

export const UNDERLINE_DASHED: DoodleSpec = {
  viewBox: '0 0 200 16',
  paths: [
    'M5 10 C20 7 35 8 48 9',
    'M62 9 C76 6 90 7 104 9',
    'M118 9 C134 6 150 7 164 8',
    'M176 9 C182 8 190 8 195 8',
  ],
};

export const DOOR: DoodleSpec = {
  paths: [
    'M36 100 L36 28 C52 23 68 23 84 28 L84 100',
    'M46 40 C56 38 66 38 74 40 C75 47 75 53 74 59 C64 61 54 61 46 59 C45 51 45 45 46 40',
    'M46 70 C56 68 66 68 74 70 C75 77 75 83 74 88 C64 90 54 90 46 88 C45 81 45 75 46 70',
    'M28 100 C48 98 72 98 92 100',
  ],
  dots: [[68, 64, 2.6]],
  strokeWidth: 4.5,
};

export const PIGGY: DoodleSpec = {
  paths: [
    'M34 62 C30 44 48 32 64 34 C80 36 92 46 90 60 C88 74 74 82 58 80 C44 78 36 72 34 62',
    'M50 35 C48 29 54 25 58 29',
    'M90 54 C95 54 97 58 95 62 C93 65 89 65 87 63',
    'M46 80 L46 89',
    'M72 80 L72 89',
    'M55 33 L69 31',
    'M55 18 a7 7 0 1 0 14 0 a7 7 0 1 0 -14 0',
    'M34 60 C28 58 27 64 32 65',
  ],
  dots: [[76, 48, 2.2]],
  strokeWidth: 4.5,
};

export const PUZZLE: DoodleSpec = {
  paths: [
    'M38 46 C38 41 42 37 47 37 L55 36 C52 27 60 22 64 26 C68 22 76 27 73 36 L81 37 C86 37 90 41 90 46 L91 54 C99 51 104 60 99 64 C104 68 99 76 91 73 L90 81 C90 86 86 90 81 90 L47 90 C42 90 38 86 38 81 Z',
  ],
  strokeWidth: 4.5,
};

export const ARROW_DOWN: DoodleSpec = {
  viewBox: '0 0 40 90',
  paths: ['M20 8 C17 30 22 52 20 74', 'M11 62 C15 70 18 76 20 80 C22 75 26 69 30 62'],
  strokeWidth: 3.5,
};

export const IMPACT: DoodleSpec = {
  viewBox: '0 0 60 60',
  paths: ['M30 30 L46 14', 'M34 36 L54 32', 'M24 34 L12 48'],
  strokeWidth: 4,
};

export const SPEECH_PAIR: DoodleSpec = {
  paths: [
    'M22 34 C22 26 32 22 46 22 C60 22 70 26 70 34 C70 42 60 47 46 47 C40 47 36 46 33 45 L24 50 L27 42 C24 40 22 37 22 34',
    'M52 62 C52 54 62 50 76 50 C90 50 100 54 100 62 C100 70 90 75 76 75 C70 75 66 74 63 73 L54 78 L57 70 C54 68 52 65 52 62',
  ],
  strokeWidth: 4,
};

export const MOUNTAINS: DoodleSpec = {
  paths: [
    'M14 84 C26 66 38 48 48 34 C58 48 66 60 72 70',
    'M60 60 C68 50 76 40 84 32 C94 48 102 66 110 84',
    'M14 84 C44 88 82 88 110 84',
    'M40 42 C44 46 52 46 56 42',
  ],
  strokeWidth: 4,
};

export const ODD_ONE_OUT: DoodleSpec = {
  paths: [
    'M22 44 a10 10 0 1 0 20 0 a10 10 0 1 0 -20 0',
    'M52 44 a10 10 0 1 0 20 0 a10 10 0 1 0 -20 0',
    'M92 30 C95 40 99 44 108 46 C99 49 95 54 92 63 C89 54 85 49 76 46 C85 44 89 40 92 30',
    'M22 78 a10 10 0 1 0 20 0 a10 10 0 1 0 -20 0',
    'M52 78 a10 10 0 1 0 20 0 a10 10 0 1 0 -20 0',
  ],
  strokeWidth: 4,
};

export const DIVE_MASK: DoodleSpec = {
  paths: [
    'M24 46 C24 38 40 34 60 34 C80 34 96 38 96 46 C96 58 88 70 76 70 C68 70 64 64 60 60 C56 64 52 70 44 70 C32 70 24 58 24 46',
    'M24 44 C18 42 14 44 14 48',
    'M96 44 C102 42 106 44 106 48',
    'M60 70 C60 80 64 88 72 94',
  ],
  dots: [[72, 96, 3]],
  strokeWidth: 4,
};

export const TEMPLE: DoodleSpec = {
  paths: [
    'M16 44 C40 30 80 30 104 44',
    'M22 44 C22 56 22 68 22 80 M98 44 C98 56 98 68 98 80',
    'M14 82 C44 78 76 78 106 82',
    'M44 80 C44 66 52 58 60 58 C68 58 76 66 76 80',
    'M60 30 L60 20',
    'M50 96 C64 92 80 92 92 96',
  ],
  dots: [[60, 17, 3]],
  strokeWidth: 4,
};

export const SCARF: DoodleSpec = {
  paths: [
    'M34 24 C44 34 56 40 68 40 C80 40 90 34 98 26',
    'M34 24 C30 34 30 44 34 52 C46 60 62 62 76 58',
    'M98 26 C104 36 104 46 100 56 C92 62 82 64 76 58',
    'M40 54 C38 70 36 84 34 98 M56 60 C56 74 54 88 52 100',
    'M34 98 C40 100 46 100 52 100',
  ],
  strokeWidth: 4,
};

export const TREE: DoodleSpec = {
  paths: [
    'M60 96 C60 78 60 60 60 42',
    'M60 60 C50 52 42 44 38 34 M60 54 C70 46 78 40 84 32',
    'M38 34 C26 30 24 18 34 14 C40 6 54 8 58 16 C68 8 82 12 84 22 C94 24 94 36 84 38 C78 46 66 46 60 40 C54 44 44 42 38 34',
    'M46 98 C56 94 68 94 76 98',
  ],
  strokeWidth: 4,
};

export const CHURCH: DoodleSpec = {
  paths: [
    'M30 96 C30 70 34 46 42 26 C50 46 54 70 54 96',
    'M66 96 C66 68 70 44 78 24 C86 44 90 68 90 96',
    'M24 98 C48 94 74 94 96 98',
    'M42 62 C46 58 50 58 54 62 M78 60 C82 56 86 56 90 60',
  ],
  dots: [[42, 20, 2.6], [78, 18, 2.6]],
  strokeWidth: 4,
};

export const PAINTING: DoodleSpec = {
  paths: [
    'M22 24 C48 20 76 20 100 24 C103 46 103 70 100 92 C76 96 48 96 22 92 C19 70 19 46 22 24',
    'M34 76 C42 60 50 50 58 52 C66 54 70 68 78 72',
    'M44 42 a7 7 0 1 0 14 0 a7 7 0 1 0 -14 0',
  ],
  strokeWidth: 4,
};

export const BOOK: DoodleSpec = {
  paths: [
    'M60 34 C50 26 34 24 22 28 C20 48 20 70 22 88 C34 84 50 86 60 92',
    'M60 34 C70 26 86 24 98 28 C100 48 100 70 98 88 C86 84 70 86 60 92',
    'M60 34 L60 92',
  ],
  strokeWidth: 4,
};

export const FISH: DoodleSpec = {
  paths: [
    'M26 56 C38 40 62 38 78 48 C88 54 90 60 88 64 C78 76 50 78 34 68 C28 64 24 60 26 56',
    'M88 56 C96 48 102 44 106 42 C106 52 106 62 104 70 C98 68 92 62 88 62',
    'M40 50 C44 58 44 64 40 70',
  ],
  dots: [[40, 55, 2.6]],
  strokeWidth: 4,
};

export const HAIR: DoodleSpec = {
  paths: [
    'M40 62 C36 44 46 30 60 30 C74 30 84 44 80 62',
    'M40 62 C34 66 32 74 36 80 C42 86 52 86 60 84 C68 86 78 86 84 80 C88 74 86 66 80 62',
    'M46 30 C40 20 48 12 56 16 M72 32 C80 22 74 12 66 16',
    'M52 40 C48 34 42 36 44 42 M70 38 C76 32 82 36 78 44',
  ],
  dots: [[52, 62, 2.4], [68, 62, 2.4]],
  strokeWidth: 3.6,
};
