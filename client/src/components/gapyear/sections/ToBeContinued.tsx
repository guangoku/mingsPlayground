import { useLanguage } from '@/hooks/useLanguage';
import { getBilingualText } from '@/lib/utils';
import { toBeContinued } from '@/lib/gapyear/content';
import onTheRoadCover from '@assets/gapyear/on-the-road-1957.webp';
import Slide from '../Slide';
import Reveal from '@/components/Reveal';
import WipStamp from '../WipStamp';
import { Doodle, UNDERLINE_DASHED } from '../doodles';

/** The closing slide. What comes next is still unwritten, so the page ends on
 * the book instead of a list: On the Road, 1957. */
export default function ToBeContinued() {
  const { language } = useLanguage();
  const t = (bt: { zh: string; en: string }) => getBilingualText(bt, language);

  return (
    <Slide variant="cream" id="gy-now">
      <Reveal>
        <div className="flex flex-wrap items-center gap-4">
          <h2 className="gy-h" style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)' }}>
            {t(toBeContinued.heading)}
          </h2>
          <WipStamp />
        </div>
        <div className="gy-accent w-56 md:w-72 mt-1">
          <Doodle {...UNDERLINE_DASHED} className="w-full" strokeWidth={5} />
        </div>
        <p className="mt-6 text-base md:text-xl opacity-85 max-w-2xl">
          {t(toBeContinued.intro)}
        </p>
      </Reveal>

      <Reveal delay={0.25} className="mt-12 md:mt-16 flex flex-col items-center">
        <img
          src={onTheRoadCover}
          alt={t(toBeContinued.ending.alt)}
          className="gy-ending-cover"
          loading="lazy"
        />
        <p className="gy-hand mt-5 text-base md:text-lg opacity-70 text-center">
          {t(toBeContinued.ending.caption)}
        </p>
      </Reveal>
    </Slide>
  );
}
