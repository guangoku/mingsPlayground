import { Palette, BookOpen, Code, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PROJECT_CATEGORIES, type ProjectCategory } from "@/lib/projects";

interface ProjectTypeIndicatorProps {
    category: ProjectCategory;
    size?: 'sm' | 'md' | 'lg';
}

const iconMap = {
    Palette,
    BookOpen,
    Code,
    Heart
};

const sizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
};

const badgeSizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-2'
};

export default function ProjectTypeIndicator({ category, size = 'md' }: ProjectTypeIndicatorProps) {
    const categoryData = Object.values(PROJECT_CATEGORIES).find(cat => cat.id === category);

    if (!categoryData) return null;

    const IconComponent = iconMap[categoryData.icon as keyof typeof iconMap];
    const iconSize = sizeClasses[size];
    const badgeSize = badgeSizeClasses[size];

    const badgeClass = 'bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700';

    return (
        <Badge
            variant="secondary"
            className={`${badgeSize} ${badgeClass}`}
        >
            <IconComponent className={`${iconSize} mr-1`} />
            {categoryData.label.en}
        </Badge>
    );
}
