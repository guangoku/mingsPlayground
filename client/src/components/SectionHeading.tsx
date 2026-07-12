import { type ReactNode } from "react";
import { getBilingualText } from "@/lib/utils";
import { type Language, type BilingualText } from "@/lib/types";
import Reveal from "./Reveal";

interface SectionHeadingProps {
    eyebrow: BilingualText;
    title: BilingualText;
    lede?: BilingualText;
    language: Language;
    /** "dark" = light text on a dark section, "light" = dark text on a light section */
    tone: "dark" | "light";
    /** Accent color for the eyebrow + rule, as a CSS color string */
    accent: string;
    titleExtra?: ReactNode;
    testIdPrefix?: string;
}

export default function SectionHeading({
    eyebrow,
    title,
    lede,
    language,
    tone,
    accent,
    titleExtra,
    testIdPrefix,
}: SectionHeadingProps) {
    const titleColor = tone === "dark" ? "text-white" : "text-foreground";
    const ledeColor = tone === "dark" ? "text-white/75" : "text-muted-foreground";

    return (
        <Reveal className="text-center mb-10 md:mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
                <span className="h-px w-8" style={{ backgroundColor: accent, opacity: 0.7 }} />
                <span className="eyebrow" style={{ color: accent }}>
                    {getBilingualText(eyebrow, language)}
                </span>
                <span className="h-px w-8" style={{ backgroundColor: accent, opacity: 0.7 }} />
            </div>
            <div className="flex items-center justify-center gap-3 flex-wrap">
                <h2
                    className={`font-display text-4xl md:text-5xl font-bold tracking-tight ${titleColor}`}
                    data-testid={testIdPrefix ? `text-${testIdPrefix}-title` : undefined}
                >
                    {getBilingualText(title, language)}
                </h2>
                {titleExtra}
            </div>
            {lede && (
                <p
                    className={`mt-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${ledeColor}`}
                    data-testid={testIdPrefix ? `text-${testIdPrefix}-description` : undefined}
                >
                    {getBilingualText(lede, language)}
                </p>
            )}
        </Reveal>
    );
}
