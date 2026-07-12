import { Badge } from "@/components/ui/badge";
import { getBilingualText } from "@/lib/utils";
import { PROJECT_TAGS } from "@/lib/projects";
import { type Language } from "@/lib/types";

interface TagProps {
    tagId: string;
    language: Language;
    size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-2'
};

export default function Tag({ tagId, language, size = 'sm' }: TagProps) {
    // Find the tag definition
    const tagData = Object.values(PROJECT_TAGS).find(tag => tag.id === tagId);
    if (!tagData) return null;

    return (
        <Badge
            variant="outline"
            className={`${sizeClasses[size]} rounded-full border-emerald-600/30 dark:border-emerald-400/30 text-emerald-800 dark:text-emerald-300 bg-emerald-50/70 dark:bg-emerald-900/20 font-medium`}
        >
            {getBilingualText(tagData.label, language)}
        </Badge>
    );
}
