import { motion, useReducedMotion } from 'framer-motion';
import { Doodle, type DoodleSpec } from './doodles';

/** Edge kinds: 1 = tab sticking out, -1 = blank cut in, 0 = flat border. */
type Edge = 1 | -1 | 0;
const K = 17; // knob depth

/** Hand-cut jigsaw outline for a 100x100 piece. */
function piecePath([top, right, bottom, left]: [Edge, Edge, Edge, Edge]): string {
  const t = (e: Edge) => (e === 0 ? 'L 65 0' : `L 35 0 C 30 ${-K * e} 70 ${-K * e} 65 0`);
  const r = (e: Edge) => (e === 0 ? 'L 100 65' : `L 100 35 C ${100 + K * e} 30 ${100 + K * e} 70 100 65`);
  const b = (e: Edge) => (e === 0 ? 'L 35 100' : `L 65 100 C 70 ${100 + K * e} 30 ${100 + K * e} 35 100`);
  const l = (e: Edge) => (e === 0 ? 'L 0 35' : `L 0 65 C ${-K * e} 70 ${-K * e} 30 0 35`);
  return `M 0 0 ${t(top)} L 100 0 ${r(right)} L 100 100 ${b(bottom)} L 0 100 ${l(left)} Z`;
}

/** Tabs and blanks for a cols x rows board, so every seam locks. */
function gridEdges(cols: number, rows: number): [Edge, Edge, Edge, Edge][] {
  const out: [Edge, Edge, Edge, Edge][] = [];
  const seam = (r: number, c: number): Edge => ((r + c) % 2 === 0 ? 1 : -1);
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      out.push([
        r === 0 ? 0 : ((-seam(r - 1, c)) as Edge),
        c === cols - 1 ? 0 : seam(r, c),
        r === rows - 1 ? 0 : seam(r, c),
        c === 0 ? 0 : ((-seam(r, c - 1)) as Edge),
      ]);
    }
  }
  return out;
}

export interface PuzzlePieceData {
  key: string;
  label: string;
  /** Used instead of label when the board collapses to a narrow strip */
  shortLabel?: string;
  icon?: DoodleSpec;
  /** Photo filling the piece; muted until the piece is picked */
  photo?: string;
}

export interface PuzzleLink {
  from: string;
  to: string;
  label: string;
}

interface PuzzleBoardProps {
  pieces: PuzzlePieceData[];
  selected: string | null;
  onSelect: (key: string) => void;
  cols?: number;
  rows?: number;
  /** A thread drawn between two pieces that share something */
  link?: PuzzleLink;
}

/** Places cut as jigsaw pieces and assembled into one board.
 * Picking a piece lifts it, brings its photo to life, and opens its story. */
export default function PuzzleBoard({
  pieces,
  selected,
  onSelect,
  cols = 2,
  rows = 2,
  link,
}: PuzzleBoardProps) {
  const reduce = useReducedMotion();
  const edges = gridEdges(cols, rows);
  const strip = rows === 1;

  const centre = (key: string) => {
    const i = pieces.findIndex((p) => p.key === key);
    if (i < 0) return null;
    return {
      x: ((i % cols) + 0.5) * (100 / cols),
      y: (Math.floor(i / cols) + 0.5) * (100 / rows),
    };
  };
  const a = link ? centre(link.from) : null;
  const b = link ? centre(link.to) : null;

  return (
    <div className={`gy-board ${strip ? 'gy-board-strip' : ''}`} style={{ aspectRatio: `${cols} / ${rows}` }}>
      {link && a && b && (
        <svg className="gy-board-link" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <path
            d={`M ${a.x} ${a.y} Q ${(a.x + b.x) / 2} ${(a.y + b.y) / 2 - 9} ${b.x} ${b.y}`}
            fill="none"
            stroke="#c7502a"
            strokeWidth={0.9}
            strokeDasharray="2.4 2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      )}
      {link && a && b && (
        <span
          className="gy-board-link-label gy-h"
          style={{ left: `${(a.x + b.x) / 2}%`, top: `${(a.y + b.y) / 2 - 7}%` }}
        >
          {link.label}
        </span>
      )}
      {pieces.slice(0, cols * rows).map((p, i) => {
        const isOn = selected === p.key;
        const col = i % cols;
        const row = Math.floor(i / cols);
        const d = piecePath(edges[i]);
        return (
          <motion.button
            key={p.key}
            type="button"
            onClick={() => onSelect(p.key)}
            className={`gy-piece ${isOn ? 'gy-piece-on' : ''}`}
            style={{
              left: `${(col * 100) / cols}%`,
              top: `${(row * 100) / rows}%`,
              width: `${100 / cols}%`,
              height: `${100 / rows}%`,
            }}
            aria-pressed={isOn}
            animate={reduce ? undefined : { scale: isOn ? 1.06 : 1, zIndex: isOn ? 5 : 1 }}
            whileHover={reduce ? undefined : { scale: isOn ? 1.06 : 1.03 }}
            transition={{ duration: 0.25 }}
          >
            <svg viewBox="-22 -22 144 144" className="gy-piece-svg" aria-hidden="true">
              {p.photo && (
                <>
                  <defs>
                    <clipPath id={`gy-clip-${p.key}`}>
                      <path d={d} />
                    </clipPath>
                  </defs>
                  <image
                    href={p.photo}
                    x={-22}
                    y={-22}
                    width={144}
                    height={144}
                    preserveAspectRatio="xMidYMid slice"
                    clipPath={`url(#gy-clip-${p.key})`}
                    className="gy-piece-photo"
                  />
                </>
              )}
              <path
                d={d}
                fill={p.photo ? 'none' : isOn ? 'var(--gy-cream)' : 'transparent'}
                stroke="currentColor"
                strokeWidth={3.4}
                strokeLinejoin="round"
              />
            </svg>
            <span className={`gy-piece-face ${isOn && !p.photo ? 'gy-piece-face-on' : ''}`}>
              {p.icon && !p.photo && !strip && <Doodle {...p.icon} className="w-12 md:w-16" delay={0.08 * i} />}
              <span className={`gy-h mt-1 ${strip ? 'text-xs leading-tight px-1 text-center' : 'text-base md:text-xl'} ${p.photo ? 'gy-piece-caption' : ''}`}>
                {strip ? p.shortLabel ?? p.label : p.label}
              </span>
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
