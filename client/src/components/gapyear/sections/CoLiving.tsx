import { useLanguage } from '@/hooks/useLanguage';
import { getBilingualText } from '@/lib/utils';
import { coliving } from '@/lib/gapyear/chapters';
import Slide from '../Slide';
import Reveal from '@/components/Reveal';
import WipStamp from '../WipStamp';
import { Doodle, UNDERLINE_DASHED, SUPPORT } from '../doodles';

/** Unpublished for now: the four places, and nothing else. The write-up
 * (and the fuller comparison piece) is still being drafted. */
export default function CoLiving() {
  const { language } = useLanguage();
  const t = (bt: { zh: string; en: string }) => getBilingualText(bt, language);

  return (
    <Slide variant="cream" id="gy-coliving" tag={t({ zh: '生活', en: 'life' })}>
      <Reveal>
        <div className="flex flex-wrap items-center gap-4">
          <h2 className="gy-h" style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)' }}>
            {t(coliving.heading)}
          </h2>
          <WipStamp />
        </div>
        <div className="gy-accent w-56 md:w-72 mt-1">
          <Doodle {...UNDERLINE_DASHED} className="w-full" strokeWidth={5} />
        </div>
      </Reveal>

      <div className="mt-10 flex flex-col md:flex-row items-start gap-8 md:gap-12">
        <div className="flex-1">
          <div className="flex flex-wrap gap-3">
            {coliving.places.map((place, i) => (
              <Reveal key={place.zh} delay={0.08 * i}>
                <span className="gy-box inline-block px-5 py-3 gy-h text-xl md:text-2xl opacity-80">
                  {t(place)}
                </span>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.35}>
            <p className="gy-hand gy-accent text-xl md:text-2xl mt-8">{t(coliving.note)}</p>
          </Reveal>
        </div>
        <Reveal delay={0.2} className="flex-shrink-0 mx-auto">
          <Doodle {...SUPPORT} className="w-28 md:w-36" delay={0.3} />
        </Reveal>
      </div>
    </Slide>
  );
}
