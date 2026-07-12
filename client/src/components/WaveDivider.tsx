/**
 * Wave-shaped seam rendered at the bottom edge of a section, filled with the
 * NEXT section's flat top color (a --seam-* token), so the following section
 * appears to lap up into this one like water. The host section must be
 * `relative`; the next section's background must start with that flat color.
 */
interface WaveDividerProps {
    /** CSS color of the next section's top, e.g. "hsl(var(--seam-blog))" */
    fill: string;
    className?: string;
}

export default function WaveDivider({ fill, className = "" }: WaveDividerProps) {
    return (
        <div
            aria-hidden
            className={`absolute bottom-0 left-0 right-0 pointer-events-none z-[3] ${className}`}
        >
            <svg
                viewBox="0 0 1440 64"
                preserveAspectRatio="none"
                className="block w-full h-8 sm:h-12 md:h-16 -mb-1"
            >
                <path
                    fill={fill}
                    d="M0,64 L0,38 C110,14 260,6 430,18 C600,30 700,50 870,46 C1040,42 1180,14 1310,12 C1360,11 1410,16 1440,24 L1440,64 Z"
                />
            </svg>
        </div>
    );
}
