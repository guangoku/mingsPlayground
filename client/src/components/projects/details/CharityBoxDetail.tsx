import { getBilingualText } from "@/lib/utils";
import { type Language } from "@/lib/types";
import { type ProjectData } from "@/lib/projects";
import { Coins, BadgeCheck, Eye } from "lucide-react";
import { TagsSection } from "../modules";
import UnifiedImageGallery from "../modules/UnifiedImageGallery";
import MarkdownContent from "@/components/ui/MarkdownContent";
import AdvisoryCTA from "../AdvisoryCTA";
import ProjectFlow, { type FlowStep } from "../ProjectFlow";

interface CharityBoxDetailProps {
    project: ProjectData;
    language: Language;
}

const flowSteps: FlowStep[] = [
    {
        icon: Coins,
        title: { en: 'Give 1%', zh: '捐出 1%' },
        subtitle: { en: 'Simple, recurring, in WeChat', zh: '微信内简单定期捐赠' }
    },
    {
        icon: BadgeCheck,
        title: { en: 'Vetted charities', zh: '经筛选的公益组织' },
        subtitle: { en: 'Effective, high-impact', zh: '高效、高影响力' }
    },
    {
        icon: Eye,
        title: { en: 'Transparent impact', zh: '透明的影响' },
        subtitle: { en: 'See where it goes', zh: '看见善款去向' }
    }
];

export default function CharityBoxDetail({ project, language }: CharityBoxDetailProps) {
    const allProjectImages = [...(project.detailImages || [])].filter(Boolean);

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

            {/* About */}
            {project.about && (
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {getBilingualText(project.about.title, language)}
                    </h2>
                    <MarkdownContent content={project.about.content} language={language} />
                </div>
            )}

            {/* How it works */}
            <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {getBilingualText({ en: 'How it works', zh: '运作方式' }, language)}
                </h2>
                <ProjectFlow steps={flowSteps} language={language} />
            </div>

            {/* My Role */}
            {project.role && (
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {getBilingualText(project.role.title, language)}
                    </h2>
                    <MarkdownContent content={project.role.content} language={language} />
                </div>
            )}

            {/* Advisory positioning + contact */}
            <AdvisoryCTA language={language} />

            {/* Posters gallery */}
            {project.detailImages && project.detailImages.length > 0 && (
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {getBilingualText({ en: 'Posters', zh: '宣传海报' }, language)}
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
