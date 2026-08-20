import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { getBilingualText } from "@/lib/utils";
import type { BilingualText } from "@/lib/types";
import PuzzleBoard, {
  type PuzzlePieceData,
  type PuzzleLink,
} from "./PuzzleBoard";
import Reveal from "@/components/Reveal";
import WipStamp from "./WipStamp";
import PhotoSpread from "./PhotoSpread";
import { Doodle, UNDERLINE_DASHED, type DoodleSpec } from "./doodles";

/** One visual note: a sketch (or photo) with a single line under it. */
export interface StudyNote {
  id: string;
  art: string;
  /** Optional - the prose block can carry the words instead */
  caption?: BilingualText;
  /** Notes sharing a group land in the same spread */
  group?: BilingualText;
}

export interface StudyPiece {
  key: string;
  title: BilingualText;
  /** Short form for the narrow mobile strip, where the full title would wrap */
  shortTitle?: BilingualText;
  hook?: BilingualText;
  /** The thin version of the story - flat status updates, no pictures */
  chipsLabel?: BilingualText;
  chips?: readonly BilingualText[];
  /** Label above the picture cards */
  notesLabel?: BilingualText;
  notes: readonly StudyNote[];
  /** Free-standing text, all visible at once - not tied to any one photo */
  prose?: readonly BilingualText[];
  /** Short scannable moments, rendered as a hand-written list */
  list?: { label?: BilingualText; items: readonly BilingualText[] };
  /** Punchline lines, rendered after the photo spread */
  closing?: readonly BilingualText[];
  /** Written up later - the panel shows a 施工中 stamp instead of cards */
  wip?: boolean;
}

/** Consecutive notes with the same group label become one pile. */
function groupNotes(notes: readonly StudyNote[]) {
  const groups: { label?: BilingualText; notes: StudyNote[] }[] = [];
  for (const n of notes) {
    const last = groups[groups.length - 1];
    if (last && last.label?.zh === n.group?.zh) last.notes.push(n);
    else groups.push({ label: n.group, notes: [n] });
  }
  return groups;
}

interface StudyBoardProps {
  heading: BilingualText;
  sub: BilingualText;
  intro?: BilingualText;
  prompt: BilingualText;
  pieces: readonly StudyPiece[];
  /** Doodle per piece key (board face) and per note art key (cards) */
  icons?: Record<string, DoodleSpec>;
  art?: Record<string, DoodleSpec>;
  photos?: Record<string, string>;
  cols?: number;
  rows?: number;
  link?: { from: string; to: string; label: BilingualText };
  /** Board on the left (default) or right, so the pair of studies mirrors */
  boardSide?: "left" | "right";
}

/** A comparative study: places cut into a jigsaw board, one reader panel
 * beside it. Picking a piece swaps the story without moving the board. */
