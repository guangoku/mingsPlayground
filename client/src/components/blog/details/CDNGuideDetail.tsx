import { getBilingualText } from "@/lib/utils";
import { type Language } from "@/lib/types";
import { type BlogPost } from "@/lib/blog";
import { TagsSection } from "../modules";
import UnifiedImageGallery from "../../projects/modules/UnifiedImageGallery";

interface CDNGuideDetailProps {
    post: BlogPost;
    language: Language;
}

export default function CDNGuideDetail({ post, language }: CDNGuideDetailProps) {
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

            {/* Main Content */}
            <div className="space-y-6">
                <div className="prose prose-lg max-w-none dark:prose-invert">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        {getBilingualText({ en: 'What is a CDN?', zh: '什么是CDN？' }, language)}
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                        {getBilingualText({
                            en: 'A Content Delivery Network (CDN) is like having multiple copies of your website stored in different cities around the world. When someone visits your site, they get the copy from the city closest to them, making everything load much faster.',
                            zh: '内容分发网络（CDN）就像在世界各地不同城市存储您网站的多个副本。当有人访问您的网站时，他们会从离他们最近的城市获取副本，使一切加载得更快。'
                        }, language)}
                    </p>
                </div>

                {/* Simple Explanation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-red-900 dark:text-red-100 mb-3">
                            {getBilingualText({ en: 'Without CDN', zh: '没有CDN' }, language)}
                        </h3>
                        <div className="space-y-2 text-red-800 dark:text-red-200 text-sm">
                            <p>• {getBilingualText({ en: 'All requests go to one server', zh: '所有请求都发送到一台服务器' }, language)}</p>
                            <p>• {getBilingualText({ en: 'Slower for distant users', zh: '对远程用户较慢' }, language)}</p>
                            <p>• {getBilingualText({ en: 'Server can get overwhelmed', zh: '服务器可能过载' }, language)}</p>
                        </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
                            {getBilingualText({ en: 'With CDN', zh: '使用CDN' }, language)}
                        </h3>
                        <div className="space-y-2 text-green-800 dark:text-green-200 text-sm">
                            <p>• {getBilingualText({ en: 'Multiple servers worldwide', zh: '全球多个服务器' }, language)}</p>
                            <p>• {getBilingualText({ en: 'Faster for all users', zh: '对所有用户都更快' }, language)}</p>
                            <p>• {getBilingualText({ en: 'Better reliability', zh: '更好的可靠性' }, language)}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Gallery */}
            {post.staticContent?.images && post.staticContent.images.length > 0 && (
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {getBilingualText({ en: 'Visual Examples', zh: '视觉示例' }, language)}
                    </h2>
                    <UnifiedImageGallery
                        images={post.staticContent.images}
                        alt={getBilingualText(post.title, language)}
                        gridCols={4}
                        allProjectImages={allPostImages}
                    />
                </div>
            )}

            {/* How It Works */}
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {getBilingualText({ en: 'How It Works', zh: '工作原理' }, language)}
                </h2>
                <div className="space-y-4">
                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                        <div>
                            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                                {getBilingualText({ en: 'User Requests Content', zh: '用户请求内容' }, language)}
                            </h3>
                            <p className="text-blue-800 dark:text-blue-200 text-sm">
                                {getBilingualText({
                                    en: 'Someone visits your website from their browser',
                                    zh: '有人通过浏览器访问您的网站'
                                }, language)}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                        <div>
                            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                                {getBilingualText({ en: 'CDN Finds Closest Server', zh: 'CDN找到最近的服务器' }, language)}
                            </h3>
                            <p className="text-blue-800 dark:text-blue-200 text-sm">
                                {getBilingualText({
                                    en: 'The CDN automatically routes to the server nearest to the user',
                                    zh: 'CDN自动路由到离用户最近的服务器'
                                }, language)}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                        <div>
                            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                                {getBilingualText({ en: 'Fast Content Delivery', zh: '快速内容交付' }, language)}
                            </h3>
                            <p className="text-blue-800 dark:text-blue-200 text-sm">
                                {getBilingualText({
                                    en: 'Content is delivered quickly from the nearby server',
                                    zh: '内容从附近的服务器快速交付'
                                }, language)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Real-World Examples */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {getBilingualText({ en: 'Real-World Examples', zh: '现实世界示例' }, language)}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                            {getBilingualText({ en: 'Popular CDN Services', zh: '流行的CDN服务' }, language)}
                        </h3>
                        <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                            <li>• Cloudflare</li>
                            <li>• Amazon CloudFront</li>
                            <li>• Google Cloud CDN</li>
                            <li>• Microsoft Azure CDN</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                            {getBilingualText({ en: 'What Gets Cached', zh: '缓存的内容' }, language)}
                        </h3>
                        <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                            <li>• Images and photos</li>
                            <li>• CSS and JavaScript files</li>
                            <li>• Videos and audio</li>
                            <li>• Static web pages</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Benefits Summary */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {getBilingualText({ en: 'Why Use a CDN?', zh: '为什么使用CDN？' }, language)}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                        <div className="text-3xl mb-2">⚡</div>
                        <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-1">
                            {getBilingualText({ en: 'Speed', zh: '速度' }, language)}
                        </h3>
                        <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                            {getBilingualText({
                                en: 'Faster loading times',
                                zh: '更快的加载时间'
                            }, language)}
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl mb-2">🌍</div>
                        <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-1">
                            {getBilingualText({ en: 'Global Reach', zh: '全球覆盖' }, language)}
                        </h3>
                        <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                            {getBilingualText({
                                en: 'Works worldwide',
                                zh: '全球可用'
                            }, language)}
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl mb-2">🛡️</div>
                        <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-1">
                            {getBilingualText({ en: 'Reliability', zh: '可靠性' }, language)}
                        </h3>
                        <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                            {getBilingualText({
                                en: 'Better uptime',
                                zh: '更好的正常运行时间'
                            }, language)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
