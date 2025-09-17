import { Button } from "@/components/ui/button";
import { FileText, Waves } from "lucide-react";
import octopusGirlOrange from "@assets/octopus_girl_orange.png";

interface HeroProps {
  name: string;
  title: string;
  description: string;
  onResumeClick: () => void;
  onProjectsClick: () => void;
  language: 'en' | 'zh';
}

export default function Hero({ name, title, description, onResumeClick, onProjectsClick, language }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(var(--deep-sea)) 0%, hsl(var(--ocean)) 100%)' }}>
      {/* Octopus Girl Image */}
      <div className="absolute left-0 w-3/5 h-full flex items-center justify-start pl-8">
        <img
          src={octopusGirlOrange}
          alt={language === 'en' ? 'Octopus Girl Character' : '章鱼女孩角色'}
          className="max-w-full max-h-full object-contain"
          data-testid="img-octopus-girl"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-2/5 ml-auto flex flex-col justify-center items-end pr-12 min-h-screen">
        <div className="text-right">
        
        <h1 className="text-5xl md:text-7xl font-bold mb-2" style={{ color: 'hsl(var(--coral))', textShadow: '2px 2px 4px rgba(0,0,0,0.3)', fontFamily: 'Luckiest Guy, cursive' }} data-testid="text-hero-name">
          {language === 'en' ? "Ming's" : '小明的'}
        </h1>
        <h1 className="text-5xl md:text-7xl font-bold mb-8" style={{ color: 'hsl(var(--coral))', textShadow: '2px 2px 4px rgba(0,0,0,0.3)', fontFamily: 'Luckiest Guy, cursive' }} data-testid="text-hero-playground">
          {language === 'en' ? 'Playground' : '游乐场'}
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'hsl(var(--foam))', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }} data-testid="text-hero-subtitle1">
          {language === 'en' ? 'Innovating with Data' : '用数据创新'}
        </h2>
        <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'hsl(var(--foam))', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }} data-testid="text-hero-subtitle2">
          {language === 'en' ? 'Creating Art' : '创造艺术'}
        </h2>
        <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: 'hsl(var(--foam))', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }} data-testid="text-hero-subtitle3">
          {language === 'en' ? 'and Embracing Curiosity' : '拥抱好奇心'}
        </h2>
        
        <div className="flex flex-col gap-4">
          <Button 
            size="lg" 
            onClick={onResumeClick}
            className="hover-elevate rounded-full"
            data-testid="button-view-resume"
          >
            <FileText className="h-5 w-5 mr-2" />
            {language === 'en' ? 'View Resume' : '查看简历'}
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={onProjectsClick}
            className="hover-elevate rounded-full bg-background/20 text-foam backdrop-blur"
            data-testid="button-explore-projects"
          >
            <Waves className="h-5 w-5 mr-2" />
            {language === 'en' ? 'Explore Projects' : '探索项目'}
          </Button>
        </div>
        </div>
      </div>
    </section>
  );
}