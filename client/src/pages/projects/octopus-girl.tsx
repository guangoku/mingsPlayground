import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { getProjectById } from "@/lib/projects";
import { type Project } from "@/lib/projects";
import ProjectNavigation from "@/components/navigation/ProjectNavigation";
import ProjectDetailComposer from "@/components/projects/ProjectDetailComposer";

export default function OctopusGirlProjectPage() {
    const navigate = useNavigate();
    const { language, toggleLanguage } = useLanguage();
    const [isDark, setIsDark] = useState(false);
    const [project, setProject] = useState<Project | null>(null);

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
        const fetchedProject = getProjectById('1'); // Assuming '1' is the ID for Octopus Girl
        if (fetchedProject) {
            setProject(fetchedProject);
        } else {
            navigate('/projects'); // Redirect if project not found
        }
    }, [navigate]);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                <p className="text-gray-700 dark:text-gray-300">Loading project...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Navigation */}
            <ProjectNavigation
                isDark={isDark}
                onThemeToggle={handleThemeToggle}
                language={language}
                onLanguageToggle={toggleLanguage}
                currentProjectId={project.id}
                onBack={() => navigate('/')}
            />

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 py-8">
                <ProjectDetailComposer
                    project={project}
                    language={language}
                />
            </div>
        </div>
    );
}