import { Heart, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getBilingualText } from "@/lib/utils";
import { type Language } from "@/lib/types";

interface AdvisoryCTAProps {
    language: Language;
    className?: string;
}

const CONTACT_EMAIL =
    "mailto:guangoku@gmail.com?subject=" + encodeURIComponent("Mission-driven work");

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
                            { en: "How I show up for mission-driven work", zh: "我如何参与公益" },
                            language
                        )}
                    </h4>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                        {getBilingualText(
                            {
                                en: "I keep my involvement small but consistent — building and advising on AI at 益盒, the occasional technical review for a partner foundation, and steady monthly donations. I'm not full-time in this world; I just keep one useful thread always running.",
                                zh: "我让自己的参与保持小而稳：在『益盒』做开发与 AI 顾问，偶尔为合作基金会做技术评审，并持续每月捐赠。我不是全职做公益，只是让一条有用的线一直运转着。",
                            },
                            language
                        )}
                    </p>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        {getBilingualText(
                            {
                                en: "If that's the kind of help your team needs, get in touch.",
                                zh: "如果这正是你的团队需要的帮助，欢迎联系我。",
                            },
                            language
                        )}
                    </p>
                    <Button asChild size="sm" variant="outline" className="mt-4">
                        <a href={CONTACT_EMAIL}>
                            <Mail className="h-4 w-4 mr-2" />
                            {getBilingualText({ en: "Get in touch", zh: "联系我" }, language)}
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );
}
