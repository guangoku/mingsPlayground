import { Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getBilingualText } from "@/lib/utils";
import { type Language } from "@/lib/types";

interface AdvisoryCTAProps {
    language: Language;
    className?: string;
}

const CONTACT_EMAIL =
    "mailto:guangoku@gmail.com?subject=" + encodeURIComponent("Technical & AI advisory");

export default function AdvisoryCTA({ language, className = "" }: AdvisoryCTAProps) {
    return (
        <div
            className={`rounded-xl border border-emerald-200 dark:border-emerald-700 bg-white/95 dark:bg-gray-800/95 p-5 md:p-6 ${className}`}
            style={{ backdropFilter: "blur(10px)" }}
        >
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
                    <Heart className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-emerald-800 dark:text-emerald-300">
                        {getBilingualText(
                            { en: "Technical & AI advice for mission-driven teams", zh: "为公益团队提供技术与 AI 咨询" },
                            language
                        )}
                    </h4>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                        {getBilingualText(
                            {
                                en: "Non-profits face real technical decisions — build vs. buy, whether a vendor's quote is fair, whether an AI project will actually work — and they're costly to get wrong. I give you a senior engineer's honest read, so you can decide with confidence.",
                                zh: "公益组织也要面对真实的技术决策——自建还是采购、供应商的报价是否合理、某个 AI 项目到底行不行——而做错的代价往往很高。我会给你一位资深工程师的坦诚判断，让你更有把握地做决定。",
                            },
                            language
                        )}
                    </p>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                        {getBilingualText(
                            {
                                en: "Start with a single review — many teams just need one good call. If it helps, we can do a few more, or an ongoing advisory role as the work grows.",
                                zh: "可以先从一次评审开始——很多团队只需要一个靠谱的判断。如果有帮助，我们可以多做几次，或随着工作深入建立长期顾问关系。",
                            },
                            language
                        )}
                    </p>
                    <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                        {getBilingualText(
                            {
                                en: "Sole engineer & AI advisor at 益盒 · technical reviews for a partner foundation.",
                                zh: "『益盒』唯一工程师与 AI 顾问 · 为合作基金会做技术评审。",
                            },
                            language
                        )}
                    </p>
                    <Button asChild size="sm" className="mt-4">
                        <a href={CONTACT_EMAIL}>
                            {getBilingualText({ en: "Get a technical read", zh: "获取一次技术判断" }, language)}
                            <ArrowRight className="h-4 w-4 ml-2" />
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );
}
