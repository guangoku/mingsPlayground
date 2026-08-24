import { useLanguage } from '@/hooks/useLanguage';
import { getBilingualText } from '@/lib/utils';
import { startup } from '@/lib/gapyear/chapters';
import Slide from '../Slide';
import WipStamp from '../WipStamp';
import Reveal from '@/components/Reveal';
import { Doodle, UNDERLINE_DASHED } from '../doodles';

/** Placeholder - content and design pass to come. */
export default function StartupLab() {
  const { language } = useLanguage();
  const t = (bt: { zh: string; en: string }) => getBilingualText(bt, language);

  return (
    <Slide variant="charcoal" id="gy-startup" className="gy-wide" tag={t({ zh: '事业', en: 'work' })}>
      <Reveal>
        <div className="flex flex-wrap items-center gap-4">
          <h2 className="gy-h" style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)' }}>
            {t(startup.heading)}
          </h2>
          <WipStamp />
        </div>
        <div className="gy-accent w-56 md:w-72 mt-1">
          <Doodle {...UNDERLINE_DASHED} className="w-full" strokeWidth={5} />
        </div>
      </Reveal>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {startup.entries.map((e, i) => (
          <Reveal key={e.zh} delay={0.1 * i}>
            <div className="gy-box px-5 py-6 text-center opacity-70">
              <p className="gy-h text-xl md:text-2xl">{t(e)}</p>
              <p className="mt-2 text-sm opacity-70">⋯⋯</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.25}>
        <p className="gy-hand gy-accent mt-8 text-xl md:text-2xl">{t(startup.note)}</p>
      </Reveal>
    </Slide>
  );
}
