import { getBilingualText } from "@/lib/utils";
import { type Language } from "@/lib/types";
import { type ProjectData } from "@/lib/projects";
import { TagsSection } from "../modules";
import UnifiedImageGallery from "../modules/UnifiedImageGallery";

interface FlashMindDetailProps {
    project: ProjectData;
    language: Language;
}

export default function FlashMindDetail({ project, language }: FlashMindDetailProps) {
    // Collect all images from the project for unified gallery
    const allProjectImages = [
        ...(project.detailImages || []),
    ].filter(Boolean);

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

            {/* Image Gallery */}
            {project.detailImages && project.detailImages.length > 0 && (
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {getBilingualText({ en: 'Screenshots', zh: '界面截图' }, language)}
                    </h2>
                    <UnifiedImageGallery
                        images={project.detailImages}
                        alt={getBilingualText(project.title, language)}
                        gridCols={4}
                        allProjectImages={allProjectImages}
                    />
                </div>
            )}
        </div>
    );
}
