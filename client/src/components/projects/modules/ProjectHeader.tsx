import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { getBilingualText } from "@/lib/utils";
import { type Language } from "@/lib/types";

interface ProjectHeaderProps {
    title: string;
    language: Language;
    onBack: () => void;
    backText?: { en: string; zh: string };
}

export default function ProjectHeader({
    title,
    language,
    onBack,
    backText = { en: 'Back to Projects', zh: '返回项目' }
}: ProjectHeaderProps) {
    return (
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center gap-4">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={onBack}
                        className="flex items-center gap-2"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        {getBilingualText(backText, language)}
                    </Button>
                    <div className="h-6 w-px bg-gray-300 dark:bg-gray-600" />
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {title}
                    </h1>
                </div>
            </div>
        </div>
    );
}
