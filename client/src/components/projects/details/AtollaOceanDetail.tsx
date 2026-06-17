import { getBilingualText } from "@/lib/utils";
import { type Language } from "@/lib/types";
import { type ProjectData } from "@/lib/projects";
import { ExternalLink, Video, Fish, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TagsSection } from "../modules";
import UnifiedImageGallery from "../modules/UnifiedImageGallery";
import MarkdownContent from "@/components/ui/MarkdownContent";
import ProjectFlow, { type FlowStep } from "../ProjectFlow";

interface AtollaOceanDetailProps {
    project: ProjectData;
    language: Language;
}

const flowSteps: FlowStep[] = [
    {
        icon: Video,
        title: { en: 'Dump in your footage', zh: '丢进你的影像' },
        subtitle: { en: 'Photos & GoPro video', zh: '照片与 GoPro 视频' }
    },
    {
        icon: Fish,
        title: { en: 'AI identifies marine life', zh: 'AI 识别海洋生物' },
        subtitle: { en: 'Species, moments, fun facts', zh: '物种、精彩瞬间、趣味知识' }
    },
    {
        icon: BookOpen,
        title: { en: 'Get a dive story', zh: '得到潜水故事' },
        subtitle: { en: 'Structured & shareable', zh: '结构化、可分享' }
    }
];

export default function AtollaOceanDetail({ project, language }: AtollaOceanDetailProps) {
    const allProjectImages = [...(project.detailImages || [])].filter(Boolean);

    const sections = [project.problem, project.solution, project.approach, project.mission].filter(Boolean);

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
                            {getBilingualText({ en: 'Visit atollaocean.com', zh: '访问 atollaocean.com' }, language)}
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

            {/* Screenshots gallery (shows once real screenshots are added) */}
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
