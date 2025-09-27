import { Card, CardContent } from "@/components/ui/card";
import { getBilingualText } from "@/lib/utils";
import { type Language } from "@/lib/types";

interface CodeSnippetProps {
    code: string;
    language: Language;
    title?: { en: string; zh: string };
    languageType?: string;
    className?: string;
}

export default function CodeSnippet({
    code,
    language,
    title = { en: 'Code Highlights', zh: '代码亮点' },
    languageType = 'javascript',
    className = ''
}: CodeSnippetProps) {
    return (
        <Card className={className}>
            <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {getBilingualText(title, language)}
                </h2>
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-green-400 text-sm">
                        <code className={`language-${languageType}`}>{code}</code>
                    </pre>
                </div>
            </CardContent>
        </Card>
    );
}
