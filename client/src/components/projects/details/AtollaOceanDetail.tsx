import { getBilingualText } from "@/lib/utils";
import { type Language, type BilingualText } from "@/lib/types";
import { type ProjectData } from "@/lib/projects";
import { ATOLLA_OCEAN_CONSTANTS } from "@/lib/projects/atolla-ocean/constants";
import { ArrowUpRight } from "lucide-react";
import LivePreview from "@/components/ui/LivePreview";

interface AtollaOceanDetailProps {
    project: ProjectData;
    language: Language;
}

const LIVE_URL = "https://www.atollaocean.com/";

/**
 * Atolla's page on this site is about Ming's part in it - what she built, how
 * she validated it, where it stands. The product pitch lives on
 * atollaocean.com, embedded live below so it never goes stale here.
 */
export default function AtollaOceanDetail({ project, language }: AtollaOceanDetailProps) {
    const t = (text: BilingualText) => getBilingualText(text, language);

    return (
        <div className="max-w-4xl mx-auto space-y-10">
            {/* Who and what */}
            <header className="space-y-4">
                <span className="inline-block rounded-full border border-emerald-200/70 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-700 dark:border-white/20 dark:bg-white/10 dark:text-emerald-200">
                    {t({
                        en: `Founder · since ${ATOLLA_OCEAN_CONSTANTS.FOUNDED}`,
                        zh: `创始人 · ${ATOLLA_OCEAN_CONSTANTS.FOUNDED} 至今`,
                    })}
                </span>

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
                        data-testid="link-atolla-live"
                    >
                        {t({ en: "Visit atollaocean.com", zh: "访问 atollaocean.com" })}
                        <ArrowUpRight className="h-4 w-4" />
                    </a>
                    {project.liveLabel && (
                        <span className="text-sm text-muted-foreground">{t(project.liveLabel)}</span>
                    )}
                </div>

                {project.credentials && (
                    <p className="text-sm text-muted-foreground/80">{t(project.credentials)}</p>
                )}
            </header>

            {/* The product itself, live */}
            <LivePreview
                url={LIVE_URL}
                label={t({ en: "Open atollaocean.com", zh: "打开 atollaocean.com" })}
                fallbackImage={project.imageUrl}
                caption="atollaocean.com"
            />

            {/* Ming's part in it */}
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

            {/* Standing */}
            {project.facts && (
                <div className="flex flex-wrap gap-x-10 gap-y-5 border-t border-black/10 dark:border-white/10 pt-8">
                    {project.facts.map((fact: any, i: number) => (
                        <div key={i}>
                            <div className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                                {fact.value}
                            </div>
                            <div className="text-xs md:text-sm text-muted-foreground mt-0.5">{t(fact.label)}</div>
                        </div>
                    ))}
                </div>
            )}

            {project.whyMe && (
                <p className="text-base md:text-lg leading-relaxed max-w-3xl">{t(project.whyMe)}</p>
            )}
        </div>
    );
}
