import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Minimalist_flat_workspace_illustration_82014d09.png";
import profileImage from "@assets/generated_images/Professional_creative_tech_portrait_54f8c9a0.png";

interface HeroProps {
  name: string;
  title: string;
  description: string;
  onResumeClick: () => void;
  onProjectsClick: () => void;
}

export default function Hero({ name, title, description, onResumeClick, onProjectsClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <img
            src={profileImage}
            alt={name}
            className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-primary/20 shadow-lg"
            data-testid="img-profile"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4" data-testid="text-hero-name">
          {name}
        </h1>
        
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 font-light" data-testid="text-hero-title">
          {title}
        </h2>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed" data-testid="text-hero-description">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={onResumeClick}
            className="hover-elevate"
            data-testid="button-view-resume"
          >
            View Resume
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={onProjectsClick}
            className="hover-elevate"
            data-testid="button-explore-projects"
          >
            Explore Projects
          </Button>
        </div>
      </div>
    </section>
  );
}