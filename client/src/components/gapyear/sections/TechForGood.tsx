import { useLanguage } from '@/hooks/useLanguage';
import { getBilingualText } from '@/lib/utils';
import { good } from '@/lib/gapyear/chapters';
import Slide from '../Slide';
import MoreVoice from '../MoreVoice';
import Reveal from '@/components/Reveal';
import {
  Doodle,
  HEART,
  UNDERLINE_DASHED,
  SIGNPOST,
  PENCIL,
  HOURGLASS,
  type DoodleSpec,
} from '../doodles';

/** One sketch per column, so the block reads as a card, not a text list */
const ICONS: Record<string, DoodleSpec> = {
  start: SIGNPOST,
  observe: PENCIL,
  position: HOURGLASS,
};

export default function TechForGood() {
  const { language } = useLanguage();
  const t = (bt: { zh: string; en: string }) => getBilingualText(bt, language);

  return (
    <Slide variant="cream" id="gy-good" className="gy-wide" tag={t({ zh: '事业', en: 'work' })}>
      <div className="absolute bottom-16 right-6 md:right-14 w-10 md:w-14 gy-accent -rotate-6">
        <Doodle {...HEART} className="w-full" />
      </div>
      <Reveal>
        <h2 className="gy-h" style={{ fontSize: 'clamp(2rem, 5.5vw, 3.6rem)' }}>
          {t(good.heading)}
        </h2>
        <div className="gy-accent w-64 md:w-80 -mt-1">
          <Doodle {...UNDERLINE_DASHED} className="w-full" strokeWidth={5} />
        </div>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {good.blocks.map((block, i) => (
          <Reveal key={block.key} delay={0.12 * i}>
            {ICONS[block.key] && (
              <div className="gy-accent w-10 md:w-12 mb-2">
                <Doodle {...ICONS[block.key]} className="w-full" delay={0.12 * i} />
              </div>
            )}
            <h3 className="gy-h text-xl md:text-2xl">{t(block.title)}</h3>
            {'lead' in block && block.lead && (
              <p className="gy-h gy-accent mt-2 text-lg md:text-xl">{t(block.lead)}</p>
            )}
            <ul className="mt-3 space-y-2">
              {block.bullets.map((b) => (
                <li key={b.zh} className="flex gap-2 text-base md:text-lg leading-relaxed opacity-90">
                  <span className="gy-accent flex-shrink-0" aria-hidden="true">·</span>
                  <span>{t(b)}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.25}>
        <MoreVoice label={good.voiceLabel} paragraphs={good.voice} />
      </Reveal>
    </Slide>
  );
}
