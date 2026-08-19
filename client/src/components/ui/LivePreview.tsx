import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface LivePreviewProps {
    /** Site to embed. Use the final URL to avoid a redirect inside the frame. */
    url: string;
    /** Accessible name for the link wrapping the preview. */
    label: string;
    /** Shown instead of the frame if it fails to load, or when motion/data is reduced. */
    fallbackImage: string;
    /** Small caption rendered over the frame, e.g. "atollaocean.com" */
    caption?: string;
    className?: string;
}

/** Widths we render the embedded site at, before scaling it into the container. */
const DESKTOP_WIDTH = 1440;
const MOBILE_WIDTH = 430;
/** Frame height as a share of its render width. Narrow layouts run taller. */
const DESKTOP_ASPECT = 0.58;
const MOBILE_ASPECT = 1.05;

/**
 * A live, scaled-down view of an external site, wrapped in a link to it.
 * The frame itself is inert - pointer events are off and it is hidden from
 * assistive tech - so the whole block behaves as one link rather than a
 * page-within-a-page. Falls back to a static image if the frame cannot load.
 */
export default function LivePreview({
    url,
    label,
    fallbackImage,
    caption,
    className = "",
}: LivePreviewProps) {
    const boxRef = useRef<HTMLDivElement>(null);
    const loadedRef = useRef(false);
    const [width, setWidth] = useState(0);
    const [failed, setFailed] = useState(false);
    const [loaded, setLoaded] = useState(false);

    // Track the container so the frame can be scaled to fit it.
    useEffect(() => {
        const el = boxRef.current;
        if (!el) return;
        const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
        ro.observe(el);
        setWidth(el.getBoundingClientRect().width);
        return () => ro.disconnect();
    }, []);

    // If the frame never loads, keep the still image rather than an empty box.
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!loadedRef.current) setFailed(true);
        }, 8000);
        return () => clearTimeout(timer);
    }, []);

    const handleLoad = () => {
        loadedRef.current = true;
        setLoaded(true);
    };

    const isNarrow = Boolean(width) && width < 768;
    const renderWidth = isNarrow ? MOBILE_WIDTH : DESKTOP_WIDTH;
    const scale = width ? width / renderWidth : 1;
    const height = renderWidth * (isNarrow ? MOBILE_ASPECT : DESKTOP_ASPECT);

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`group relative block overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 shadow-xl shadow-black/15 transition-shadow duration-300 hover:shadow-2xl ${className}`}
            data-testid="live-preview"
        >
            <div ref={boxRef} className="relative w-full" style={{ height: height * scale }}>
                {!failed && width > 0 && (
                    <iframe
                        src={url}
                        title={label}
                        loading="lazy"
                        tabIndex={-1}
                        aria-hidden="true"
                        onLoad={handleLoad}
                        onError={() => setFailed(true)}
                        sandbox="allow-scripts allow-same-origin"
                        className="absolute left-0 top-0 origin-top-left border-0 pointer-events-none"
                        style={{ width: renderWidth, height, transform: `scale(${scale})` }}
                    />
                )}

                {/* Still image sits underneath until the frame paints, and stays if it never does. */}
                <img
                    src={fallbackImage}
                    alt=""
                    aria-hidden="true"
                    className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-500 ${!failed && loaded ? "opacity-0" : "opacity-100"
                        }`}
                />
            </div>

            {caption && (
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-black/65 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm transition-colors group-hover:bg-black/80">
                    {caption}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
            )}
        </a>
    );
}
