import { useLanguage } from '@/hooks/useLanguage';
import { getBilingualText } from '@/lib/utils';
import { toBeContinued } from '@/lib/gapyear/content';
import Slide from '../Slide';
import Reveal from '@/components/Reveal';
import {
  Doodle,
  OCTOPUS,
  WAVE,
  BUBBLES,
  SPARKLE,
  HEART,
  PENCIL,
  UNDERLINE,
  TICKS,
  type DoodleSpec,
} from '../doodles';

const ITEM_ICONS: Record<string, DoodleSpec> = {
  atolla: OCTOPUS,
  drawing: PENCIL,
  advisory: HEART,
};

export default function ToBeContinued() {
  const { language } = useLanguage();
  const t = (bt: { zh: string; en: string }) => getBilingualText(bt, language);

  return (
    <Slide variant="cream" id="gy-now">
      <div className="absolute top-10 right-4 md:right-10 w-12 md:w-16 gy-accent rotate-12">
        <Doodle {...SPARKLE} className="w-full" />
      </div>
      <div className="absolute top-24 left-2 md:left-8 w-10 md:w-14 gy-accent -rotate-12">
        <Doodle {...TICKS} className="w-full" delay={0.4} />
      </div>

      <Reveal>
        <h2 className="gy-h" style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)' }}>
          {t(toBeContinued.heading)}
        </h2>
        <p className="mt-4 text-base md:text-xl opacity-85">{t(toBeContinued.intro)}</p>
      </Reveal>

      <div className="mt-12 space-y-8">
        {toBeContinued.items.map((item, i) => (
          <Reveal key={item.key} delay={0.1 * i} className="flex items-center gap-5 md:gap-7">
            <Doodle {...ITEM_ICONS[item.key]} className="w-16 md:w-20 flex-shrink-0" delay={0.15 * i} />
            <p className="text-lg md:text-2xl leading-relaxed">{t(item.text)}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <p className="gy-hand mt-14 text-2xl md:text-3xl gy-accent">{t(toBeContinued.closing)}</p>
      </Reveal>

      {/* Ending: the octopus dives into the sea */}
      <Reveal delay={0.3} className="mt-16 text-center">
        <span className="gy-h inline-block" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}>
          {t(toBeContinued.ending)}
        </span>
        <div className="gy-accent w-48 md:w-64 mx-auto -mt-1">
          <Doodle {...UNDERLINE} className="w-full" strokeWidth={6} delay={0.5} />
        </div>
        <div className="mt-10 flex items-end justify-center gap-2">
          <Doodle {...BUBBLES} className="w-10 md:w-12 opacity-60" delay={1.2} />
          <div className="w-20 md:w-28 rotate-[135deg]">
            <Doodle {...OCTOPUS} className="w-full" delay={0.8} />
          </div>
        </div>
        <div className="gy-accent -mt-4 mx-auto w-64 md:w-96">
          <Doodle {...WAVE} className="w-full" strokeWidth={4} delay={1.4} />
        </div>
      </Reveal>
    </Slide>
  );
}
