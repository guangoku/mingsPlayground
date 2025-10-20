import { useEffect, useState } from 'react';
import { fetchNotionPage, type NotionPage } from '@/lib/blog/notion/api';
import { getBilingualText } from '@/lib/utils';
import { type Language } from '@/lib/types';
import { type BlogPost } from '@/lib/blog';

interface NotionContentProps {
    post: BlogPost;
    language: Language;
}

export default function NotionContent({ post, language }: NotionContentProps) {
    const [notionPage, setNotionPage] = useState<NotionPage | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (post.type === 'notion' && post.notionContent?.pageId) {
            fetchNotionPage(post.notionContent.pageId)
                .then((data) => {
                    setNotionPage(data);
                    setLoading(false);
                })
                .catch((err) => {
                    setError(err.message);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [post]);

    if (loading) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400">
                        {language === 'en' ? 'Loading Notion content...' : '加载 Notion 内容中...'}
                    </p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
                    {language === 'en' ? 'Error Loading Content' : '内容加载错误'}
                </h3>
                <p className="text-red-600 dark:text-red-300">{error}</p>
            </div>
        );
    }

    if (!notionPage) {
        return (
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                <p className="text-yellow-800 dark:text-yellow-200">
                    {language === 'en' ? 'No Notion content available' : '暂无 Notion 内容'}
                </p>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {getBilingualText(post.title, language)}
                </h1>
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <span>
                        {language === 'en' ? 'Last updated:' : '最后更新:'} {new Date(notionPage.lastEditedTime).toLocaleDateString()}
                    </span>
                    <a
                        href={notionPage.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        {language === 'en' ? 'View in Notion' : '在 Notion 中查看'}
                    </a>
                </div>
            </div>

            {/* Content */}
            <div
                className="prose prose-lg max-w-none dark:prose-invert"
                dangerouslySetInnerHTML={{
                    __html: notionPage.content
                }}
            />

            {/* Footer */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    {language === 'en'
                        ? 'This content is dynamically loaded from Notion.'
                        : '此内容从 Notion 动态加载。'
                    }
                </p>
            </div>
        </div>
    );
}
