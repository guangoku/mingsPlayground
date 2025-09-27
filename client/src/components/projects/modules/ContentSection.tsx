import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { getBilingualText } from "@/lib/utils";
import { type Language } from "@/lib/types";

interface ContentSectionProps {
    title: { en: string; zh: string };
    content: string;
    language: Language;
    icon?: LucideIcon;
    className?: string;
}

export default function ContentSection({
    title,
    content,
    language,
    icon: Icon,
    className = ''
}: ContentSectionProps) {
    return (
        <Card className={className}>
            <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                    {Icon && <Icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />}
                    {getBilingualText(title, language)}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    {content}
                </p>
            </CardContent>
        </Card>
    );
}
