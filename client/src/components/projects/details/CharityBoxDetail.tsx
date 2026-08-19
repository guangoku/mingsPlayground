import { getBilingualText } from "@/lib/utils";
import { type Language, type BilingualText } from "@/lib/types";
import { type ProjectData } from "@/lib/projects";
import { CHARITY_BOX_IMAGES } from "@/lib/projects/charity-box/images";
import { ArrowUpRight, PenLine } from "lucide-react";
import UnifiedImageGallery from "../modules/UnifiedImageGallery";
import AdvisoryCTA from "../AdvisoryCTA";

interface CharityBoxDetailProps {
    project: ProjectData;
    language: Language;
}

/**
 * CharityBox has no public URL - it lives inside WeChat - so the QR is the
 * way in rather than decoration. The page is about Ming's role; the
 * organisation's own record stays clearly attributed to the organisation.
 */
export default function CharityBoxDetail({ project, language }: CharityBoxDetailProps) {
    const t = (text: BilingualText) => getBilingualText(text, language);
    const allProjectImages = [...(project.detailImages || [])].filter(Boolean);

    return (
        <div className="max-w-4xl mx-auto space-y-10">
            {/* Role first, then what the thing is */}
            <header className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
                <div className="space-y-4">
                    {project.roleChip && (
                        <span className="inline-block rounded-full border border-emerald-200/70 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-700 dark:border-white/20 dark:bg-white/10 dark:text-emerald-200">
                            {t(project.roleChip)}
                        </span>
                    )}

                    <h1 className="detail-title">{t(project.title)}</h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                        {t(project.description)}
                    </p>

                    {project.period && (
                        <p className="text-sm text-muted-foreground/80">{t(project.period)}</p>
                    )}

                    {project.links?.podcast && (
                        <a
                            href={project.links.podcast.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 dark:text-emerald-300 underline-offset-4 hover:underline"
                        >
                            {t(project.links.podcast.label)}
                            <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                    )}
                </div>

                {/* The only door into the product */}
                <figure className="flex flex-col items-center gap-2 rounded-2xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-white/[0.06] md:w-48">
                    <img
                        src={CHARITY_BOX_IMAGES.miniProgramQr}
                        alt={t({ en: 'CharityBox mini-program QR code', zh: '益盒小程序二维码' })}
                        className="w-36 h-36 md:w-40 md:h-40"
                        loading="lazy"
                    />
                    <figcaption className="text-center text-xs leading-snug text-muted-foreground">
                        {project.links?.miniProgram && t(project.links.miniProgram)}
                    </figcaption>
                </figure>
            </header>

            {/* Ming's part */}
            {project.contribution && (
                <div className="grid gap-8 md:grid-cols-3 md:gap-10">
                    {project.contribution.map((block: any, i: number) => (
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

            {/* The organisation, clearly labelled as the organisation */}
            {project.orgNote && (
                <aside className="rounded-2xl border border-black/10 bg-black/[0.03] p-5 dark:border-white/10 dark:bg-white/[0.04]">
                    <p className="eyebrow text-muted-foreground">
                        {t({ en: 'About the organisation', zh: '关于这家机构' })}
                    </p>
                    <p className="mt-2 text-sm md:text-base leading-relaxed text-muted-foreground">
                        {t(project.orgNote)}
                    </p>
                </aside>
            )}

            {/* Piece in progress */}
            {project.upcoming && (
                <div className="flex items-start gap-3 border-t border-black/10 dark:border-white/10 pt-8">
                    <PenLine className="h-5 w-5 mt-0.5 flex-shrink-0 text-emerald-700 dark:text-emerald-300" />
                    <div>
                        <p className="font-display text-lg md:text-xl font-semibold tracking-tight">
                            {t(project.upcoming.title)}
                            <span className="ml-2 align-middle rounded-full bg-[#c7502a] px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-[#f3eeda]">
                                {t({ en: 'in progress', zh: '写作中' })}
                            </span>
                        </p>
                        <p className="mt-1 text-sm md:text-base text-muted-foreground leading-relaxed">
                            {t(project.upcoming.blurb)}
                        </p>
                    </div>
                </div>
            )}

            <AdvisoryCTA language={language} />

            {project.detailImages && project.detailImages.length > 0 && (
                <div className="space-y-4">
                    <h2 className="detail-section-title">
                        {t({ en: 'Campaign posters', zh: '宣传海报' })}
                    </h2>
                    <UnifiedImageGallery
                        images={project.detailImages}
                        alt={t(project.title)}
                        gridCols={4}
                        allProjectImages={allProjectImages}
                    />
                </div>
            )}
        </div>
    );
}
