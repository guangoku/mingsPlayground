import { type Language } from "@/lib/types";
import { getBilingualText } from "@/lib/utils";

interface NotionContentProps {
    content: string;
    language: Language;
}

export default function NotionContent({ content, language }: NotionContentProps) {
    return (
        <div className="space-y-6">
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {getBilingualText({ en: 'Notion Content', zh: 'Notion内容' }, language)}
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                    {getBilingualText({
                        en: 'This content is loaded from Notion. The actual Notion integration will be implemented in Phase 5.',
                        zh: '此内容从Notion加载。实际的Notion集成将在第5阶段实现。'
                    }, language)}
                </p>
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border">
                    <pre className="text-sm text-gray-600 dark:text-gray-400">{content}</pre>
                </div>
            </div>
        </div>
    );
}
