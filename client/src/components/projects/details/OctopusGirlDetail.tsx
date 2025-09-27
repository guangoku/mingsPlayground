import { getBilingualText } from "@/lib/utils";
import { type Language } from "@/lib/types";
import { type Project } from "@/lib/projects";
import { ImageGallery, TagsSection } from "../modules";

interface OctopusGirlDetailProps {
    project: Project;
    language: Language;
}

export default function OctopusGirlDetail({ project, language }: OctopusGirlDetailProps) {
    return (
        <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                    {getBilingualText(project.title, language)}
                </h1>
                <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                    {getBilingualText(project.description, language)}
                </p>
            </div>

            {/* Tags */}
            <TagsSection
                tags={project.tags || []}
                language={language}
            />


            {/* Artist Statement */}
            {project.artistStatement && (
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {getBilingualText({ en: 'Artist Statement', zh: '艺术家声明' }, language)}
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
                        <p>{getBilingualText(project.artistStatement, language)}</p>
                    </div>
                </div>
            )}

            {/* Image Gallery */}
            {project.detailImages && project.detailImages.length > 0 && (
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {getBilingualText({ en: 'Gallery', zh: '画廊' }, language)}
                    </h2>
                    <ImageGallery
                        images={project.detailImages}
                        alt={getBilingualText(project.title, language)}
                        gridCols={4}
                    />
                </div>
            )}
        </div>
    );
}
