import { Palette, BookOpen, Code, Heart } from "lucide-react";
import { getBilingualText } from "@/lib/utils";
import { type Language } from "@/lib/types";
import { PROJECT_CATEGORIES, type ProjectCategory } from "@/lib/projects";

interface CategoryHeaderProps {
    category: ProjectCategory;
    language: Language;
}

const iconMap = {
    Palette,
    BookOpen,
    Code,
    Heart
};

export default function CategoryHeader({ category, language }: CategoryHeaderProps) {
    const categoryData = Object.values(PROJECT_CATEGORIES).find(cat => cat.id === category);

    if (!categoryData) return null;

    const IconComponent = iconMap[categoryData.icon as keyof typeof iconMap];
    const colorClass = 'text-emerald-600 dark:text-emerald-400';

    return (
        <div className="mb-6">
            <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-white/20 dark:bg-gray-800/50 backdrop-blur-sm border border-white/30 dark:border-gray-600/50">
                    <IconComponent className="h-5 w-5 text-white dark:text-gray-200" />
                </div>
                <h3 className="text-2xl font-bold text-white dark:text-gray-100 tracking-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                    {getBilingualText(categoryData.label, language)}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-white/40 to-transparent dark:from-gray-400/40"></div>
            </div>
        </div>
    );
}
