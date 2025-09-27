import { Badge } from "@/components/ui/badge";
import { getBilingualText } from "@/lib/utils";
import { type Language } from "@/lib/types";
import { PROJECT_TAGS, PROJECT_CATEGORIES } from "@/lib/projects/shared/constants";

interface TagsSectionProps {
    tags: string[];
    language: Language;
    className?: string;
}

export default function TagsSection({
    tags,
    language,
    className = ''
}: TagsSectionProps) {
    if (!tags || tags.length === 0) return null;

    // Helper function to get the localized label for a tag
    const getTagLabel = (tagId: string) => {
        // Check if it's a category first
        const category = Object.values(PROJECT_CATEGORIES).find(cat => cat.id === tagId);
        if (category) {
            return getBilingualText(category.label, language);
        }

        // Check if it's a content tag
        const contentTag = Object.values(PROJECT_TAGS).find(tag => tag.id === tagId);
        if (contentTag) {
            return getBilingualText(contentTag.label, language);
        }

        // Fallback to the original tag ID if not found
        return tagId;
    };

    return (
        <div className={`flex flex-wrap gap-2 justify-center ${className}`}>
            {tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="border-emerald-700 dark:border-emerald-400 text-emerald-700 dark:text-emerald-400 text-sm px-3 py-1">
                    {getTagLabel(tag)}
                </Badge>
            ))}
        </div>
    );
}
