import { Button } from "@/components/ui/button";
import { FileText, Waves } from "lucide-react";
import octopusGirlOrange from "@assets/hero_cover.png";
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
  return (
    <section className="relative min-h-[100svh] sm:h-[100svh] flex flex-col sm:flex-row items-stretch overflow-hidden hero-bg">
      {/* Octopus Girl Image */}
      <div className="w-full sm:w-3/5 h-[45svh] sm:h-full flex items-end justify-center sm:justify-start pl-4 sm:pl-8 order-1 sm:order-1">
        <img
          src={octopusGirlOrange}
          alt={getBilingualText({ en: 'Octopus Girl Character', zh: '章鱼女孩角色' }, language)}
          className="h-full w-auto max-w-full object-contain object-bottom"
          data-testid="img-octopus-girl"
        />
      </div>

      {/* Content */}
      <div className="w-full sm:w-2/5 flex-1 sm:flex-none flex flex-col justify-center items-center sm:items-end px-4 sm:pr-12 py-8 sm:py-0 sm:h-full order-2 sm:order-2">
        <div className="text-center sm:text-right w-full max-w-full min-w-0" style={{ containerType: 'inline-size' }}>

          <h1 className="font-black mb-2 tracking-tight" style={{
            color: 'hsl(var(--coral-fixed))',
            textShadow: '3px 3px 6px rgba(0,0,0,0.4), 1px 1px 2px rgba(0,0,0,0.2)',
            fontFamily: 'var(--font-sans)',
            letterSpacing: '-0.02em',
            transform: 'rotate(-1deg)',
            fontSize: 'clamp(1.75rem, 16cqw, 4.5rem)',
            lineHeight: 1.05
          }} data-testid="text-hero-name">
            {getBilingualText({ en: "Ming's", zh: '关关的' }, language)}
          </h1>
          <h1 className="font-black mb-8 tracking-tight" style={{
            color: 'hsl(var(--coral-fixed))',
            textShadow: '3px 3px 6px rgba(0,0,0,0.4), 1px 1px 2px rgba(0,0,0,0.2)',
            fontFamily: 'var(--font-sans)',
            letterSpacing: '-0.02em',
            transform: 'rotate(1deg)',
            fontSize: 'clamp(1.75rem, 16cqw, 4.5rem)',
            lineHeight: 1.05
          }} data-testid="text-hero-playground">
            {getBilingualText({ en: 'Playground', zh: '游乐场' }, language)}
          </h1>

          <h2 className="font-bold mb-4" style={{
            color: 'hsl(var(--foam-fixed))',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            fontSize: 'clamp(1.05rem, 6.5cqw, 1.875rem)'
          }} data-testid="text-hero-subtitle1">
            {getBilingualText({ en: 'Innovating with Data', zh: '以数据创新' }, language)}
          </h2>
          <h2 className="font-bold mb-4" style={{
            color: 'hsl(var(--foam-fixed))',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            fontSize: 'clamp(1.05rem, 6.5cqw, 1.875rem)'
          }} data-testid="text-hero-subtitle2">
            {getBilingualText({ en: 'Creating Art', zh: '以艺术创作' }, language)}
          </h2>
          <h2 className="font-bold mb-8" style={{
            color: 'hsl(var(--foam-fixed))',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            fontSize: 'clamp(1.05rem, 6.5cqw, 1.875rem)'
          }} data-testid="text-hero-subtitle3">
            {getBilingualText({ en: 'and Embracing Curiosity', zh: '以好奇心前行' }, language)}
          </h2>

          <div className="flex flex-col gap-4 w-full max-w-sm sm:max-w-none">
            <Button
              size="lg"
              onClick={onResumeClick}
              className="hover-elevate rounded-full bg-white text-blue-900 hover:bg-white/90 font-semibold shadow-lg w-full sm:w-auto"
              data-testid="button-view-resume"
            >
              <FileText className="h-5 w-5 mr-2" />
              {getBilingualText({ en: 'View Resume', zh: '查看简历' }, language)}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={onProjectsClick}
              className="hover-elevate rounded-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold shadow-lg w-full sm:w-auto"
              data-testid="button-explore-projects"
            >
              <Waves className="h-5 w-5 mr-2" />
              {getBilingualText({ en: 'See My Work', zh: '看看我的作品' }, language)}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}