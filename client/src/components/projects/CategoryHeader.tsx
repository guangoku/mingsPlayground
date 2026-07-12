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

    const lede = (categoryData as { lede?: { en: string; zh: string } }).lede;

    return (
        <div className="mb-8">
            <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <IconComponent className="h-5 w-5 text-emerald-200" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-white tracking-tight">
                    {getBilingualText(categoryData.label, language)}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-white/30 to-transparent"></div>
            </div>
            {lede && (
                <p className="mt-3 text-sm md:text-base text-white/65 max-w-2xl">
                    {getBilingualText(lede, language)}
                </p>
            )}
        </div>
    );
}
