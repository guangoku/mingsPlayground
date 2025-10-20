import { getBilingualText } from "@/lib/utils";
import { type Language } from "@/lib/types";
import { type BlogPost } from "@/lib/blog";
import { TagsSection } from "../modules";
import UnifiedImageGallery from "../../projects/modules/UnifiedImageGallery";

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

            {/* Learning Journey Map Placeholder */}
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
                            en: 'Subway Map Coming Soon',
                            zh: '地铁地图即将发布'
                        }, language)}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                        {getBilingualText({
                            en: 'This post will feature an interactive subway map showing the learning journey from graphic novel discovery to mastery, with connections to related projects and experiences.',
                            zh: '这篇文章将展示一个交互式地铁地图，显示从图像小说发现到掌握的学习之旅，以及与相关项目和经验的联系。'
                        }, language)}
                    </p>
                </div>

                {/* Journey Nodes Preview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-dashed border-blue-300 dark:border-blue-600">
                        <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                            {getBilingualText({ en: 'Starting Station', zh: '起始站' }, language)}
                        </h4>
                        <p className="text-sm text-blue-800 dark:text-blue-200">
                            {getBilingualText({
                                en: 'Graphic Novel Discovery',
                                zh: '图像小说发现'
                            }, language)}
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-dashed border-green-300 dark:border-green-600">
                        <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                            {getBilingualText({ en: 'Transfer Station', zh: '换乘站' }, language)}
                        </h4>
                        <p className="text-sm text-green-800 dark:text-green-200">
                            {getBilingualText({
                                en: 'Nepal Travel Project',
                                zh: '尼泊尔旅行项目'
                            }, language)}
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-dashed border-purple-300 dark:border-purple-600">
                        <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                            {getBilingualText({ en: 'Destination', zh: '目的地' }, language)}
                        </h4>
                        <p className="text-sm text-purple-800 dark:text-purple-200">
                            {getBilingualText({
                                en: 'Storytelling Mastery',
                                zh: '叙事掌握'
                            }, language)}
                        </p>
                    </div>
                </div>
            </div>

            {/* Image Gallery */}
            {post.staticContent?.images && post.staticContent.images.length > 0 && (
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {getBilingualText({ en: 'Process Documentation', zh: '过程记录' }, language)}
                    </h2>
                    <UnifiedImageGallery
                        images={post.staticContent.images}
                        alt={getBilingualText(post.title, language)}
                        gridCols={3}
                        allProjectImages={allPostImages}
                    />
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
