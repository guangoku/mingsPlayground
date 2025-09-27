import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Home, Grid3X3 } from "lucide-react";
import { getBilingualText } from "@/lib/utils";
import { type Language } from "@/lib/types";
import { type Project } from "@/lib/projects";
import { projects, getProjectById } from "@/lib/projects";

interface ProjectNavigationProps {
    currentProjectId: string;
    language: Language;
    onBack?: () => void;
    backText?: { en: string; zh: string };
}

export default function ProjectNavigation({
    currentProjectId,
    language,
    onBack,
    backText = { en: 'Back to Projects', zh: '返回项目' }
}: ProjectNavigationProps) {
    const navigate = useNavigate();
    const [currentProject, setCurrentProject] = useState<Project | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const project = getProjectById(currentProjectId);
        if (project) {
            setCurrentProject(project);
            setCurrentIndex(projects.findIndex(p => p.id === currentProjectId));
        }
    }, [currentProjectId]);

    const handlePrevious = () => {
        if (projects.length > 0) {
            const newIndex = currentIndex > 0 ? currentIndex - 1 : projects.length - 1;
            const previousProject = projects[newIndex];
            navigate(`/projects/${getProjectSlug(previousProject.id)}`);
        }
    };

    const handleNext = () => {
        if (projects.length > 0) {
            const newIndex = currentIndex < projects.length - 1 ? currentIndex + 1 : 0;
            const nextProject = projects[newIndex];
            navigate(`/projects/${getProjectSlug(nextProject.id)}`);
        }
    };

    const handleBackToProjects = () => {
        if (onBack) {
            onBack();
        } else {
            navigate('/');
        }
    };

    const handleBackToHome = () => {
        navigate('/');
    };

    const getProjectSlug = (projectId: string): string => {
        const projectRoutes: Record<string, string> = {
            '1': 'octopus-girl',
            '2': 'nepal-travel',
            '3': 'flashmind',
            '4': 'charity-box'
        };
        return projectRoutes[projectId] || 'unknown';
    };

    if (!currentProject) return null;

    return (
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Left side - Back button and title */}
                    <div className="flex items-center gap-4 min-w-0 flex-1">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleBackToProjects}
                            className="flex items-center gap-2 flex-shrink-0"
                        >
                            <ChevronLeft className="h-4 w-4" />
                            {getBilingualText(backText, language)}
                        </Button>
                        <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 flex-shrink-0" />
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white truncate">
                            {getBilingualText(currentProject.title, language)}
                        </h1>
                    </div>

                    {/* Center - Project navigation */}
                    {projects.length > 1 && (
                        <div className="flex items-center gap-2 flex-shrink-0">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={handlePrevious}
                                className="p-2"
                                aria-label={getBilingualText({ en: 'Previous project', zh: '上一个项目' }, language)}
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap px-2">
                                {currentIndex + 1} / {projects.length}
                            </span>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={handleNext}
                                className="p-2"
                                aria-label={getBilingualText({ en: 'Next project', zh: '下一个项目' }, language)}
                            >
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    )}

                    {/* Right side - Home and Projects buttons */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleBackToHome}
                            className="flex items-center gap-2"
                            aria-label={getBilingualText({ en: 'Back to Home', zh: '返回首页' }, language)}
                        >
                            <Home className="h-4 w-4" />
                            {getBilingualText({ en: 'Home', zh: '首页' }, language)}
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => navigate('/')}
                            className="flex items-center gap-2"
                            aria-label={getBilingualText({ en: 'All Projects', zh: '所有项目' }, language)}
                        >
                            <Grid3X3 className="h-4 w-4" />
                            {getBilingualText({ en: 'Projects', zh: '项目' }, language)}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
