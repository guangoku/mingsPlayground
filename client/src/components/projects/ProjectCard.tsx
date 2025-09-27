import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, ExternalLink, Github } from "lucide-react";
import { getBilingualText } from "@/lib/utils";
import { type Language } from "@/lib/types";
import { type Project } from "@/lib/projects";
import Tag from "./Tag";
import ProjectDetailModal from "./ProjectDetailModal";

interface ProjectCardProps {
    project: Project;
    language: Language;
}

export default function ProjectCard({ project, language }: ProjectCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleViewProject = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Card
                className="group overflow-hidden hover-elevate bg-white/95 dark:bg-gray-800/95 border-2 border-emerald-200 dark:border-emerald-700 cursor-pointer transition-all duration-300 hover:border-emerald-400 dark:hover:border-emerald-500 hover:shadow-lg"
                data-testid={`card-project-${project.id}`}
                style={{
                    backdropFilter: 'blur(10px)'
                }}
                onClick={handleViewProject}
            >
                <CardContent className="p-4">
                    <div className="flex gap-4">
                        {/* Image on the left - made bigger */}
                        <div className="relative w-40 h-40 flex-shrink-0 overflow-hidden rounded-lg">
                            <img
                                src={project.imageUrl}
                                alt={getBilingualText(project.title, language)}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* Click indicator overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <div className="bg-white/90 dark:bg-gray-800/90 rounded-full p-3 shadow-lg">
                                    <Eye className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                                </div>
                            </div>
                            {/* "Click to view" text indicator */}
                            <div className="absolute bottom-2 left-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                                {getBilingualText({ en: 'Click to view details', zh: '点击查看详情' }, language)}
                            </div>
                        </div>

                        {/* Content on the right */}
                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors duration-300" data-testid={`text-project-title-${project.id}`}>
                                {getBilingualText(project.title, language)}
                                <span className="ml-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {getBilingualText({ en: '→', zh: '→' }, language)}
                                </span>
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3" data-testid={`text-project-description-${project.id}`}>
                                {getBilingualText(project.description, language)}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-3">
                                {project.tags?.map((tagId, index) => (
                                    <Tag key={index} tagId={tagId} language={language} size="sm" />
                                ))}
                            </div>

                            {/* Action buttons for tech projects */}
                            {project.category === 'tech' && (project.liveUrl || project.githubUrl) && (
                                <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                                    {project.liveUrl && (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="text-xs hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
                                            onClick={() => window.open(project.liveUrl, '_blank')}
                                        >
                                            <ExternalLink className="h-3 w-3 mr-1" />
                                            Demo
                                        </Button>
                                    )}
                                    {project.githubUrl && (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="text-xs hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
                                            onClick={() => window.open(project.githubUrl, '_blank')}
                                        >
                                            <Github className="h-3 w-3 mr-1" />
                                            Code
                                        </Button>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Project Detail Modal */}
            <ProjectDetailModal
                projectId={project.id}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                language={language}
            />
        </>
    );
}
