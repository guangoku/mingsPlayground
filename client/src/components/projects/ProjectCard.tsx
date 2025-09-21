import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Eye, ExternalLink, Github } from "lucide-react";
import { getBilingualText } from "@/lib/utils";
import { type Language } from "@/lib/types";
import { type Project } from "@/lib/projects";
import Tag from "./Tag";

interface ProjectCardProps {
    project: Project;
    language: Language;
}

export default function ProjectCard({ project, language }: ProjectCardProps) {
    return (
        <Card
            className="group overflow-hidden hover-elevate bg-white/95 dark:bg-gray-800/95 border-2 border-emerald-200 dark:border-emerald-700"
            data-testid={`card-project-${project.id}`}
            style={{
                backdropFilter: 'blur(10px)'
            }}
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
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button size="icon" variant="secondary" className="hover-elevate rounded-full" data-testid={`button-view-${project.id}`}>
                                        <Eye className="h-4 w-4" />
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-4xl">
                                    <div className="aspect-square w-full">
                                        <img
                                            src={project.imageUrl}
                                            alt={getBilingualText(project.title, language)}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>

                    {/* Content on the right */}
                    <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2" data-testid={`text-project-title-${project.id}`}>
                            {getBilingualText(project.title, language)}
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
                            <div className="flex gap-2">
                                {project.liveUrl && (
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="text-xs"
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
                                        className="text-xs"
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
    );
}
