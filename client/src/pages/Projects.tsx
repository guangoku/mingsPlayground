import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useLanguage } from "@/hooks/useLanguage";
import Navigation from "@/components/Navigation";
import ProjectSection from "@/components/projects/ProjectSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { getBilingualText } from "@/lib/utils";
import { COPYRIGHT, FOOTER_TAGLINES } from "@/lib/constants";

function ProjectsPage() {
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
    };


    return (
        <TooltipProvider>
            <Toaster />
            <div className="min-h-screen text-foreground" style={{ backgroundColor: 'hsl(var(--emerald-green) / 0.1)' }}>
                <Navigation
                    isDark={isDark}
                    onThemeToggle={handleThemeToggle}
                    language={language}
                    onLanguageToggle={toggleLanguage}
                />

                <main className="pt-20">
                    {/* Back to Home Button */}
                    <div className="max-w-6xl mx-auto px-6 py-8">
                        <Link to="/">
                            <Button
                                variant="outline"
                                className="mb-8 border-emerald-600 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-300 dark:hover:bg-emerald-900/20"
                                style={{ borderColor: 'hsl(var(--emerald-green))', color: 'hsl(var(--emerald-green))' }}
                            >
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                {getBilingualText({ en: 'Back to Home', zh: '返回首页' }, language)}
                            </Button>
                        </Link>
                    </div>

                    {/* Page Header */}
                    <section className="max-w-6xl mx-auto px-6 py-12">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: 'hsl(var(--emerald-green))', fontFamily: 'Luckiest Guy, cursive', textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
                                {getBilingualText({ en: 'Projects', zh: '项目作品' }, language)}
                            </h1>
                            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'hsl(var(--emerald-green) / 0.8)' }}>
                                {getBilingualText({
                                    en: 'A collection of my creative projects, technical work, and artistic explorations.',
                                    zh: '我的创意项目、技术作品和艺术探索的集合。'
                                }, language)}
                            </p>
                        </div>
                    </section>

                    {/* Project Section */}
                    <section className="max-w-6xl mx-auto px-6 py-12">
                        <ProjectSection language={language} />
                    </section>

                    {/* Additional Projects Section */}
                    <section className="max-w-6xl mx-auto px-6 py-12">
                        <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: 'hsl(var(--emerald-green))' }}>
                            {getBilingualText({ en: 'Technical Projects', zh: '技术项目' }, language)}
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* TODO: Add more technical project cards here
                                - Data engineering projects
                                - Web applications
                                - Open source contributions
                                - Technical blog posts
                                - Case studies with code examples
                            */}
                            <div
                                className="border rounded-lg p-6 hover-elevate"
                                style={{
                                    backgroundColor: 'hsl(var(--emerald-green) / 0.05)',
                                    borderColor: 'hsl(var(--emerald-green) / 0.3)'
                                }}
                            >
                                <h3 className="text-xl font-semibold mb-2" style={{ color: 'hsl(var(--emerald-green))' }}>
                                    {getBilingualText({ en: 'Coming Soon', zh: '即将推出' }, language)}
                                </h3>
                                <p style={{ color: 'hsl(var(--emerald-green) / 0.7)' }}>
                                    {getBilingualText({
                                        en: 'More technical projects will be added here.',
                                        zh: '更多技术项目将在此处添加。'
                                    }, language)}
                                </p>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="py-8 px-6 border-t" style={{ backgroundColor: 'hsl(var(--emerald-green) / 0.05)', borderColor: 'hsl(var(--emerald-green) / 0.2)' }}>
                    <div className="max-w-6xl mx-auto text-center">
                        <div style={{ color: 'hsl(var(--emerald-green) / 0.7)' }}>
                            <p>{getBilingualText(COPYRIGHT, language)}</p>
                            <p className="mt-1">{getBilingualText(FOOTER_TAGLINES, language)} — on this journey.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </TooltipProvider>
    );
}

export default ProjectsPage;
