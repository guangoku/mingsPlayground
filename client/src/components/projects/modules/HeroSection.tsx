import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { getBilingualText } from "@/lib/utils";
import { type Language } from "@/lib/types";

interface HeroSectionProps {
    title: string;
    description: string;
    language: Language;
    liveUrl?: string;
    githubUrl?: string;
    liveButtonText?: { en: string; zh: string };
    codeButtonText?: { en: string; zh: string };
}

export default function HeroSection({
    title,
    description,
    language,
    liveUrl,
    githubUrl,
    liveButtonText = { en: 'Live Demo', zh: '在线演示' },
    codeButtonText = { en: 'View Code', zh: '查看代码' }
}: HeroSectionProps) {
    return (
        <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                {title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                {description}
            </p>
            {(liveUrl || githubUrl) && (
                <div className="flex justify-center gap-4">
                    {liveUrl && (
                        <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                <ExternalLink className="h-4 w-4" />
                                {getBilingualText(liveButtonText, language)}
                            </a>
                        </Button>
                    )}
                    {githubUrl && (
                        <Button variant="outline" asChild>
                            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                <Github className="h-4 w-4" />
                                {getBilingualText(codeButtonText, language)}
                            </a>
                        </Button>
                    )}
                </div>
            )}
        </div>
    );
}
