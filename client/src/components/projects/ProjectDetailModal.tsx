import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { getBilingualText } from "@/lib/utils";
import { type Language } from "@/lib/types";
import { type Project } from "@/lib/projects";
import { getProjectById, projects } from "@/lib/projects";
import ProjectDetailComposer from "./ProjectDetailComposer";

interface ProjectDetailModalProps {
    projectId: string | null;
    isOpen: boolean;
    onClose: () => void;
    language: Language;
}

export default function ProjectDetailModal({
    projectId,
    isOpen,
    onClose,
    language
}: ProjectDetailModalProps) {
    const navigate = useNavigate();
    const [currentProject, setCurrentProject] = useState<Project | null>(null);
    const [allProjects, setAllProjects] = useState<Project[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    // Load project data when modal opens
    useEffect(() => {
        if (projectId && isOpen) {
            const project = getProjectById(projectId);
            if (project) {
                setCurrentProject(project);
                // Get all projects for navigation (not limited to same category)
                setAllProjects(projects);
                setCurrentIndex(projects.findIndex(p => p.id === projectId));
            }
        }
    }, [projectId, isOpen]);

    const handlePrevious = () => {
        if (allProjects.length > 0) {
            const newIndex = currentIndex > 0 ? currentIndex - 1 : allProjects.length - 1;
            setCurrentIndex(newIndex);
            setCurrentProject(allProjects[newIndex]);
        }
    };

    const handleNext = () => {
        if (allProjects.length > 0) {
            const newIndex = currentIndex < allProjects.length - 1 ? currentIndex + 1 : 0;
            setCurrentIndex(newIndex);
            setCurrentProject(allProjects[newIndex]);
        }
    };

    const handleViewFullPage = () => {
        if (currentProject) {
            // Map project IDs to their corresponding routes
            const projectRoutes: Record<string, string> = {
                '1': '/projects/octopus-girl',
                '2': '/projects/nepal-travel',
                '3': '/projects/flashmind',
                '4': '/projects/charity-box'
            };

            const route = projectRoutes[currentProject.id];
            if (route) {
                onClose(); // Close modal first
                navigate(route);
            }
        }
    };

    if (!currentProject) return null;

    // No need for category-specific rendering - the composer handles this

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-7xl max-h-[95vh] w-[95vw] p-0 flex flex-col">
                {/* Header - Fixed */}
                <div className="flex items-center justify-between p-6 border-b bg-white dark:bg-gray-900 flex-shrink-0 sticky top-0 z-10">
                    <div className="flex items-center gap-4 min-w-0 flex-1">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white truncate">
                            {getBilingualText(currentProject.title, language)}
                        </h2>
                        {allProjects.length > 1 && (
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
                                <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                                    {currentIndex + 1} / {allProjects.length}
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
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleViewFullPage}
                            className="flex items-center gap-2"
                        >
                            <ExternalLink className="h-4 w-4" />
                            {getBilingualText({ en: 'View Full Page', zh: '查看完整页面' }, language)}
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={onClose}
                            className="p-2"
                            aria-label={getBilingualText({ en: 'Close modal', zh: '关闭弹窗' }, language)}
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {/* Content - Scrollable */}
                <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 min-h-0">
                    <div className="max-w-6xl mx-auto p-6">
                        <ProjectDetailComposer
                            project={currentProject}
                            language={language}
                        />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
