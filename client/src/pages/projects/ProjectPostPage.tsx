import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { getProjectById, getProjectIdFromSlug } from "@/lib/projects";
import { type ProjectData } from "@/lib/projects";
import ProjectDetailComposer from "@/components/projects/ProjectDetailComposer";
import BaseNavigation from "@/components/navigation/BaseNavigation";

export default function ProjectPostPage() {
    const { language, toggleLanguage } = useLanguage();
    const navigate = useNavigate();
    const { slug } = useParams<{ slug: string }>();
    const [isDark, setIsDark] = useState(false);
    const [project, setProject] = useState<ProjectData | null>(null);

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
            const projectId = getProjectIdFromSlug(slug);
            if (projectId) {
                const foundProject = getProjectById(projectId);
                if (foundProject) {
                    setProject(foundProject);
                } else {
                    navigate('/#projects'); // Redirect to projects section
                }
            } else {
                navigate('/#projects'); // Redirect if projectId not found
            }
        }
    }, [slug, navigate]);

    const handleBack = () => {
        navigate('/#projects'); // Navigate to projects section on landing page
    };

    if (!project) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <BaseNavigation
                    variant="project"
                    language={language}
                    isDark={isDark}
                    onThemeToggle={handleThemeToggle}
                    onLanguageToggle={toggleLanguage}
                    currentProjectId={undefined}
                    onBack={handleBack}
                    backText={{ en: 'Back to Projects', zh: '返回项目' }}
                />
                <div className="pt-16 flex items-center justify-center">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white mx-auto mb-4"></div>
                        <p className="text-gray-600 dark:text-gray-400">
                            {language === 'en' ? 'Loading project...' : '加载项目中...'}
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <BaseNavigation
                variant="project"
                language={language}
                isDark={isDark}
                onThemeToggle={handleThemeToggle}
                onLanguageToggle={toggleLanguage}
                currentProjectId={project.id}
                onBack={handleBack}
                backText={{ en: 'Back to Projects', zh: '返回项目' }}
            />
            <div className="max-w-6xl mx-auto px-6 pt-20 pb-8">
                <ProjectDetailComposer
                    project={project}
                    language={language}
                />
            </div>
        </div>
    );
}
