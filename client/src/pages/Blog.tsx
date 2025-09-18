import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import BlogSection from "@/components/BlogSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPageProps {
    language: 'en' | 'zh';
}

function BlogPage() {
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
            <div className="min-h-screen text-foreground" style={{ backgroundColor: 'hsl(var(--warm-ivory))' }}>
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
                                className="mb-8"
                                style={{
                                    borderColor: 'hsl(45 40% 60%)',
                                    color: 'hsl(45 40% 40%)',
                                    backgroundColor: 'hsl(var(--warm-beige))'
                                }}
                            >
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                {language === 'en' ? 'Back to Home' : '返回首页'}
                            </Button>
                        </Link>
                    </div>

                    {/* Page Header */}
                    <section className="max-w-6xl mx-auto px-6 py-12">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: 'hsl(45 60% 30%)', fontFamily: 'Luckiest Guy, cursive', textShadow: '2px 2px 4px rgba(139, 69, 19, 0.2)' }}>
                                {language === 'en' ? 'Blog & Thoughts' : '博客与思考'}
                            </h1>
                            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'hsl(45 40% 40%)' }}>
                                {language === 'en'
                                    ? 'Sharing insights on technology, design, and creative processes.'
                                    : '分享关于技术、设计和创作过程的见解。'
                                }
                            </p>
                        </div>
                    </section>

                    {/* Blog Section */}
                    <section className="max-w-6xl mx-auto px-6 py-12">
                        <BlogSection language={language} />
                    </section>

                    {/* Additional Blog Content */}
                    <section className="max-w-6xl mx-auto px-6 py-12">
                        <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: 'hsl(45 60% 30%)' }}>
                            {language === 'en' ? 'Featured Articles' : '精选文章'}
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* TODO: Add more blog content here
                                - In-depth technical articles
                                - Design process documentation
                                - Learning journey posts
                                - Travel and adventure stories
                                - Book reviews and reading notes
                                - Curious minds exploration posts
                            */}
                            <div
                                className="border rounded-lg p-6 hover-elevate"
                                style={{
                                    backgroundColor: 'hsl(var(--warm-beige))',
                                    borderColor: 'hsl(45 40% 70%)'
                                }}
                            >
                                <h3 className="text-xl font-semibold mb-2" style={{ color: 'hsl(45 60% 30%)' }}>
                                    {language === 'en' ? 'Coming Soon' : '即将推出'}
                                </h3>
                                <p style={{ color: 'hsl(45 40% 40%)' }}>
                                    {language === 'en'
                                        ? 'More blog posts will be added here.'
                                        : '更多博客文章将在此处添加。'
                                    }
                                </p>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="py-8 px-6 border-t" style={{ backgroundColor: 'hsl(var(--warm-beige))', borderColor: 'hsl(45 40% 70%)' }}>
                    <div className="max-w-6xl mx-auto text-center">
                        <div style={{ color: 'hsl(45 40% 50%)' }}>
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

export default BlogPage;
