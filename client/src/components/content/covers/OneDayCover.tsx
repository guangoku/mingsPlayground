import collage from "@assets/projects/one-day-a-week/collage.webp";

/**
 * Cover for "One Day a Week": torn-paper collage as the ground, motif over it.
 *
 * A written piece earns a drawn cover rather than a photo, and a wordless one
 * means no second headline competing with the card's own title. The motif is
 * the title - seven days, one of them given.
 */
export default function OneDayCover({ className = "" }: { className?: string }) {
    const days = [0, 1, 2, 3, 4, 5, 6];
    const x = (i: number) => 26 + i * 36;

    return (
        <div className={`relative flex items-center justify-center overflow-hidden ${className}`} aria-hidden>
            <img
                src={collage}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-[#0e2932]/[0.62] transition-colors duration-500 group-hover:bg-[#0e2932]/40" />

            <svg viewBox="0 0 300 150" className="relative w-[76%] max-w-[250px]" fill="none">
                {/* the week: six days outlined, one given */}
                {days.map((i) => {
                    const given = i === 2;
                    return given ? (
                        <g key={i}>
                            <rect
                                x={x(i)} y={52} width={28} height={38} rx={5}
                                fill="#5ec99a" stroke="#5ec99a" strokeWidth={2}
                            />
                            <path
                                d="M0 0 l4.5 4.5 L9.5 -4"
                                transform={`translate(${x(i) + 9} ${69})`}
                                stroke="#0e2932" strokeWidth={2.8}
                                strokeLinecap="round" strokeLinejoin="round"
                            />
                        </g>
                    ) : (
                        <rect
                            key={i} x={x(i)} y={52} width={28} height={38} rx={5}
                            stroke="#f3eeda" strokeWidth={2} opacity={0.6}
                        />
                    );
                })}

                {/* hanging rings, so the strip reads as a calendar */}
                {days.map((i) => (
                    <line
                        key={`r${i}`}
                        x1={x(i) + 14} y1={42} x2={x(i) + 14} y2={52}
                        stroke={i === 2 ? "#5ec99a" : "#f3eeda"} strokeWidth={2}
                        opacity={i === 2 ? 0.95 : 0.5}
                        strokeLinecap="round"
                    />
                ))}

                {/* the scale one day carries */}
                <path
                    d="M118 112 q14 12 32 12 q18 0 32 -12"
                    stroke="#f3eeda" strokeWidth={2} opacity={0.5}
                    strokeLinecap="round"
                />
                <path d="M176 118 l8 -5 l0 10 Z" fill="#f3eeda" opacity={0.5} />
            </svg>
        </div>
    );
}
