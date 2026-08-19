/**
 * Stand-in cover for a piece that has no artwork yet. Uses the charcoal /
 * vermillion ink palette of the gap-year piece, so the tile previews the
 * look of what's coming rather than showing an empty frame.
 */
export default function InkTile({ className = "" }: { className?: string }) {
    return (
        <div
            className={`flex items-center justify-center bg-[#2a2a27] ${className}`}
            aria-hidden
        >
            <svg
                viewBox="0 0 300 190"
                className="w-1/2 max-w-[190px]"
                fill="none"
                stroke="#f3eeda"
                strokeWidth={6}
                strokeLinecap="round"
            >
                <path d="M60 75 C120 35 150 125 90 125 C40 125 50 55 110 75 C160 91 130 145 80 125" />
                <path
                    d="M170 95 C200 85 228 87 248 93 M238 79 C246 87 250 91 256 94 C248 98 244 103 239 108"
                    stroke="#c7502a"
                />
            </svg>
        </div>
    );
}
