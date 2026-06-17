import { getBilingualText } from "@/lib/utils";
import { type Language } from "@/lib/types";
import { type ProjectData } from "@/lib/projects";
import { ExternalLink, Smartphone, Sparkles, Repeat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TagsSection } from "../modules";
import UnifiedImageGallery from "../modules/UnifiedImageGallery";
import MarkdownContent from "@/components/ui/MarkdownContent";
import ProjectFlow, { type FlowStep } from "../ProjectFlow";

interface FlashMindDetailProps {
    project: ProjectData;
    language: Language;
}

const flowSteps: FlowStep[] = [
    {
        icon: Smartphone,
        title: { en: 'Capture', zh: '捕获' },
        subtitle: { en: 'Word, voice, link, or photo', zh: '词、语音、链接或照片' }
    },
    {
        icon: Sparkles,
        title: { en: 'AI drafts a card', zh: 'AI 起草卡片' },
        subtitle: { en: 'You review & approve', zh: '你审阅并确认' }
    },
    {
        icon: Repeat,
        title: { en: 'Active recall', zh: '主动回忆' },
        subtitle: { en: 'Produce, rate, repeat (FSRS)', zh: '产出、评分、循环（FSRS）' }
    }
];

export default function FlashMindDetail({ project, language }: FlashMindDetailProps) {
    const allProjectImages = [...(project.detailImages || [])].filter(Boolean);
    const sections = [project.problem, project.solution, project.approach].filter(Boolean);

    return (
        <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                    {getBilingualText(project.title, language)}
                </h1>
                {project.tagline && (
                    <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                        {getBilingualText(project.tagline, language)}
                    </p>
                )}
                {project.liveUrl && (
                    <div className="flex justify-center pt-2">
                        <Button
                            onClick={() => window.open(project.liveUrl, '_blank', 'noopener noreferrer')}
                            className="rounded-full"
                        >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            {getBilingualText({ en: 'Visit catch-and-keep.com', zh: '访问 catch-and-keep.com' }, language)}
                        </Button>
                    </div>
                )}
            </div>

            {/* Tags */}
            <TagsSection
                tags={project.tags || []}
                language={language}
            />

            {/* How it works */}
            <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {getBilingualText({ en: 'How it works', zh: '运作方式' }, language)}
                </h2>
                <ProjectFlow steps={flowSteps} language={language} />
            </div>

            {/* Content sections */}
            {sections.map((section: any, index: number) => (
                <div key={index} className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {getBilingualText(section.title, language)}
                    </h2>
                    <MarkdownContent
                        content={section.content}
                        language={language}
                    />
                </div>
            ))}

            {/* Tech stack */}
            {project.technicalStack && project.technicalStack.length > 0 && (
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {getBilingualText({ en: 'Built With', zh: '技术栈' }, language)}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {project.technicalStack.map((tech: string, index: number) => (
                            <span
                                key={index}
                                className="text-sm px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Screenshots gallery */}
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
