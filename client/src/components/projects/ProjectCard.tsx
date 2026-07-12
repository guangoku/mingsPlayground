import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, ExternalLink, Github } from "lucide-react";
import { getBilingualText } from "@/lib/utils";
import { type Language } from "@/lib/types";
import { type Project, getProjectSlug } from "@/lib/projects";
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
            <a
                href={`/projects/${getProjectSlug(project.id)}`}
                onClick={(e) => {
                    e.preventDefault(); // Prevent navigation on left-click
                    handleViewProject(); // Open modal instead
                }}
                className="block"
            >
                <Card
                    className="group overflow-hidden rounded-2xl bg-white/95 dark:bg-gray-900/80 border border-white/40 dark:border-white/10 cursor-pointer shadow-lg shadow-black/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/30"
                    data-testid={`card-project-${project.id}`}
                >
                    <CardContent className="p-5">
                        <div className="flex flex-col sm:flex-row gap-5">
                            {/* Image: shorter banner on mobile, fixed square on larger screens */}
                            <div className="relative w-full h-36 sm:w-40 sm:h-40 flex-shrink-0 overflow-hidden rounded-xl ring-1 ring-black/5 dark:ring-white/10">
                                <img
                                    src={project.imageUrl}
                                    alt={getBilingualText(project.title, language)}
                                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                                />
                                {/* Hover affordance: soft dim + small chip */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-emerald-800 dark:text-emerald-300 shadow-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 whitespace-nowrap">
                                    <Eye className="h-3.5 w-3.5" />
                                    {getBilingualText({ en: 'View details', zh: '查看详情' }, language)}
                                </div>
                            </div>

                            {/* Content on the right */}
                            <div className="flex-1 min-w-0">
                                <h3 className="font-display text-lg font-semibold tracking-tight text-emerald-800 dark:text-emerald-300 mb-2 transition-colors duration-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-200" data-testid={`text-project-title-${project.id}`}>
                                    {getBilingualText(project.title, language)}
                                    <span className="ml-2 inline-block text-sm opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                        →
                                    </span>
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 mb-3" data-testid={`text-project-description-${project.id}`}>
                                    {getBilingualText(project.description, language)}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.tags?.map((tagId, index) => (
                                        <Tag key={index} tagId={tagId} language={language} size="sm" />
                                    ))}
                                </div>

                                {/* Action buttons for projects */}
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
            </a>

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
