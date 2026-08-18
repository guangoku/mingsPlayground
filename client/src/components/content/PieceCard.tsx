import { Link } from "react-router-dom";
import { getBilingualText } from "@/lib/utils";
import { type Language } from "@/lib/types";
import { type Piece, TOPIC_LABELS } from "@/lib/content/types";
import InkTile from "./InkTile";

interface PieceCardProps {
    piece: Piece;
    language: Language;
    /** "feature" = large card for the flagship shelf, "compact" = smaller row card */
    variant?: "feature" | "compact";
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
    const feature = variant === "feature";
    const onDark = tone === "dark";
    const inProgress = piece.status === "in-progress";

    const shell = onDark
        ? "bg-white/[0.06] border-white/10 hover:border-white/25"
        : "bg-white/90 dark:bg-white/[0.06] border-black/5 dark:border-white/10 hover:border-black/15 dark:hover:border-white/25";
    const titleColor = onDark ? "text-white" : "text-foreground dark:text-white";
    const kickerColor = onDark ? "text-white/55" : "text-muted-foreground dark:text-white/55";
    const blurbColor = onDark ? "text-white/70" : "text-muted-foreground dark:text-white/70";

    const body = (
        <>
            <div className={`relative overflow-hidden ${feature ? "h-48" : "h-36"}`}>
                {piece.cover ? (
                    <img
                        src={piece.cover}
                        alt={getBilingualText(piece.title, language)}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                ) : (
                    <InkTile className="w-full h-full" />
                )}
                {inProgress && (
                    <span className="absolute top-3 right-3 rounded-full bg-[#c7502a] px-3 py-1 text-[11px] font-medium tracking-wide text-[#f3eeda]">
                        {getBilingualText({ en: "in progress", zh: "施工中" }, language)}
                    </span>
                )}
            </div>

            <div className={feature ? "p-5 md:p-6" : "p-4 md:p-5"}>
                <h3
                    className={`font-display font-semibold tracking-tight ${titleColor} ${feature ? "text-xl md:text-2xl" : "text-lg"
                        }`}
                    data-testid={`text-piece-title-${piece.slug}`}
                >
                    {getBilingualText(piece.title, language)}
                </h3>

                {piece.kicker && (
                    <p className={`mt-1 font-display italic text-sm ${kickerColor}`}>
                        {getBilingualText(piece.kicker, language)}
                    </p>
                )}

                {feature && (
                    <p className={`mt-3 text-sm leading-relaxed ${blurbColor}`}>
                        {getBilingualText(piece.blurb, language)}
                    </p>
                )}

                <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1">
                    {piece.topics.map((topic, i) => (
                        <span key={topic} className="eyebrow text-[hsl(172_65%_45%)] dark:text-[hsl(172_65%_58%)]">
                            {i > 0 && <span className="mr-2 opacity-50">·</span>}
                            {getBilingualText(TOPIC_LABELS[topic], language)}
                        </span>
                    ))}
                </div>
            </div>
        </>
    );

    const shellClass = `group block overflow-hidden rounded-2xl border backdrop-blur-md transition-all duration-300 ${shell}`;

    // An unpublished piece is shown, but not yet clickable.
    if (inProgress || !piece.href) {
        return (
            <div className={shellClass} data-testid={`card-piece-${piece.slug}`}>
                {body}
            </div>
        );
    }

    return (
        <Link
            to={piece.href}
            onClick={rememberScroll}
            className={`${shellClass} hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/25`}
            data-testid={`card-piece-${piece.slug}`}
        >
            {body}
        </Link>
    );
}
