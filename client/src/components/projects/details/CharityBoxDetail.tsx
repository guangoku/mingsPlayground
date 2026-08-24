import { getBilingualText } from "@/lib/utils";
import { type Language, type BilingualText } from "@/lib/types";
import { type ProjectData } from "@/lib/projects";
import { CHARITY_BOX_IMAGES } from "@/lib/projects/charity-box/images";
import { ArrowRight, ArrowUpRight, PenLine } from "lucide-react";
import { Link } from "react-router-dom";
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

            {/* The write-up of this work, stacked as its own card - the page's
                second act, not a footnote */}
            {project.writeUp && (
                <Link
                    to={project.writeUp.href}
                    className="group block rounded-2xl border border-emerald-600/25 bg-white/85 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-600/60 hover:shadow-xl hover:shadow-black/10 dark:border-emerald-300/25 dark:bg-white/[0.05] dark:hover:border-emerald-300/60 md:p-8"
                    data-testid="link-charity-box-writeup"
                >
                    <p className="eyebrow flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                        <PenLine className="h-4 w-4" />
                        {t({ en: 'The write-up', zh: '工作复盘' })}
                    </p>
                    <p className="font-display mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                        {t(project.writeUp.title)}
                    </p>
                    {project.writeUp.kicker && (
                        <p className="font-display mt-2 text-lg italic text-foreground/80 md:text-xl">
                            {t(project.writeUp.kicker)}
                        </p>
                    )}
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                        {t(project.writeUp.blurb)}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 underline-offset-4 group-hover:underline dark:text-emerald-300">
                        {t({ en: 'Read the piece', zh: '读这一篇' })}
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                </Link>
            )}

            <AdvisoryCTA language={language} />

        </div>
    );
}
