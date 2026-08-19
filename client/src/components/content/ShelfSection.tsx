import { type ReactNode } from "react";
import { type Language } from "@/lib/types";
import { type Shelf } from "@/lib/content/types";
import { getPieces } from "@/lib/content/registry";
import PieceCard from "./PieceCard";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";

interface ShelfSectionProps {
    shelf: Shelf;
    language: Language;
    /** id used for in-page navigation */
    id: string;
    /** background utility class for this band, e.g. "projects-bg" */
    bgClass: string;
    /** extra classes for texture layers the band already uses */
    textureClass?: string;
    tone: "dark" | "light";
    accent: string;
    /** card size for this shelf */
    variant?: "feature" | "compact";
    /** wave seam colour of the NEXT section */
    seamFill: string;
    /** rendered under the cards, e.g. the advisory panel */
    children?: ReactNode;
    lightShafts?: boolean;
}

/**
 * One band of the landing page: a curated shelf of pieces. Which pieces
 * appear, and in what order, comes from the shelf data - not from this file.
 */
export default function ShelfSection({
    shelf,
    language,
    id,
    bgClass,
    textureClass = "",
    tone,
    accent,
    variant = "feature",
    seamFill,
    children,
    lightShafts = false,
}: ShelfSectionProps) {
    const pieces = getPieces(shelf.pieces);
    // "lead" puts the first piece in a wide card of its own, with the rest below.
    const isLead = shelf.layout === "lead" && pieces.length > 0;
    const [leadPiece, ...restPieces] = pieces;
    const gridPieces = isLead ? restPieces : pieces;
    const grid =
        variant === "feature"
            ? isLead
                ? "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7"
                : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7"
            : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6";

    return (
        <section
            className={`relative py-16 md:py-24 pb-24 md:pb-32 px-6 ${bgClass} grain ${textureClass}`}
            id={id}
        >
            {lightShafts && <div aria-hidden className="light-shafts" />}
            <div className="relative z-[2] max-w-6xl mx-auto">
                <SectionHeading
                    eyebrow={shelf.eyebrow}
                    title={shelf.title}
                    lede={shelf.lede}
                    language={language}
                    tone={tone}
                    accent={accent}
                    testIdPrefix={`shelf-${shelf.key}`}
                />

                {isLead && (
                    <Reveal className="mb-6 md:mb-7">
                        <PieceCard piece={leadPiece} language={language} variant="lead" tone={tone} />
                    </Reveal>
                )}

                <div className={grid}>
                    {gridPieces.map((piece, i) => (
                        <Reveal key={piece.slug} delay={0.08 * i} className="h-full">
                            <PieceCard
                                piece={piece}
                                language={language}
                                variant={variant}
                                tone={tone}
                            />
                        </Reveal>
                    ))}
                </div>

                {children}
            </div>

            <WaveDivider fill={seamFill} />
        </section>
    );
}
