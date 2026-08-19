import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { getBilingualText } from "@/lib/utils";

/** Reached by the catch-all route in App. Keeps the ocean palette so a wrong
 *  URL still lands somewhere that looks like the site. */
export default function NotFound() {
    const { language } = useLanguage();
    const t = (text: { en: string; zh: string }) => getBilingualText(text, language);

    return (
        <div className="min-h-screen flex items-center justify-center px-6 hero-bg grain">
            <div className="text-center max-w-md">
                <p className="eyebrow text-[hsl(15_85%_65%)]">404</p>

                <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight text-white">
                    {t({ en: 'Nothing here', zh: '这里什么也没有' })}
                </h1>

                <p className="mt-4 text-base md:text-lg text-white/70 leading-relaxed">
                    {t({
                        en: 'This page moved, or never existed. The way back is below.',
                        zh: '这个页面搬走了，或者从来就不存在。下面是回去的路。',
                    })}
                </p>

                <Link
                    to="/"
                    className="mt-8 inline-block rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[hsl(210_50%_18%)] shadow-md transition-transform duration-300 hover:scale-[1.03]"
                >
                    {t({ en: "Back to Ming's Playground", zh: '回到关关的游乐场' })}
                </Link>
            </div>
        </div>
    );
}
