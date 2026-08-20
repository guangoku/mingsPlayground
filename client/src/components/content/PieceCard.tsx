import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { getBilingualText } from "@/lib/utils";
import { type Language } from "@/lib/types";
import { type Piece, TOPIC_LABELS } from "@/lib/content/types";
import { COVER_ART } from "./covers";
import InkTile from "./InkTile";

interface PieceCardProps {
    piece: Piece;
    language: Language;
    /** "lead" = wide hero card, "feature" = standard card, "compact" = small row card */
    variant?: "lead" | "feature" | "compact";
    /** "dark" = on a dark band, "light" = on the pale band (still dark in dark mode) */
    tone?: "dark" | "light";
}

/** Remember where we were so the back button returns to the same spot. */
const rememberScroll = () => {
    sessionStorage.setItem("landing-scroll", String(window.scrollY));
};

export default function PieceCard({
    piece,
    language,
    variant = "feature",
    tone = "dark",
}: PieceCardProps) {
    const lead = variant === "lead";
    const compact = variant === "compact";
    const onDark = tone === "dark";
    const inProgress = piece.status === "in-progress";
    // An in-progress piece still links once it has somewhere to go; the badge
    // stays so the reader knows it is still being built.
    const linkable = Boolean(piece.href);
    const CoverArt = piece.coverArt ? COVER_ART[piece.coverArt] : undefined;
    const layout = piece.coverLayout ?? "banner";
    // "full" reads the text on the artwork, so it is always read on dark.
    const full = layout === "full";

    const shell = onDark
        ? "bg-white/[0.06] border-white/10 hover:border-white/25"
        : "bg-white/90 dark:bg-white/[0.06] border-black/5 dark:border-white/10 hover:border-black/15 dark:hover:border-white/25";
    const titleColor = full || onDark ? "text-white" : "text-foreground dark:text-white";
    const kickerColor = full
        ? "text-white/85"
        : onDark
            ? "text-white/80"
            : "text-foreground/70 dark:text-white/80";
    const blurbColor = full
        ? "text-white/80"
        : onDark
            ? "text-white/70"
            : "text-muted-foreground dark:text-white/70";
    const roleChip = full
        ? "bg-black/35 border-white/25 text-emerald-100 backdrop-blur-sm"
        : onDark
            ? "bg-white/10 border-white/20 text-emerald-200"
            : "bg-emerald-50 border-emerald-200/70 text-emerald-700 dark:bg-white/10 dark:border-white/20 dark:text-emerald-200";

    /** The artwork itself: a photo, a drawn cover, or the stand-in tile. */
    const artwork = (
        <>
            {CoverArt ? (
                <CoverArt className="w-full h-full" />
            ) : piece.cover ? (
                <>
                    <img
                        src={piece.cover}
                        alt={getBilingualText(piece.title, language)}
                        loading="lazy"
                        style={piece.coverPosition ? { objectPosition: piece.coverPosition } : undefined}
                        className="w-full h-full object-cover saturate-[0.78] transition-all duration-500 ease-out group-hover:scale-[1.04] group-hover:saturate-100"
                    />
                    {/* A resting veil keeps a busy cover from out-shouting the title. */}
                    <div
                        aria-hidden
                        className="absolute inset-0 bg-[hsl(196_45%_16%)]/[0.20] transition-opacity duration-500 group-hover:opacity-0"
                    />
                </>
            ) : (
                <InkTile className="w-full h-full" />
            )}
        </>
    );

    const badge = inProgress && (
        <span className="absolute top-3 right-3 z-20 rounded-full bg-[#c7502a] px-3 py-1 text-[11px] font-medium tracking-wide text-[#f3eeda]">
            {getBilingualText({ en: "in progress", zh: "施工中" }, language)}
        </span>
    );

    const bannerHeight = lead
        ? "h-56 md:h-full md:min-h-[19rem]"
        : compact
            ? "h-36"
            : "h-48";
    const stripHeight = lead ? "h-24 md:h-28" : compact ? "h-14" : "h-20";

    const media = (
        <div className={`relative overflow-hidden ${layout === "strip" ? stripHeight : bannerHeight}`}>
            {artwork}
            {badge}
        </div>
    );

    const pad = lead ? "p-6 md:p-8" : compact ? "p-4 md:p-5" : "p-5 md:p-6";
    const text = (
        <div className={full || layout === "strip" ? pad : `${pad}${lead ? " md:pb-4" : ""}`}>
            {piece.role && (
                <span
                    className={`inline-block mb-3 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest ${roleChip}`}
                >
                    {getBilingualText(piece.role, language)}
                </span>
            )}

            <h3
                className={`font-display font-semibold tracking-tight ${titleColor} ${lead ? "text-2xl md:text-4xl" : compact ? "text-lg" : "text-xl md:text-2xl"
                    }`}
                data-testid={`text-piece-title-${piece.slug}`}
            >
                {getBilingualText(piece.title, language)}
            </h3>

            {piece.kicker && (
                <p className={`mt-1.5 font-display italic ${kickerColor} ${lead ? "text-lg md:text-xl" : "text-[15px] md:text-base"}`}>
                    {getBilingualText(piece.kicker, language)}
                </p>
            )}

            {!compact && (
                <p className={`mt-3 leading-relaxed ${blurbColor} ${lead ? "text-sm md:text-base max-w-xl" : "text-sm"}`}>
                    {getBilingualText(piece.blurb, language)}
                </p>
            )}
        </div>
    );

    const linkWrap = (children: ReactNode) =>
        linkable ? (
            <Link to={piece.href!} onClick={rememberScroll} className="block">
                {children}
            </Link>
        ) : (
            <>{children}</>
        );

    // Footer sits outside the internal link so the external link is a real,
    // separately clickable anchor rather than an anchor inside an anchor.
    const footer = (
        <div
            className={`flex flex-wrap items-center gap-x-4 gap-y-2 ${lead ? "px-6 pb-6 md:px-8 md:pb-8" : compact ? "px-4 pb-4 md:px-5 md:pb-5" : "px-5 pb-5 md:px-6 md:pb-6"
                }`}
        >
            <div className="flex flex-wrap items-center gap-x-2">
                {piece.topics.map((topic, i) => (
                    <span
                        key={topic}
                        className={
                            full
                                ? "eyebrow text-emerald-200"
                                : "eyebrow text-[hsl(172_65%_45%)] dark:text-[hsl(172_65%_58%)]"
                        }
                    >
                        {i > 0 && <span className="mr-2 opacity-50">·</span>}
                        {getBilingualText(TOPIC_LABELS[topic], language)}
                    </span>
                ))}
            </div>

            {piece.externalUrl && (
                <a
                    href={piece.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline ${full || onDark ? "text-emerald-200" : "text-emerald-700 dark:text-emerald-200"
                        }`}
                    data-testid={`link-piece-external-${piece.slug}`}
                >
                    {piece.externalLabel ?? piece.externalUrl.replace(/^https?:\/\//, "")}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
            )}
        </div>
    );

    const cardShell = `group overflow-hidden rounded-2xl border backdrop-blur-md transition-all duration-300 ${shell} ${linkable ? "hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/25" : ""
        }`;

    // The cover is the card, and the text sits on it. Only safe for artwork
    // that carries no words of its own.
    if (full) {
        return (
            <article
                className={`${cardShell} relative isolate flex h-full flex-col ${lead ? "min-h-[22rem]" : compact ? "min-h-[15rem]" : "min-h-[19rem]"
                    }`}
                data-testid={`card-piece-${piece.slug}`}
            >
                <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
                    {artwork}
                    <div className="absolute inset-0 bg-[hsl(200_50%_9%)]/35" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(200_52%_7%)] via-[hsl(200_52%_8%)]/75 to-transparent" />
                </div>
                {badge}
                {linkWrap(<div className="flex-1" />)}
                <div className="mt-auto">
                    {linkWrap(text)}
                    {footer}
                </div>
            </article>
        );
    }

    return (
        <article
            className={`${cardShell} ${lead ? "" : "h-full flex flex-col"}`}
            data-testid={`card-piece-${piece.slug}`}
        >
            {lead && layout !== "strip" ? (
                <div className="grid md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
                    {linkWrap(media)}
                    <div className="flex flex-col justify-center">
                        {linkWrap(text)}
                        {footer}
                    </div>
                </div>
            ) : (
                <>
                    {linkWrap(
                        <>
                            {media}
                            {text}
                        </>
                    )}
                    <div className="mt-auto">{footer}</div>
                </>
            )}
        </article>
    );
}
