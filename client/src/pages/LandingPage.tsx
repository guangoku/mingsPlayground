import { useState, useEffect, useLayoutEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useLanguage } from "@/hooks/useLanguage";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ShelfSection from "@/components/content/ShelfSection";
import AdvisoryCTA from "@/components/projects/AdvisoryCTA";
import { FEATURED_SHELF, MORE_SHELF } from "@/lib/content/shelves";
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

    // Coming back from a piece page should land where you left off.
    useLayoutEffect(() => {
        const saved = sessionStorage.getItem('landing-scroll');
        if (saved) {
            sessionStorage.removeItem('landing-scroll');
            window.scrollTo(0, Number(saved));
        }
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

                    <ShelfSection
                        shelf={FEATURED_SHELF}
                        language={language}
                        id="projects"
                        bgClass="projects-bg"
                        textureClass="sea-motifs"
                        tone="dark"
                        accent="hsl(172 65% 58%)"
                        variant="feature"
                        seamFill="hsl(var(--seam-blog))"
                        lightShafts
                    >
                        <AdvisoryCTA language={language} variant="onDark" className="mt-12 md:mt-14" />
                    </ShelfSection>

                    <ShelfSection
                        shelf={MORE_SHELF}
                        language={language}
                        id="blog"
                        bgClass="blog-bg"
                        textureClass="sea-motifs-ink"
                        tone="light"
                        accent="hsl(190 60% 34%)"
                        variant="compact"
                        seamFill="hsl(var(--seam-resume))"
                    />

                    <section id="resume">
                        <Resume language={language} isDark={isDark} />
                    </section>

                    <section id="contact">
                        <Contact language={language} />
                    </section>
                </main>

                {/* Footer */}
                <footer
                    className="py-12 px-6"
                    style={{ background: 'linear-gradient(180deg, hsl(var(--seam-footer)) 0%, hsl(213 65% 5%) 100%)' }}
                >
                    <div className="max-w-6xl mx-auto text-center">
                        <p className="font-display italic text-xl text-white/85 mb-3" aria-hidden>
                            {getBilingualText({ en: "Ming's Playground", zh: '关关的游乐场' }, language)}
                        </p>
                        <div className="text-sm text-white/45 leading-relaxed" data-testid="text-footer">
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
