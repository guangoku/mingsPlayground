import { Button } from "@/components/ui/button";
import { FileText, Waves } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import octopusGirlOrange from "@assets/hero_cover.png";
import WaveDivider from "./WaveDivider";
import { getBilingualText } from "@/lib/utils";
import { type Language } from "@/lib/types";

interface HeroProps {
  name: string;
  description: string;
  onResumeClick: () => void;
  onProjectsClick: () => void;
  language: Language;
}

export default function Hero({ name, description, onResumeClick, onProjectsClick, language }: HeroProps) {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  const subtitles = [
    { en: 'Innovating with Data', zh: '以数据创新' },
    { en: 'Creating Art', zh: '以艺术创作' },
    { en: 'and Embracing Curiosity', zh: '以好奇心前行' },
  ];

  return (
    <section className="relative min-h-[100svh] sm:h-[100svh] flex flex-col sm:flex-row items-stretch overflow-hidden hero-bg grain">
      {/* Octopus Girl Image */}
      <div className="relative w-full sm:w-3/5 h-[45svh] sm:h-full flex items-end justify-center sm:justify-start pl-4 sm:pl-8 order-1 sm:order-1">
        {/* Soft coral glow behind the character */}
        <div
          aria-hidden
          className="absolute bottom-0 left-1/2 sm:left-1/3 -translate-x-1/2 w-[80%] h-[70%] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(closest-side, hsl(18 90% 55% / 0.22), transparent)' }}
        />
        <motion.img
          src={octopusGirlOrange}
          alt={getBilingualText({ en: 'Octopus Girl Character', zh: '章鱼女孩角色' }, language)}
          className="relative h-full w-auto max-w-full object-contain object-bottom"
          data-testid="img-octopus-girl"
          {...(reduceMotion
            ? {}
            : {
                initial: { opacity: 0, y: 40 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const },
              })}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full sm:w-2/5 flex-1 sm:flex-none flex flex-col justify-center items-center sm:items-end px-4 sm:pr-12 lg:pr-16 py-8 sm:py-0 sm:h-full order-2 sm:order-2">
        <div className="text-center sm:text-right w-full max-w-full min-w-0" style={{ containerType: 'inline-size' }}>

          <motion.p
            className="eyebrow mb-5 text-white/60"
            data-testid="text-hero-eyebrow"
            {...fadeUp(0.05)}
          >
            {getBilingualText({ en: 'Data · Art · Curiosity', zh: '数据 · 艺术 · 好奇心' }, language)}
          </motion.p>

          <motion.h1
            className="font-display font-bold italic tracking-tight mb-1 bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(115deg, #ffc48a 0%, #ff8a5c 45%, #ff5f6d 100%)',
              fontSize: 'clamp(1.9rem, 15cqw, 4.75rem)',
              lineHeight: 1.12,
              paddingBottom: '0.08em',
            }}
            data-testid="text-hero-name"
            {...fadeUp(0.15)}
          >
            {getBilingualText({ en: "Ming's", zh: '关关的' }, language)}
          </motion.h1>
          <motion.h1
            className="font-display font-bold italic tracking-tight mb-8 bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(115deg, #ffc48a 0%, #ff8a5c 45%, #ff5f6d 100%)',
              fontSize: 'clamp(1.9rem, 15cqw, 4.75rem)',
              lineHeight: 1.12,
              paddingBottom: '0.08em',
            }}
            data-testid="text-hero-playground"
            {...fadeUp(0.25)}
          >
            {getBilingualText({ en: 'Playground', zh: '游乐场' }, language)}
          </motion.h1>

          <div className="mb-10 space-y-2.5">
            {subtitles.map((line, i) => (
              <motion.h2
                key={line.en}
                className="font-light text-white/85 tracking-wide"
                style={{ fontSize: 'clamp(1rem, 5.5cqw, 1.5rem)' }}
                data-testid={`text-hero-subtitle${i + 1}`}
                {...fadeUp(0.4 + i * 0.12)}
              >
                {getBilingualText(line, language)}
              </motion.h2>
            ))}
          </div>

          <motion.div
            className="flex flex-col sm:flex-row sm:justify-end gap-4 w-full max-w-sm sm:max-w-none mx-auto sm:mx-0"
            {...fadeUp(0.85)}
          >
            <Button
              size="lg"
              onClick={onResumeClick}
              className="rounded-full border-0 font-semibold text-white w-full sm:w-auto px-8 shadow-lg shadow-orange-950/40 transition-transform duration-300 hover:scale-[1.03]"
              style={{ backgroundImage: 'linear-gradient(115deg, #ff8a5c 0%, #f4552e 100%)' }}
              data-testid="button-view-resume"
            >
              <FileText className="h-5 w-5 mr-2" />
              {getBilingualText({ en: 'View Resume', zh: '查看简历' }, language)}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={onProjectsClick}
              className="rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 hover:border-white/50 font-semibold w-full sm:w-auto px-8 transition-all duration-300 hover:scale-[1.03]"
              data-testid="button-explore-projects"
            >
              <Waves className="h-5 w-5 mr-2" />
              {getBilingualText({ en: 'See My Work', zh: '看看我的作品' }, language)}
            </Button>
          </motion.div>
        </div>
      </div>

      <WaveDivider fill="hsl(var(--seam-projects))" />
    </section>
  );
}
