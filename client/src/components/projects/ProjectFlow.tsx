import { Fragment } from "react";
import { ArrowRight, ArrowDown, type LucideIcon } from "lucide-react";
import { getBilingualText } from "@/lib/utils";
import { type Language, type BilingualText } from "@/lib/types";

export interface FlowStep {
    icon: LucideIcon;
    title: BilingualText;
    subtitle?: BilingualText;
}

interface ProjectFlowProps {
    steps: FlowStep[];
    language: Language;
}

// A small "how it works" diagram: steps laid out left-to-right on desktop,
// stacked top-to-bottom on mobile, with directional connectors between them.
export default function ProjectFlow({ steps, language }: ProjectFlowProps) {
    return (
        <div className="flex flex-col sm:flex-row sm:items-stretch gap-2 sm:gap-1">
            {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                    <Fragment key={index}>
                        <div className="flex-1 flex flex-col items-center text-center gap-2 rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-900/60 px-4 py-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                            <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-900/40 border border-emerald-100 dark:border-emerald-800 flex items-center justify-center">
                                <Icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                            </div>
                            <div className="font-semibold text-foreground">
                                {getBilingualText(step.title, language)}
                            </div>
                            {step.subtitle && (
                                <div className="text-sm text-muted-foreground">
                                    {getBilingualText(step.subtitle, language)}
                                </div>
                            )}
                        </div>
                        {index < steps.length - 1 && (
                            <div className="flex items-center justify-center text-emerald-500/60 dark:text-emerald-400/60 flex-shrink-0">
                                <ArrowRight className="h-5 w-5 hidden sm:block" />
                                <ArrowDown className="h-5 w-5 sm:hidden" />
                            </div>
                        )}
                    </Fragment>
                );
            })}
        </div>
    );
}
