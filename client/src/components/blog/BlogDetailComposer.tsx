import { useState, useEffect } from "react";
import { type Language } from "@/lib/types";
import { type BlogPost } from "@/lib/blog";
import { getBilingualText } from "@/lib/utils";

// Static post components
import GraphicNovelDetail from "./details/GraphicNovelDetail";
import CDNGuideDetail from "./details/CDNGuideDetail";

// Notion content renderer
import NotionContent from "./details/NotionContent";

interface BlogDetailComposerProps {
    post: BlogPost;
    language: Language;
}

export default function BlogDetailComposer({ post, language }: BlogDetailComposerProps) {

    // Render based on post type
    if (post.type === 'static') {
        // Route to appropriate static component
        switch (post.staticContent?.component) {
            case 'GraphicNovelDetail':
                return <GraphicNovelDetail post={post} language={language} />;
            case 'CDNGuideDetail':
                return <CDNGuideDetail post={post} language={language} />;
            default:
                return (
                    <div className="space-y-8">
                        {/* Header */}
                        <div className="text-center space-y-4">
                            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                                {getBilingualText(post.title, language)}
                            </h1>
                            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                                {getBilingualText(post.excerpt, language)}
                            </p>
                        </div>

                        {/* Placeholder Content */}
                        <div className="text-center py-16">
                            <div className="max-w-md mx-auto">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                                    <span className="text-2xl">🚧</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                    {getBilingualText({
                                        en: 'Content Coming Soon',
                                        zh: '内容即将发布'
                                    }, language)}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {getBilingualText({
                                        en: 'This post is being prepared. Check back soon!',
                                        zh: '这篇文章正在准备中，敬请期待！'
                                    }, language)}
                                </p>
                            </div>
                        </div>
                    </div>
                );
        }
    } else {
        // Render Notion content
        return <NotionContent post={post} language={language} />;
    }
}