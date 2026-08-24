import { useLanguage } from '@/hooks/useLanguage';
import { getBilingualText } from '@/lib/utils';
import { prep } from '@/lib/gapyear/chapters';
import Slide from '../Slide';
import StoryCard from '../StoryCard';
import Reveal from '@/components/Reveal';
import { Doodle, PIGGY, DOOR, SUPPORT, SPARKLE, type DoodleSpec } from '../doodles';

const ICONS: Record<string, DoodleSpec> = {
  money: PIGGY,
  door: DOOR,
  support: SUPPORT,
};

export default function PreflightChecks() {
  const { language } = useLanguage();
  const t = (bt: { zh: string; en: string }) => getBilingualText(bt, language);

  return (
    <Slide variant="verm" id="gy-prep" className="gy-wide">
      <div className="absolute top-12 right-6 md:right-14 w-10 md:w-14 gy-accent rotate-12">
        <Doodle {...SPARKLE} className="w-full" />
      </div>
      <Reveal>
        <h2 className="gy-h text-center" style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)' }}>
          {t(prep.heading)}
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {prep.cards.map((card, i) => (
          <Reveal key={card.key} delay={0.12 * i} className="flex flex-col">
            <div className="flex justify-center mb-4">
              <Doodle {...ICONS[card.key]} className="w-24 md:w-28" delay={0.15 * i} />
            </div>
            <StoryCard title={card.title} paragraphs={card.paragraphs} className="flex-1" />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3}>
        <p className="gy-hand mt-12 text-2xl md:text-3xl text-center">{t(prep.closing)}</p>
      </Reveal>
    </Slide>
  );
}
