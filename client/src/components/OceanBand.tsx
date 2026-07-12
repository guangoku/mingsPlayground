import WaveDivider from "./WaveDivider";

/**
 * Decorative reef band for detail pages: a strip of the deep lagoon-teal
 * (same treatment as the landing projects section — light shafts, doodles)
 * that laps into the sea-glass page below via a wave seam. Ties interior
 * pages to the landing page's ocean journey.
 */
interface OceanBandProps {
    className?: string;
}

export default function OceanBand({ className = "" }: OceanBandProps) {
    return (
        <div aria-hidden className={`relative projects-bg sea-motifs ${className}`}>
            <div className="light-shafts" />
            <WaveDivider fill="hsl(var(--seam-detail))" />
        </div>
    );
}
