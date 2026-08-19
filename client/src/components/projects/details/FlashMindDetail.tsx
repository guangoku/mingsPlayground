import { getBilingualText } from "@/lib/utils";
import { type Language, type BilingualText } from "@/lib/types";
import { type ProjectData } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";
import LivePreview from "@/components/ui/LivePreview";

interface FlashMindDetailProps {
    project: ProjectData;
    language: Language;
}

const LIVE_URL = "https://www.catch-and-keep.com/";

/**
 * Catch & Keep's own site explains the product and stays current, so this
 * page carries what it cannot: that Ming designed and built the whole thing
 * alone, and why.
 */
export default function FlashMindDetail({ project, language }: FlashMindDetailProps) {
    const t = (text: BilingualText) => getBilingualText(text, language);

    return (
        <div className="max-w-4xl mx-auto space-y-10">
            <header className="space-y-4">
                {project.roleChip && (
                    <span className="inline-block rounded-full border border-emerald-200/70 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-700 dark:border-white/20 dark:bg-white/10 dark:text-emerald-200">
                        {t(project.roleChip)}
                    </span>
                )}

                <h1 className="detail-title">{t(project.title)}</h1>

                {project.tagline && (
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                        {t(project.tagline)}
                    </p>
                )}

                <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-1">
                    <a
                        href={LIVE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-transform duration-300 hover:scale-[1.03] hover:bg-emerald-800"
                        data-testid="link-catch-and-keep-live"
                    >
                        {t({ en: 'Visit catch-and-keep.com', zh: '访问 catch-and-keep.com' })}
                        <ArrowUpRight className="h-4 w-4" />
                    </a>
                    {project.liveLabel && (
                        <span className="text-sm text-muted-foreground">{t(project.liveLabel)}</span>
                    )}
                </div>
            </header>

            <LivePreview
                url={LIVE_URL}
                label={t({ en: 'Open catch-and-keep.com', zh: '打开 catch-and-keep.com' })}
                fallbackImage={project.imageUrl}
                caption="catch-and-keep.com"
            />

            {project.founderStory && (
                <div className="grid gap-8 md:grid-cols-3 md:gap-10">
                    {project.founderStory.map((block: any, i: number) => (
                        <div key={i}>
                            <p className="eyebrow text-emerald-700 dark:text-emerald-300">{t(block.kicker)}</p>
                            <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight mt-1.5">
                                {t(block.title)}
                            </h2>
                            <p className="mt-2 text-sm md:text-base leading-relaxed text-muted-foreground">
                                {t(block.body)}
                            </p>
                        </div>
                    ))}
                </div>
            )}

            {/* Kept: the stack is evidence the marketing site has no reason to carry */}
            {project.technicalStack && project.technicalStack.length > 0 && (
                <div className="border-t border-black/10 dark:border-white/10 pt-8">
                    <p className="eyebrow text-muted-foreground">
                        {t({ en: 'Built with', zh: '技术栈' })}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                        {project.technicalStack.map((tech: string) => (
                            <span
                                key={tech}
                                className="rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-sm text-muted-foreground dark:border-white/10 dark:bg-white/[0.06]"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
