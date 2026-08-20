import { useLanguage } from '@/hooks/useLanguage';
import { getBilingualText } from '@/lib/utils';
import { coliving } from '@/lib/gapyear/chapters';
import Slide from '../Slide';
import Reveal from '@/components/Reveal';
import { Doodle, UNDERLINE_DASHED, SUPPORT } from '../doodles';

/** Placeholder layout - gets its own design pass (three-community comparison). */
export default function CoLiving() {
  const { language } = useLanguage();
  const t = (bt: { zh: string; en: string }) => getBilingualText(bt, language);

  return (
    <Slide variant="cream" id="gy-coliving" tag={t({ zh: '生活', en: 'life' })}>
      <Reveal>
        <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
          <h2 className="gy-h" style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)' }}>
            {t(coliving.heading)}
          </h2>
          <p className="gy-h text-xl md:text-2xl opacity-85">{t(coliving.sub)}</p>
        </div>
        <div className="gy-accent w-56 md:w-72 mt-1">
          <Doodle {...UNDERLINE_DASHED} className="w-full" strokeWidth={5} />
        </div>
      </Reveal>

      <div className="mt-10 flex flex-col md:flex-row items-start gap-8 md:gap-12">
        <div className="flex-1 space-y-4">
          {coliving.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.1 * i}>
              <p className="leading-relaxed text-base md:text-xl opacity-95">{t(p)}</p>
            </Reveal>
          ))}
          <Reveal delay={0.25}>
            <p className="gy-hand gy-accent text-xl md:text-2xl pt-2">{t(coliving.note)}</p>
          </Reveal>
        </div>
        <Reveal delay={0.2} className="flex-shrink-0 mx-auto">
          <Doodle {...SUPPORT} className="w-28 md:w-36" delay={0.3} />
        </Reveal>
      </div>
    </Slide>
  );
}
