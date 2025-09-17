import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ArtGallery from "@/components/ArtGallery";
import BlogSection from "@/components/BlogSection";
import Resume from "@/components/Resume";
import NotFound from "@/pages/not-found";

// Main portfolio page component
function Portfolio() {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState<'en' | 'zh'>('en');

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const handleThemeToggle = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    console.log(`Theme changed to: ${newTheme ? 'dark' : 'light'}`);
  };

  const handleLanguageToggle = () => {
    const newLanguage = language === 'en' ? 'zh' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    console.log(`Language changed to: ${newLanguage}`);
  };

  // Scroll handlers for navigation
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed nav
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleResumeClick = () => scrollToSection('resume');
  const handleProjectsClick = () => scrollToSection('art');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation 
        isDark={isDark}
        onThemeToggle={handleThemeToggle}
        language={language}
        onLanguageToggle={handleLanguageToggle}
      />
      
      <main>
        <Hero 
          name={language === 'en' ? 'Your Name' : '你的名字'}
          title={language === 'en' 
            ? 'Data Engineer & Digital Artist' 
            : '数据工程师 & 数字艺术家'
          }
          description={language === 'en' 
            ? 'I transform complex data into meaningful insights while creating beautiful digital art. Passionate about the intersection of technology and creativity.'
            : '我将复杂的数据转化为有意义的洞察，同时创作美丽的数字艺术作品。热衷于技术与创意的交汇点。'
          }
          onResumeClick={handleResumeClick}
          onProjectsClick={handleProjectsClick}
        />
        
        <ArtGallery language={language} />
        
        <BlogSection language={language} />
        
        <Resume language={language} />
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t bg-muted/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground" data-testid="text-footer">
            {language === 'en' 
              ? '© 2024 Your Portfolio. Built with passion for design and technology.'
              : '© 2024 你的作品集。用对设计和技术的热情构建。'
            }
          </p>
        </div>
      </footer>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
