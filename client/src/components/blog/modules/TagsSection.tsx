import { Badge } from "@/components/ui/badge";
import { getBilingualArray } from "@/lib/utils";
import { type Language, type BilingualArray } from "@/lib/types";

interface TagsSectionProps {
    tags: BilingualArray;
    language: Language;
    className?: string;
}

export default function TagsSection({
    tags,
    language,
    className = ''
}: TagsSectionProps) {
    if (!tags || tags.en.length === 0) return null;

    const tagList = getBilingualArray(tags, language);

    return (
        <div className={`flex flex-wrap gap-2 justify-center ${className}`}>
            {tagList.map((tag, index) => (
                <Badge
                    key={index}
                    variant="outline"
                    className="border-emerald-700 dark:border-emerald-400 text-emerald-700 dark:text-emerald-400 text-sm px-3 py-1"
                >
                    #{tag}
                </Badge>
            ))}
        </div>
    );
}
