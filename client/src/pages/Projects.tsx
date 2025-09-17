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
            <div className="min-h-screen bg-background text-foreground">
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
                            <Button variant="outline" className="mb-8">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                {language === 'en' ? 'Back to Home' : '返回首页'}
                            </Button>
                        </Link>
                    </div>

                    {/* Page Header */}
                    <section className="max-w-6xl mx-auto px-6 py-12">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: 'hsl(var(--coral))', fontFamily: 'Luckiest Guy, cursive' }}>
                                {language === 'en' ? 'Projects' : '项目作品'}
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
                        <h2 className="text-3xl font-bold mb-8 text-center">
                            {language === 'en' ? 'Technical Projects' : '技术项目'}
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Placeholder for future project cards */}
                            <div className="bg-card border rounded-lg p-6">
                                <h3 className="text-xl font-semibold mb-2">
                                    {language === 'en' ? 'Coming Soon' : '即将推出'}
                                </h3>
                                <p className="text-muted-foreground">
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
                <footer className="py-8 px-6 border-t bg-muted/30">
                    <div className="max-w-6xl mx-auto text-center">
                        <p className="text-muted-foreground">
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

export default ProjectsPage;
