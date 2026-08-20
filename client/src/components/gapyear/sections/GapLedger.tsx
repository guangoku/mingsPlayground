import { useLanguage } from '@/hooks/useLanguage';
import { getBilingualText } from '@/lib/utils';
import { ledger } from '@/lib/gapyear/chapters';
import Slide from '../Slide';
import WipStamp from '../WipStamp';
import Reveal from '@/components/Reveal';
import { Doodle, PIGGY, UNDERLINE_DASHED } from '../doodles';

/** Placeholder skeleton - real numbers and design pass to come. */
export default function GapLedger() {
  const { language } = useLanguage();
  const t = (bt: { zh: string; en: string }) => getBilingualText(bt, language);

  return (
    <Slide variant="cream" id="gy-ledger" className="gy-wide">
      <Reveal>
        <div className="flex flex-wrap items-center gap-4">
          <h2 className="gy-h" style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)' }}>
            {t(ledger.heading)}
          </h2>
          <WipStamp />
        </div>
        <div className="gy-accent w-56 md:w-72 mt-1">
          <Doodle {...UNDERLINE_DASHED} className="w-full" strokeWidth={5} />
        </div>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        <Reveal delay={0.1}>
          <div className="flex items-center gap-3">
            <Doodle {...PIGGY} className="w-14" />
            <h3 className="gy-h gy-accent text-2xl md:text-3xl">{t(ledger.costTitle)}</h3>
          </div>
          <ul className="mt-4 space-y-3">
            {ledger.costs.map((c) => (
              <li key={c.zh} className="flex gap-2 text-base md:text-lg leading-relaxed opacity-90">
                <span className="gy-accent flex-shrink-0" aria-hidden="true">·</span>
                <span>{t(c)}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.2}>
          <h3 className="gy-h gy-accent text-2xl md:text-3xl md:mt-1">{t(ledger.challengeTitle)}</h3>
          <ul className="mt-4 space-y-3">
            {ledger.challenges.map((c) => (
              <li key={c.zh} className="flex gap-2 text-base md:text-lg leading-relaxed opacity-90">
                <span className="gy-accent flex-shrink-0" aria-hidden="true">·</span>
                <span>{t(c)}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal delay={0.3}>
        <p className="gy-hand gy-accent mt-10 text-xl md:text-2xl">{t(ledger.note)}</p>
      </Reveal>
    </Slide>
  );
}
