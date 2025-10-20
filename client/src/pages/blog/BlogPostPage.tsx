import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { blogPosts, getBlogPostIdFromSlug } from "@/lib/blog";
import { type BlogPost } from "@/lib/blog";
import BlogDetailComposer from "@/components/blog/BlogDetailComposer";
import BaseNavigation from "@/components/navigation/BaseNavigation";

export default function BlogPostPage() {
    const { language, toggleLanguage } = useLanguage();
    const navigate = useNavigate();
    const { slug } = useParams<{ slug: string }>();
    const [isDark, setIsDark] = useState(false);
    const [post, setPost] = useState<BlogPost | null>(null);

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

    useEffect(() => {
        if (slug) {
            const postId = getBlogPostIdFromSlug(slug);
            if (postId) {
                const foundPost = blogPosts.find(p => p.id === postId);
                if (foundPost) {
                    setPost(foundPost);
                } else {
                    navigate('/blog');
                }
            } else {
                navigate('/blog');
            }
        }
    }, [slug, navigate]);

    const handleBack = () => {
        navigate('/#blog');
    };

    if (!post) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <BaseNavigation
                    variant="blog"
                    language={language}
                    isDark={isDark}
                    onThemeToggle={handleThemeToggle}
                    onLanguageToggle={toggleLanguage}
                    currentProjectId={undefined}
                    onBack={handleBack}
                    backText={{ en: 'Back to Blog', zh: '返回博客' }}
                />
                <div className="pt-16 flex items-center justify-center">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white mx-auto mb-4"></div>
                        <p className="text-gray-600 dark:text-gray-400">
                            {language === 'en' ? 'Loading...' : '加载中...'}
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <BaseNavigation
                variant="blog"
                language={language}
                isDark={isDark}
                onThemeToggle={handleThemeToggle}
                onLanguageToggle={toggleLanguage}
                currentProjectId={post.id}
                onBack={handleBack}
                backText={{ en: 'Back to Blog', zh: '返回博客' }}
            />
            <div className="pt-16">
                <BlogDetailComposer
                    post={post}
                    language={language}
                />
            </div>
        </div>
    );
}
