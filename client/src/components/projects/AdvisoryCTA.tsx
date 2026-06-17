import { HeartHandshake, FileSearch, GitBranch, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getBilingualText } from "@/lib/utils";
import { type Language, type BilingualText } from "@/lib/types";

interface AdvisoryCTAProps {
    language: Language;
    className?: string;
}

const CONTACT_EMAIL =
    "mailto:guangoku@gmail.com?subject=" + encodeURIComponent("Pro-bono tech advisory");

const services: { icon: typeof FileSearch; title: BilingualText; desc: BilingualText }[] = [
    {
        icon: FileSearch,
        title: { en: "Design & budget review before you sign", zh: "签约前的方案与预算评审" },
        desc: {
            en: "A second pair of eyes on a vendor's proposal, scope, and price — so you don't overpay or get locked into the wrong build.",
            zh: "在你与供应商签约前，帮你审视方案、范围与报价——避免多花钱，或被锁进错误的方案。",
        },
    },
    {
        icon: GitBranch,
        title: { en: "Tech decision reviews", zh: "技术决策评审" },
        desc: {
            en: "Build vs. buy, which tool or platform, or whether to build it at all.",
            zh: "自建还是采购、选哪个工具或平台，或者到底要不要做。",
        },
    },
    {
        icon: Sparkles,
        title: { en: "AI transformation", zh: "AI 转型" },
        desc: {
            en: "Where AI genuinely helps your work, and how to start small.",
            zh: "找到 AI 真正能帮上忙的地方，并从小处着手。",
        },
    },
];

export default function AdvisoryCTA({ language, className = "" }: AdvisoryCTAProps) {
    return (
        <div
            className={`rounded-xl border-2 border-blue-300 dark:border-blue-600/70 bg-blue-50 dark:bg-blue-950/40 p-5 md:p-6 ${className}`}
        >
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                    <HeartHandshake className="h-6 w-6 text-blue-700 dark:text-blue-300" />
                </div>
                <div className="flex-1 min-w-0">
                    <span className="inline-block text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/40 px-2.5 py-1 rounded-full">
                        {getBilingualText({ en: "Pro-bono advisory", zh: "公益咨询" }, language)}
                    </span>
                    <h4 className="mt-2 text-lg font-bold text-blue-900 dark:text-blue-200">
                        {getBilingualText(
                            { en: "Tech & AI advice for mission-driven teams", zh: "为公益团队提供技术与 AI 咨询" },
                            language
                        )}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-blue-950/80 dark:text-blue-100/80">
                        {getBilingualText(
                            {
                                en: "Run a small non-profit or social-impact team? I help with the technical calls that are hard to make alone — strongest on AI, but not limited to it.",
                                zh: "在运营小型公益或社会影响力团队？那些独自难以拍板的技术决策，我可以帮你——尤其擅长 AI，但不限于 AI。",
                            },
                            language
                        )}
                    </p>

                    <div className="mt-4 flex flex-col gap-3">
                        {services.map((s, i) => {
                            const Icon = s.icon;
                            return (
                                <div key={i} className="flex items-start gap-2.5">
                                    <Icon className="h-4 w-4 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                                    <div className="min-w-0">
                                        <span className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                                            {getBilingualText(s.title, language)}
                                        </span>
                                        <span className="text-sm text-blue-950/70 dark:text-blue-100/70">
                                            {" — "}{getBilingualText(s.desc, language)}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <p className="mt-4 text-xs leading-relaxed text-blue-900/60 dark:text-blue-200/60">
                        {getBilingualText(
                            {
                                en: "A second opinion and advisor — not a full-time hire or a software vendor. Pro-bono or low-fee, and bounded: one review to start, more if it helps, or a light ongoing role.",
                                zh: "我是第二意见与顾问——不是全职雇员，也不是软件供应商。无偿或低收费，且有边界：先做一次评审，有帮助再继续，或建立轻量的长期顾问关系。",
                            },
                            language
                        )}
                    </p>

                    <div className="mt-4 flex items-center gap-4 flex-wrap">
                        <Button
                            asChild
                            size="sm"
                            className="bg-blue-600 hover:bg-blue-700 text-white border-blue-600"
                        >
                            <a href={CONTACT_EMAIL}>
                                {getBilingualText(
                                    { en: "Get a second opinion", zh: "听听第二意见" },
                                    language
                                )}
                                <ArrowRight className="h-4 w-4 ml-2" />
                            </a>
                        </Button>
                        <span className="text-xs text-blue-900/55 dark:text-blue-200/55">
                            {getBilingualText(
                                {
                                    en: "Engineer & AI advisor @ 益盒 · contract & budget reviews for partner foundations",
                                    zh: "『益盒』工程师与 AI 顾问 · 为合作基金会做合同与预算评审",
                                },
                                language
                            )}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
