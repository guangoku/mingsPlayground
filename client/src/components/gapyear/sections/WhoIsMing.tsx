import { useLanguage } from '@/hooks/useLanguage';
import { getBilingualText } from '@/lib/utils';
import { who } from '@/lib/gapyear/chapters';
import Slide from '../Slide';
import InkStamp from '../InkStamp';
import { ART } from '@/lib/gapyear/art';
import Reveal from '@/components/Reveal';
import { Doodle, TICKS, UNDERLINE_DASHED } from '../doodles';

export default function WhoIsMing() {
  const { language } = useLanguage();
  const t = (bt: { zh: string; en: string }) => getBilingualText(bt, language);

  return (
    <Slide variant="verm" id="gy-who">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="flex-1">
          <Reveal>
            <h2 className="gy-h" style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)' }}>
              {t(who.heading)}
            </h2>
            <div className="gy-accent w-40 md:w-52 -mt-1">
              <Doodle {...UNDERLINE_DASHED} className="w-full" strokeWidth={5} />
            </div>
          </Reveal>
          <div className="mt-8 space-y-4">
            {who.lines.map((line, i) => (
              <Reveal key={line.zh} delay={0.12 * i}>
                <p
                  className="gy-h text-xl md:text-2xl leading-snug"
                  style={{ marginLeft: `${(i % 3) * 1.25}rem` }}
                >
                  {t(line)}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="relative flex-shrink-0">
          <div className="absolute -top-6 -left-4 w-10 gy-accent -rotate-12">
            <Doodle {...TICKS} className="w-full" delay={0.6} />
          </div>
          <InkStamp art={ART.walking} className="w-44 md:w-64" delay={0.3} />
        </div>
      </div>
    </Slide>
  );
}
