import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { getBilingualText } from "@/lib/utils";
import { type Language } from "@/lib/types";

interface ProjectInfoItem {
    icon: LucideIcon;
    label: { en: string; zh: string };
    value: string;
}

interface ProjectInfoGridProps {
    items: ProjectInfoItem[];
    language: Language;
    columns?: 1 | 2 | 3 | 4;
}

export default function ProjectInfoGrid({
    items,
    language,
    columns = 3
}: ProjectInfoGridProps) {
    const gridCols = {
        1: 'grid-cols-1',
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-3',
        4: 'grid-cols-1 md:grid-cols-4'
    };

    return (
        <div className={`grid ${gridCols[columns]} gap-6`}>
            {items.map((item, index) => (
                <Card key={index}>
                    <CardContent className="p-6 text-center">
                        <item.icon className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                            {getBilingualText(item.label, language)}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.value}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
