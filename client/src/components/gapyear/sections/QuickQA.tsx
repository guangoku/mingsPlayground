import { useLanguage } from '@/hooks/useLanguage';
import { getBilingualText } from '@/lib/utils';
import { qa } from '@/lib/gapyear/chapters';
import Slide from '../Slide';
import WipStamp from '../WipStamp';
import Reveal from '@/components/Reveal';

/** Placeholder - question list being curated; design pass to come. */
export default function QuickQA() {
  const { language } = useLanguage();
  const t = (bt: { zh: string; en: string }) => getBilingualText(bt, language);

  return (
    <Slide variant="verm" id="gy-qa">
      <Reveal>
        <div className="flex flex-wrap items-center gap-4">
          <h2 className="gy-h" style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)' }}>
            {t(qa.heading)}
          </h2>
          <WipStamp />
        </div>
      </Reveal>
      <div className="mt-10 flex flex-wrap gap-4">
        {qa.teasers.map((q, i) => (
          <Reveal key={q.zh} delay={0.1 * i}>
            <div className="gy-box px-5 py-3 opacity-75">
              <p className="gy-h text-lg md:text-xl">{t(q)}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.25}>
        <p className="gy-hand mt-8 text-xl md:text-2xl">{t(qa.note)}</p>
      </Reveal>
    </Slide>
  );
}
