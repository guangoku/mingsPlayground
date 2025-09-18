import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import ArtGallery from "@/components/ArtGallery";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectsPageProps {
    language: 'en' | 'zh';
}

function ProjectsPage() {
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
    };

    const handleLanguageToggle = () => {
        const newLanguage = language === 'en' ? 'zh' : 'en';
        setLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);
    };

    return (
        <TooltipProvider>
            <Toaster />
            <div className="min-h-screen text-foreground" style={{ backgroundColor: 'hsl(var(--emerald-green) / 0.1)' }}>
                <Navigation
                    isDark={isDark}
                    onThemeToggle={handleThemeToggle}
                    language={language}
                    onLanguageToggle={handleLanguageToggle}
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
                                {language === 'en' ? 'Back to Home' : '返回首页'}
                            </Button>
                        </Link>
                    </div>

                    {/* Page Header */}
                    <section className="max-w-6xl mx-auto px-6 py-12">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: 'hsl(var(--emerald-green))', fontFamily: 'Luckiest Guy, cursive', textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
                                {language === 'en' ? 'Projects' : '项目作品'}
                            </h1>
                            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'hsl(var(--emerald-green) / 0.8)' }}>
                                {language === 'en'
                                    ? 'A collection of my creative projects, technical work, and artistic explorations.'
                                    : '我的创意项目、技术作品和艺术探索的集合。'
                                }
                            </p>
                        </div>
                    </section>

                    {/* Art Gallery Section */}
                    <section className="max-w-6xl mx-auto px-6 py-12">
                        <ArtGallery language={language} />
                    </section>

                    {/* Additional Projects Section */}
                    <section className="max-w-6xl mx-auto px-6 py-12">
                        <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: 'hsl(var(--emerald-green))' }}>
                            {language === 'en' ? 'Technical Projects' : '技术项目'}
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
                                    {language === 'en' ? 'Coming Soon' : '即将推出'}
                                </h3>
                                <p style={{ color: 'hsl(var(--emerald-green) / 0.7)' }}>
                                    {language === 'en'
                                        ? 'More technical projects will be added here.'
                                        : '更多技术项目将在此处添加。'
                                    }
                                </p>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="py-8 px-6 border-t" style={{ backgroundColor: 'hsl(var(--emerald-green) / 0.05)', borderColor: 'hsl(var(--emerald-green) / 0.2)' }}>
                    <div className="max-w-6xl mx-auto text-center">
                        <div style={{ color: 'hsl(var(--emerald-green) / 0.7)' }}>
                            {language === 'en' ? (
                                <>
                                    <p>© 2025 Mingyun Guan. All rights reserved.</p>
                                    <p className="mt-1">Made with ocean hues, code, and curiosity — in Galicia, Spain.</p>
                                </>
                            ) : (
                                <>
                                    <p>© 2025 超级赛亚关 — 版权所有。</p>
                                    <p className="mt-1">在西班牙加利西亚，用海洋色调、代码与好奇心编织而成。</p>
                                </>
                            )}
                        </div>
                    </div>
                </footer>
            </div>
        </TooltipProvider>
    );
}

export default ProjectsPage;
