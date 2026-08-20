import { useLanguage } from '@/hooks/useLanguage';
import { getBilingualText } from '@/lib/utils';
import { whyStop } from '@/lib/gapyear/content';
import Slide from '../Slide';
import MoreVoice from '../MoreVoice';
import Reveal from '@/components/Reveal';
import {
  Doodle,
  DOLLAR_DOWN,
  LEDGER,
  ROBOT_LOOP,
  AI_CHIP,
  SIGNPOST,
  SITTER,
  HOURGLASS,
  UNDERLINE_DASHED,
  type DoodleSpec,
} from '../doodles';

const ICONS = {
  industry: DOLLAR_DOWN,
  intensity: LEDGER,
  repetition: ROBOT_LOOP,
  position: AI_CHIP,
  values: SIGNPOST,
  lifeloop: SITTER,
  window: HOURGLASS,
} as const;

export default function WhyStop() {
  const { language } = useLanguage();
  const t = (bt: { zh: string; en: string }) => getBilingualText(bt, language);

  return (
    <Slide variant="charcoal" id="gy-why" className="gy-wide">
      <Reveal>
        <h2 className="gy-h" style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)' }}>
          {t(whyStop.heading)}
        </h2>
        <div className="gy-accent w-56 md:w-72 -mt-1">
          <Doodle {...UNDERLINE_DASHED} className="w-full" strokeWidth={5} />
        </div>
        <p className="mt-6 text-base md:text-xl opacity-85">{t(whyStop.intro)}</p>
      </Reveal>

      <div className="mt-10 flex flex-col gap-8 md:gap-10">
        {whyStop.groups.map((group, gi) => (
          <div key={group.key} className="gy-why-group">
            <span className="gy-why-group-label gy-h">{t(group.label)}</span>
            <div className="flex flex-wrap gap-x-8 gap-y-8 md:gap-x-12">
              {group.items.map((item, i) => (
                <Reveal
                  key={item.key}
                  delay={0.08 * (gi * 3 + i)}
                  className="flex flex-col items-center text-center gap-2 w-24 md:w-32"
                >
                  <Doodle
                    {...(ICONS[item.key] as DoodleSpec)}
                    className="w-16 md:w-20"
                    delay={0.1 * (gi * 3 + i)}
                  />
                  <span className="gy-h gy-accent text-base md:text-lg leading-snug">
                    {t(item.label)}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Reveal delay={0.2}>
        <MoreVoice label={whyStop.voiceLabel} paragraphs={whyStop.voice} />
      </Reveal>
    </Slide>
  );
}
