import { useLanguage } from '@/hooks/useLanguage';
import { getBilingualText } from '@/lib/utils';
import { tests } from '@/lib/gapyear/chapters';
import Slide from '../Slide';
import StoryCard from '../StoryCard';
import Reveal from '@/components/Reveal';
import { Doodle, UNDERLINE_DASHED, HOURGLASS, BUBBLES, type DoodleSpec } from '../doodles';

/** One sketch per test, so the pair reads as two experiments */
const ICONS: Record<string, DoodleSpec> = { test1: HOURGLASS, test2: BUBBLES };

export default function OldTrackTests() {
  const { language } = useLanguage();
  const t = (bt: { zh: string; en: string }) => getBilingualText(bt, language);

  return (
    <Slide variant="cream" id="gy-tests" className="gy-wide">
      <Reveal>
        <h2 className="gy-h" style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)' }}>
          {t(tests.heading)}
        </h2>
        <p className="gy-h mt-3 text-xl md:text-2xl">{t(tests.sub)}</p>
        <div className="gy-accent w-64 md:w-80 mt-1">
          <Doodle {...UNDERLINE_DASHED} className="w-full" strokeWidth={5} />
        </div>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {tests.cards.map((card, i) => (
          <Reveal key={card.key} delay={0.12 * i}>
            <StoryCard
              title={card.title}
              intro={'intro' in card ? card.intro : undefined}
              bullets={'bullets' in card ? card.bullets : undefined}
              paragraphs={card.paragraphs}
              icon={
                ICONS[card.key] && (
                  <span className="gy-accent block w-9 md:w-11">
                    <Doodle {...ICONS[card.key]} className="w-full" delay={0.12 * i} />
                  </span>
                )
              }
            />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.25}>
        <p className="gy-h gy-accent mt-10 text-xl md:text-2xl">{t(tests.conclusion)}</p>
      </Reveal>
    </Slide>
  );
}
