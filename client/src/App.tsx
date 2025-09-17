import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ArtGallery from "@/components/ArtGallery";
import BlogSection from "@/components/BlogSection";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";


function App() {
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
    <TooltipProvider>
      <Toaster />
      <div className="min-h-screen bg-background text-foreground">
        <Navigation
          isDark={isDark}
          onThemeToggle={handleThemeToggle}
          language={language}
          onLanguageToggle={handleLanguageToggle}
        />

        <main>
          <section id="hero">
            <Hero
              name="Ming"
              title={language === 'en'
                ? 'Tech Lead & Data Engineer'
                : '技术负责人 & 数据工程师'
              }
              description={language === 'en'
                ? 'Innovating with Data, Creating Art, and Embracing Curiosity'
                : '用数据创新，用艺术创作，拥抱好奇心'
              }
              language={language}
              onResumeClick={handleResumeClick}
              onProjectsClick={handleProjectsClick}
            />
          </section>

          <section id="art">
            <ArtGallery language={language} />
          </section>

          <section id="blog">
            <BlogSection language={language} />
          </section>

          <section id="resume">
            <Resume language={language} />
          </section>

          <section id="contact">
            <Contact language={language} />
          </section>
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
    </TooltipProvider>
  );
}

export default App;
