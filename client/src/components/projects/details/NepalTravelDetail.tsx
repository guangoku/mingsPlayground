import { getBilingualText } from "@/lib/utils";
import { type Language } from "@/lib/types";
import { type ProjectData } from "@/lib/projects";
import { TagsSection } from "../modules";
import MarkdownContent from "@/components/ui/MarkdownContent";

interface NepalTravelDetailProps {
    project: ProjectData;
    language: Language;
}

export default function NepalTravelDetail({ project, language }: NepalTravelDetailProps) {
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
            {/* Coming Soon Message for additional content */}
            <div className="text-center py-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 max-w-xl mx-auto">
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                        {getBilingualText({
                            en: `DO NOT READ ENGLISH VERSION IF YOU CAN READ CHINESE. THEY ARE AUTO-GENERATED EPIC-POEM STYLE TRANSLATION.`,
                            zh: '如果你能读懂中文，请不要阅读英文版本。'
                        }, language)}
                    </p>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                        {getBilingualText({
                            en: `More journal entries and illustrations coming soon...`,
                            zh: '更多游记章节和插图即将发布...'
                        }, language)}
                    </p>
                </div>
            </div>
            {/* Travel Journal Section */}
            {project.travelJournal && (
                <div className="space-y-4">
                    <MarkdownContent
                        content={project.travelJournal.content}
                        language={language}
                    />
                </div>
            )}


        </div>
    );
}