export default function StudyBoard({
  heading,
  sub,
  intro,
  prompt,
  pieces,
  icons = {},
  art = {},
  photos = {},
  cols = 2,
  rows = 2,
  link,
  boardSide = "left",
}: StudyBoardProps) {
  const { language } = useLanguage();
  const t = (bt: BilingualText) => getBilingualText(bt, language);
  // First piece starts open so the click-to-swap mechanic is visible on arrival
  const [selected, setSelected] = useState<string | null>(pieces[0]?.key ?? null);
  const [touched, setTouched] = useState(false);
  const [narrow, setNarrow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const sync = () => setNarrow(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  const boardPieces: PuzzlePieceData[] = pieces.map((p) => ({
    key: p.key,
    label: t(p.title),
    shortLabel: p.shortTitle ? t(p.shortTitle) : undefined,
    icon: icons[p.key],
    photo: photos[p.key],
  }));
  const open = pieces.find((p) => p.key === selected);

  return (
    <>
      <Reveal>
        <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
          <h2
            className="gy-h"
            style={{ fontSize: "clamp(2rem, 5.5vw, 3.6rem)" }}
          >
            {t(heading)}
          </h2>
          <p className="gy-h text-lg md:text-2xl opacity-90">{t(sub)}</p>
        </div>
        <div className="gy-accent w-56 md:w-72 mt-1">
          <Doodle {...UNDERLINE_DASHED} className="w-full" strokeWidth={5} />
        </div>
        {intro && (
          <p className="mt-4 text-base md:text-xl leading-relaxed opacity-90 max-w-2xl">{t(intro)}</p>
        )}
      </Reveal>

      <div
        className={`mt-9 md:mt-11 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-9 md:gap-12 items-center ${
          boardSide === "right" ? "md:[direction:rtl]" : ""
        }`}
      >
        <Reveal className={boardSide === "right" ? "md:[direction:ltr]" : ""}>
          <div className="relative">
            {!touched && (
              <span className="gy-board-hint gy-h" aria-hidden="true">
                {t(prompt)} ➤
              </span>
            )}
            <PuzzleBoard
              pieces={boardPieces}
              selected={selected}
              onSelect={(k) => {
                setTouched(true);
                setSelected(k);
              }}
              cols={narrow ? pieces.length : cols}
              rows={narrow ? 1 : rows}
              link={
                link
                  ? ({ from: link.from, to: link.to, label: t(link.label) } as PuzzleLink)
                  : undefined
              }
            />
          </div>
        </Reveal>

        <div
          className={`min-h-[14rem] md:min-h-[18rem] flex flex-col justify-center ${
            boardSide === "right" ? "md:[direction:ltr]" : ""
          }`}
        >
          {open ? (
            <motion.div
              key={open.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28 }}
            >
              <h3 className="gy-h text-2xl md:text-3xl">{t(open.title)}</h3>
              {open.hook && (
                <p className="gy-hand text-xl md:text-2xl mt-1 opacity-95">
                  {t(open.hook)}
                </p>
              )}
              {open.chips && open.chips.length > 0 && (
                <div className="mt-4 flex flex-wrap items-center gap-x-1.5 md:gap-x-2 gap-y-2">
                  {open.chipsLabel && (
                    <span className="gy-h text-sm md:text-base opacity-55 whitespace-nowrap">
                      {t(open.chipsLabel)}
                    </span>
                  )}
                  {open.chips.map((c, i) => (
                    <span key={i} className="gy-chip">
                      {t(c)}
                    </span>
                  ))}
                </div>
              )}
              {open.prose && open.prose.length > 0 && (
                <div className="mt-5 space-y-2 max-w-xl">
                  {open.prose.map((line, i) => (
                    <p key={i} className="leading-relaxed text-base md:text-lg opacity-92">
                      {t(line)}
                    </p>
                  ))}
                </div>
              )}
              {open.list && (
                <p className="mt-3 gy-hand text-lg md:text-xl leading-snug max-w-xl">
                  {open.list.label && (
                    <span className="gy-h text-sm md:text-base opacity-55 mr-2">
                      {t(open.list.label)}
                    </span>
                  )}
                  {open.list.items.map((item, i) => (
                    <span key={i}>
                      {i > 0 && (
                        <span className="gy-accent mx-1.5" aria-hidden="true">
                          ·
                        </span>
                      )}
                      {t(item)}
                    </span>
                  ))}
                </p>
              )}
              {open.wip && (
                <div className="mt-5">
                  <WipStamp />
                </div>
              )}
              <div className="mt-4 flex flex-wrap gap-x-8 gap-y-6">
                {groupNotes(open.notes).map((g, i) => (
                  <PhotoSpread
                    key={i}
                    notes={g.notes}
                    photos={photos}
                    art={art}
                    label={g.label ? t(g.label) : undefined}
                  />
                ))}
              </div>
              {open.closing && open.closing.length > 0 && (
                <div className="mt-5 space-y-1 max-w-xl">
                  {open.closing.map((line, i) => (
                    <p key={i} className="gy-hand text-xl md:text-2xl leading-snug opacity-95">
                      {t(line)}
                    </p>
                  ))}
                </div>
              )}
            </motion.div>
          ) : null}
        </div>
      </div>
    </>
  );
}
