import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { getBilingualText } from '@/lib/utils';
import { title } from '@/lib/gapyear/content';
import Slide from '../Slide';
import InkStamp from '../InkStamp';
import { ART } from '@/lib/gapyear/art';
import { Doodle, HAMMER, UNDERLINE, IMPACT, ARROW_DOWN } from '../doodles';

/** Timing: each title line lands like a whack, tool and sparks on impact. */
const HIT_ONE = 0.45;
const HIT_TWO = 1.15;

export default function TitleSlide() {
  const { language } = useLanguage();
  const reduce = useReducedMotion();
  const t = (bt: { zh: string; en: string }) => getBilingualText(bt, language);

  /** A title line swinging in from one side and settling on impact. */
  const swing = (from: number, at: number) =>
    reduce
      ? {}
      : {
          initial: { x: from, rotate: from > 0 ? 7 : -7, opacity: 0 },
          animate: { x: 0, rotate: 0, opacity: 1 },
          transition: { delay: at - 0.35, duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
        };

  /** Sparks and tool appear exactly when the line lands. */
  const onImpact = (at: number) =>
    reduce
      ? {}
      : {
          initial: { scale: 0, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          transition: { delay: at, duration: 0.25, ease: 'backOut' as const },
        };

  return (
    <Slide
      variant="charcoal"
      id="gy-top"
      className="gy-slide-hero"
      footer={
        <motion.div
        initial={reduce ? undefined : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 0.55 }}
        transition={{ delay: HIT_TWO + 2.5, duration: 0.8 }}
        className="flex flex-col items-center"
        >
        <span className="sr-only">{t(title.scrollHint)}</span>
        <motion.div
        className="gy-accent w-5 md:w-6"
        animate={reduce ? undefined : { y: [0, 7, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
        <Doodle {...ARROW_DOWN} className="w-full" delay={HIT_TWO + 2.6} />
        </motion.div>
        </motion.div>
      }
    >
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.65 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="gy-h text-base md:text-xl tracking-[0.2em]"
        >
          {t(title.kicker)}
        </motion.p>

        {/* 东一榔头 - lands to the east, hammer on the right */}
        <div className="relative mt-6 md:mt-8">
          <motion.h1
            className="gy-h leading-[1.05]"
            style={{ fontSize: 'clamp(2.7rem, 8.5vw, 5.8rem)' }}
            {...swing(-70, HIT_ONE)}
          >
            {t(title.lineOne)}
          </motion.h1>
          <motion.div
            className="absolute right-0 md:right-10 -top-8 md:-top-10 w-16 md:w-24 rotate-12"
            {...onImpact(HIT_ONE)}
          >
            <Doodle {...HAMMER} className="w-full" delay={HIT_ONE} duration={0.4} />
          </motion.div>
          <motion.div
            className="gy-accent absolute right-16 md:right-32 top-2 w-10 md:w-14"
            {...onImpact(HIT_ONE + 0.05)}
          >
            <Doodle {...IMPACT} className="w-full" delay={HIT_ONE} duration={0.25} />
          </motion.div>
        </div>

        {/* 西一棒槌 - lands to the west, 棒槌 on the left */}
        <div className="relative mt-1">
          <motion.h1
            className="gy-h leading-[1.05]"
            style={{ fontSize: 'clamp(2.7rem, 8.5vw, 5.8rem)' }}
            {...swing(70, HIT_TWO)}
          >
            {t(title.lineTwo)}
          </motion.h1>
          <motion.div
            className="absolute left-0 md:left-8 -top-4 w-10 md:w-16 -rotate-12"
            {...onImpact(HIT_TWO)}
          >
            <InkStamp art={ART.club} className="w-full" delay={HIT_TWO} />
          </motion.div>
          <motion.div
            className="gy-accent absolute left-14 md:left-28 top-1 w-10 md:w-14 scale-x-[-1]"
            {...onImpact(HIT_TWO + 0.05)}
          >
            <Doodle {...IMPACT} className="w-full" delay={HIT_TWO} duration={0.25} />
          </motion.div>
        </div>

        {/* 的 Gap Year */}
        <motion.div
          className="relative inline-block mt-4 px-2"
          initial={reduce ? undefined : { opacity: 0, y: 14 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: HIT_TWO + 0.3, duration: 0.5 }}
        >
          <span className="gy-h block" style={{ fontSize: 'clamp(1.7rem, 4.6vw, 3rem)' }}>
            {t(title.tail)}
          </span>
          <div className="gy-accent absolute left-0 right-0 -bottom-2">
            <Doodle {...UNDERLINE} className="w-full" strokeWidth={6} delay={HIT_TWO + 0.6} />
          </div>
        </motion.div>

        {/* The drawing carries the thesis; the line below is its caption */}
        <div className="mt-10 md:mt-14 flex items-center justify-center gap-4 md:gap-10">
          <InkStamp art={ART.scribble} className="w-32 md:w-52" delay={HIT_TWO + 0.9} />
          <div className="gy-accent w-16 md:w-28">
            <InkStamp art={ART.arrow} className="w-full" delay={HIT_TWO + 1.3} />
          </div>
          <InkStamp art={ART.octopus} className="w-28 md:w-44" delay={HIT_TWO + 1.6} />
        </div>

        <motion.p
          initial={reduce ? undefined : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 0.92 }}
          transition={{ delay: HIT_TWO + 2, duration: 0.8 }}
          className="gy-hand mt-7 mx-auto max-w-3xl leading-snug"
          style={{ fontSize: 'clamp(1.2rem, 2.9vw, 1.75rem)' }}
        >
          {t(title.sub)}
        </motion.p>

      </div>
    </Slide>
  );
}
