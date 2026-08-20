import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { getBilingualText } from '@/lib/utils';
import { actLabels, type ActKey, type TocEntry } from '@/lib/gapyear/content';

const X = 28;

/** Swing width per act: nervous wobble before, wide whacks on the road,
 * nearly straight after - the line itself tells the three phases. */
const ACT_AMP: Record<string, number> = { prologue: 8, before: 10, during: 19, after: 4 };

interface RailItem {
  kind: 'knot' | 'divider';
  y: number;
  amp: number;
  entry?: TocEntry;
  anchorIdx?: number;
  act?: ActKey;
}

function buildItems(anchors: readonly TocEntry[], startY: number, endY: number): RailItem[] {
  const items: Omit<RailItem, 'y'>[] = [];
  let prevAct: ActKey | undefined;
  anchors.forEach((a, i) => {
    if (a.act && a.act !== prevAct) {
      items.push({ kind: 'divider', act: a.act, amp: ACT_AMP[a.act] });
      prevAct = a.act;
    }
    items.push({ kind: 'knot', entry: a, anchorIdx: i, amp: ACT_AMP[a.act ?? 'prologue'] });
  });
  const step = (endY - startY) / Math.max(1, items.length - 1);
  // Tighter rails (short viewports) get gentler swings
  const ampScale = Math.min(1, step / 40);
  return items.map((it, i) => ({ ...it, y: Math.round(startY + i * step), amp: it.amp * ampScale }));
}

function makeRailPath(items: RailItem[]): string {
  let d =
    'M 30 44 C 48 32 54 66 34 68 C 16 70 14 42 34 46 C 48 49 44 74 28 70 C 20 68 22 56 28 54';
  let y = 70;
  let dir = 1;
  for (const it of items) {
    if (it.y <= y) continue;
    d += ` C ${X + dir * it.amp} ${Math.round(y + (it.y - y) * 0.35)} ${X + dir * it.amp} ${Math.round(
      y + (it.y - y) * 0.7,
    )} ${X} ${it.y}`;
    dir = -dir;
    y = it.y;
  }
  return d;
}

export default function RedThread({ anchors }: { anchors: readonly TocEntry[] }) {
  const reduce = useReducedMotion();
  const { language } = useLanguage();
  const progressRef = useRef<SVGPathElement>(null);
  const [vh, setVh] = useState(0);
  const [tops, setTops] = useState<number[]>([]);
  const [len, setLen] = useState(0);
  const [active, setActive] = useState(0);
  /** lg+ shows every label permanently; below that the rail stays silent */
  const [wide, setWide] = useState(false);
  /** touch-to-peek state for narrow screens */
  const [peek, setPeek] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const sync = () => setWide(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  // Peek closes on scroll or on a tap anywhere off the rail
  useEffect(() => {
    if (!peek) return;
    const close = () => setPeek(false);
    const offRail = (e: PointerEvent) => {
      if (!(e.target as Element)?.closest('.gy-rail')) close();
    };
    window.addEventListener('scroll', close, { passive: true });
    window.addEventListener('pointerdown', offRail);
    return () => {
      window.removeEventListener('scroll', close);
      window.removeEventListener('pointerdown', offRail);
    };
  }, [peek]);

  useEffect(() => {
    const measure = () => {
      setVh(window.innerHeight);
      setTops(anchors.map((a) => document.getElementById(a.id)?.offsetTop ?? 0));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [anchors]);

  const startY = 96;
  const endY = Math.max(startY + (anchors.length + 3) * 22, vh - 44);
  const items = vh ? buildItems(anchors, startY, endY) : [];
  const d = items.length ? makeRailPath(items) : '';

  useEffect(() => {
    if (progressRef.current && d) setLen(progressRef.current.getTotalLength());
  }, [d]);

  useEffect(() => {
    const el = progressRef.current;
    if (!el || !tops.length) return;
    const onScroll = () => {
      const yRef = window.scrollY + window.innerHeight * 0.45;
      let idx = 0;
      tops.forEach((top, i) => {
        if (top <= yRef) idx = i;
      });
      setActive(idx);
      if (len) {
        const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        const p = Math.min(1, Math.max(0, window.scrollY / scrollable));
        el.style.strokeDashoffset = String(len * (1 - (0.08 + 0.92 * p)));
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [len, tops]);

  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  };

  // Narrow screens: the first tap reveals the contents, the next one navigates
  const onNodeClick = (id: string) => {
    if (!wide && !peek) {
      setPeek(true);
      return;
    }
    setPeek(false);
    jump(id);
  };

  if (!vh) return null;

  return (
    <div className={`gy-rail ${peek ? 'gy-rail-peek' : ''}`} style={{ height: vh }}>
      {/* Touch strip: tapping the bare rail reveals the contents on narrow screens */}
      {!wide && (
        <button
          type="button"
          className="gy-rail-peek-strip"
          aria-label={language === 'zh' ? '显示目录' : 'Show contents'}
          aria-expanded={peek}
          onPointerDown={() => setPeek(true)}
        />
      )}
      <svg width="64" height={vh} viewBox={`0 0 64 ${vh}`} aria-hidden="true" className="gy-rail-svg">
        <path d={d} stroke="#f3eeda" strokeWidth={5.5} fill="none" strokeLinecap="round" opacity={0.9} />
        <path d={d} stroke="#c7502a" strokeWidth={2.2} fill="none" strokeLinecap="round" opacity={0.3} />
        <path
          ref={progressRef}
          d={d}
          stroke="#c7502a"
          strokeWidth={2.2}
          fill="none"
          strokeLinecap="round"
          style={len ? { strokeDasharray: len, strokeDashoffset: len * 0.92 } : undefined}
        />
      </svg>
      <nav aria-label={language === 'zh' ? '目录' : 'Table of contents'}>
        {items.map((it) => {
          if (it.kind === 'divider') {
            return (
              <span key={`div-${it.act}`} className="gy-rail-divider gy-h" style={{ top: it.y }}>
                {getBilingualText(actLabels[it.act!], language)}
              </span>
            );
          }
          const a = it.entry!;
          const i = it.anchorIdx!;
          return (
            <button
              key={a.key}
              type="button"
              onClick={() => onNodeClick(a.id)}
              className="gy-rail-node group"
              style={{ top: it.y }}
              aria-label={getBilingualText(a.label, language)}
              aria-current={active === i ? 'true' : undefined}
            >
              <svg viewBox="0 0 24 24" width={a.wip ? 15 : 18} height={a.wip ? 15 : 18} aria-hidden="true">
                <path
                  d="M12 3.5 C18 2.5 21 7 20 12 C19 17.5 15 21 10.5 20 C6 19 3 15 4 10 C5 5.5 8 4 12 3.5"
                  fill={a.wip ? 'var(--gy-charcoal)' : 'var(--gy-cream)'}
                  stroke="#c7502a"
                  strokeWidth={2.4}
                  strokeDasharray={a.wip ? '3 3' : undefined}
                />
                {active === i && <circle cx="12" cy="12" r="4.5" fill="#c7502a" />}
              </svg>
              <span
                className={`gy-rail-label gy-h ${a.wip ? 'gy-rail-label-wip' : ''} ${
                  active === i ? 'gy-rail-label-active' : 'gy-rail-label-idle'
                }`}
              >
                {getBilingualText(a.label, language)}
                {a.wip && <span className="opacity-70"> · {language === 'zh' ? '施工中' : 'wip'}</span>}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
