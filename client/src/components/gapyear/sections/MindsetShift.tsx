import { useLanguage } from '@/hooks/useLanguage';
import { getBilingualText } from '@/lib/utils';
import { shift } from '@/lib/gapyear/chapters';
import Slide from '../Slide';
import MoreVoice from '../MoreVoice';
import InkStamp from '../InkStamp';
import { ART } from '@/lib/gapyear/art';
import Reveal from '@/components/Reveal';
import { Doodle, UNDERLINE, HAMMER, SPARKLE, HEART, type DoodleSpec } from '../doodles';

const DIRECTION_ICONS: Record<string, DoodleSpec> = {
  事业: HAMMER,
  生活: SPARKLE,
  关系: HEART,
};

export default function MindsetShift() {
  const { language } = useLanguage();
  const t = (bt: { zh: string; en: string }) => getBilingualText(bt, language);

  return (
    <Slide variant="charcoal" id="gy-shift" className="gy-wide">
      <Reveal>
        <p className="gy-h text-xl md:text-2xl opacity-80">{t(shift.directionsLabel)}</p>
      </Reveal>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
        {shift.directions.map((d, i) => (
          <Reveal key={d.k.zh} delay={0.1 * i}>
            <div className="flex items-center gap-3">
              <Doodle {...DIRECTION_ICONS[d.k.zh]} className="w-10 md:w-12" delay={0.15 * i} />
              <p className="gy-h gy-accent text-lg md:text-xl">「{t(d.k)}」</p>
            </div>
            <p className="mt-1 text-base md:text-lg opacity-90">{t(d.v)}</p>
          </Reveal>
        ))}
      </div>

      <div className="mt-14 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1">
          <Reveal delay={0.15}>
            <h2 className="gy-h" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}>
              {t(shift.heading)}
            </h2>
            <p className="gy-h mt-3 text-xl md:text-3xl leading-snug">{t(shift.statement)}</p>
            <div className="gy-accent w-56 md:w-72 mt-2">
              <Doodle {...UNDERLINE} className="w-full" strokeWidth={5} />
            </div>
          </Reveal>
        </div>
        <div className="gy-accent flex-shrink-0">
          <InkStamp art={ART.hillclimb} className="w-64 md:w-96" delay={0.4} />
        </div>
      </div>

      <Reveal delay={0.3}>
        <p className="mt-10 text-lg md:text-xl leading-relaxed opacity-95">{t(shift.thesis)}</p>
        <MoreVoice label={shift.voiceLabel} paragraphs={shift.voice} />
      </Reveal>
    </Slide>
  );
}
