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
            className={`rounded-2xl border border-white/15 bg-white/[0.07] backdrop-blur-md shadow-lg shadow-black/20 p-6 md:p-8 ${className}`}
        >
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                    <HeartHandshake className="h-6 w-6 text-emerald-200" />
                </div>
                <div className="flex-1 min-w-0">
                    <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-200 bg-white/10 border border-white/15 px-3 py-1 rounded-full">
                        {getBilingualText({ en: "Pro-bono advisory", zh: "公益咨询" }, language)}
                    </span>
                    <h4 className="mt-3 font-display text-xl md:text-2xl font-semibold text-white">
                        {getBilingualText(
                            { en: "Tech & AI advice for mission-driven teams", zh: "为公益团队提供技术与 AI 咨询" },
                            language
                        )}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
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
                                    <Icon className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-300" />
                                    <div className="min-w-0">
                                        <span className="text-sm font-semibold text-white">
                                            {getBilingualText(s.title, language)}
                                        </span>
                                        <span className="text-sm text-white/60">
                                            {" — "}{getBilingualText(s.desc, language)}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <p className="mt-4 text-xs leading-relaxed text-white/50">
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
                            className="rounded-full px-5 bg-white text-emerald-900 border-white hover:bg-emerald-50 font-semibold shadow-md transition-transform duration-300 hover:scale-[1.03]"
                        >
                            <a href={CONTACT_EMAIL}>
                                {getBilingualText(
                                    { en: "Let's talk", zh: "聊聊吧" },
                                    language
                                )}
                                <ArrowRight className="h-4 w-4 ml-2" />
                            </a>
                        </Button>
                        <span className="text-xs text-white/50">
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
