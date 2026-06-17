import { getBilingualText } from "@/lib/utils";
import { type Language } from "@/lib/types";
import { type ProjectData } from "@/lib/projects";
import { ImageGallery, TagsSection } from "../modules";
import UnifiedImageGallery from "../modules/UnifiedImageGallery";
import ClickableImage from "@/components/ui/ClickableImage";
import MarkdownContent from "@/components/ui/MarkdownContent";

interface OctopusGirlDetailProps {
    project: ProjectData;
    language: Language;
}

export default function OctopusGirlDetail({ project, language }: OctopusGirlDetailProps) {
    // Collect all images from the project for unified gallery
    const allProjectImages = [
        ...(project.aboutOctopus?.imageUrl ? [project.aboutOctopus.imageUrl] : []),
        ...(project.characterDesigns?.detailImages || []),
        // Collect images from all variation sections
        ...(project.variations?.sections?.flatMap((section: any) => section.images) || []),
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


            {/* The Story Section */}
            {project.theStory && (
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {getBilingualText(project.mainContentTitle, language)}
                    </h2>
                    <MarkdownContent
                        content={project.theStory}
                        language={language}
                    />
                </div>
            )}

            {/* About Octopus Section */}
            {project.aboutOctopus && (
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {getBilingualText(project.aboutOctopus.title, language)}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div className="min-w-0">
                            <MarkdownContent
                                content={project.aboutOctopus.content}
                                language={language}
                            />
                        </div>
                        {project.aboutOctopus.imageUrl && (
                            <div className="flex justify-center min-w-0">
                                <ClickableImage
                                    src={project.aboutOctopus.imageUrl}
                                    alt={getBilingualText(project.aboutOctopus.title, language)}
                                    className="w-full max-w-sm h-auto rounded-lg shadow-lg"
                                    allImages={allProjectImages}
                                    initialIndex={allProjectImages.findIndex(img => img === project.aboutOctopus.imageUrl)}
                                />
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* About Octopus Girl Section */}
            {project.aboutOctopusGirl && (
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {getBilingualText(project.aboutOctopusGirl.title, language)}
                    </h2>
                    <MarkdownContent
                        content={project.aboutOctopusGirl.content}
                        language={language}
                    />
                </div>
            )}

            {/* Character Designs Section */}
            {project.characterDesigns && (
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {getBilingualText(project.characterDesigns.title, language)}
                    </h2>
                    <MarkdownContent
                        content={project.characterDesigns.content}
                        language={language}
                    />
                    {project.characterDesigns.detailImages && project.characterDesigns.detailImages.length > 0 && (
                        <UnifiedImageGallery
                            images={project.characterDesigns.detailImages}
                            alt={getBilingualText(project.characterDesigns.title, language)}
                            gridCols={4}
                            allProjectImages={allProjectImages}
                        />
                    )}
                </div>
            )}

            {/* Variations Section */}
            {project.variations && (
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {getBilingualText(project.variations.title, language)}
                    </h2>
                    {project.variations.intro && (
                        <MarkdownContent
                            content={project.variations.intro}
                            language={language}
                        />
                    )}
                    {project.variations.sections && project.variations.sections.map((section: any, index: number) => (
                        <div key={index} className="space-y-4">
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                {getBilingualText(section.title, language)}
                            </h3>
                            <MarkdownContent
                                content={section.description}
                                language={language}
                            />
                            {section.images && section.images.length > 0 && (
                                <UnifiedImageGallery
                                    images={section.images}
                                    alt={getBilingualText(section.title, language)}
                                    gridCols={4}
                                    allProjectImages={allProjectImages}
                                />
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Finishing Thoughts Section */}
            {project.finishingThoughts && (
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {getBilingualText(project.finishingThoughts.title, language)}
                    </h2>
                    <MarkdownContent
                        content={project.finishingThoughts.content}
                        language={language}
                    />
                </div>
            )}

            {/* Image Gallery */}
            {project.detailImages && project.detailImages.length > 0 && (
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {getBilingualText({ en: 'Gallery', zh: '画廊' }, language)}
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
