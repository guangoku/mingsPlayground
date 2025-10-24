import { getBilingualText } from "@/lib/utils";
import { type Language } from "@/lib/types";
import { type BlogPost } from "@/lib/blog";
import { TagsSection } from "../modules";
import UnifiedImageGallery from "../../projects/modules/UnifiedImageGallery";
import JourneyMapWrapper from "../journey/JourneyMapWrapper";

interface GraphicNovelDetailProps {
    post: BlogPost;
    language: Language;
}

export default function GraphicNovelDetail({ post, language }: GraphicNovelDetailProps) {
    // Collect all images from the post for unified gallery
    const allPostImages = [
        ...(post.staticContent?.images || []),
    ].filter(Boolean);

    return (
        <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                    {getBilingualText(post.title, language)}
                </h1>
                <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                    {getBilingualText(post.excerpt, language)}
                </p>
            </div>

            {/* Tags */}
            <TagsSection
                tags={post.tags}
                language={language}
            />

            {/* Learning Journey Map */}
            {post.journeyMapId ? (
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
                        🚇 {getBilingualText({ en: 'Learning Journey Map', zh: '学习之旅地图' }, language)}
                    </h2>
                    <JourneyMapWrapper
                        journeyMapId={post.journeyMapId}
                        language={language}
                    />
                </div>
            ) : (
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                        🚇 {getBilingualText({ en: 'Learning Journey Map', zh: '学习之旅地图' }, language)}
                    </h2>

                    <div className="text-center py-12">
                        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                            <span className="text-4xl">🚇</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                            {getBilingualText({
                                en: 'Journey Map Coming Soon',
                                zh: '旅程地图即将发布'
                            }, language)}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                            {getBilingualText({
                                en: 'An interactive subway-style map showing the learning journey and connections between different topics.',
                                zh: '一个交互式的地铁风格地图，展示学习旅程和不同主题之间的联系。'
                            }, language)}
                        </p>
                    </div>
                </div>
            )}

            {/* Key Insights */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {getBilingualText({ en: 'Key Insights', zh: '关键洞察' }, language)}
                </h2>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{getBilingualText({
                            en: 'Visual storytelling combines narrative and artistic expression',
                            zh: '视觉叙事结合了叙事和艺术表达'
                        }, language)}</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{getBilingualText({
                            en: 'Material choice affects both process and final outcome',
                            zh: '材料选择影响过程和最终结果'
                        }, language)}</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{getBilingualText({
                            en: 'Learning connects across different creative disciplines',
                            zh: '学习连接不同的创意学科'
                        }, language)}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
