import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useLanguage } from "@/hooks/useLanguage";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectSection from "@/components/projects/ProjectSection";
import BlogSection from "@/components/BlogSection";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getBilingualText } from "@/lib/utils";
import { COPYRIGHT, FOOTER_TAGLINES } from "@/lib/constants";

function LandingPage() {
    const [isDark, setIsDark] = useState(false);
    const { language, toggleLanguage } = useLanguage();

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
    const handleProjectsClick = () => scrollToSection('projects');

    return (
        <TooltipProvider>
            <Toaster />
            <div className="min-h-screen bg-background text-foreground">
                <Navigation
                    isDark={isDark}
                    onThemeToggle={handleThemeToggle}
                    language={language}
                    onLanguageToggle={toggleLanguage}
                />

                <main>
                    <section id="hero">
                        <Hero
                            name="Ming"
                            description={getBilingualText({
                                en: 'Innovating with Data, Creating Art, and Embracing Curiosity',
                                zh: '用数据创新，用艺术创作，拥抱好奇心'
                            }, language)}
                            language={language}
                            onResumeClick={handleResumeClick}
                            onProjectsClick={handleProjectsClick}
                        />
                    </section>

                    <section id="projects">
                        <ProjectSection language={language} />
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
                        <div className="text-muted-foreground" data-testid="text-footer">
                            <p>{getBilingualText(COPYRIGHT, language)}</p>
                            <p className="mt-1">{getBilingualText(FOOTER_TAGLINES, language)}</p>
                        </div>
                    </div>
                </footer>
            </div>
        </TooltipProvider>
    );
}

export default LandingPage;
