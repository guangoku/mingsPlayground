import { getBilingualText } from "@/lib/utils";
import { type Language } from "@/lib/types";
import { type Project } from "@/lib/projects";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Calendar, MapPin, Award, Users, ExternalLink } from "lucide-react";
import { ImageGallery } from "../modules";
import { TagsSection } from "../modules";

interface NepalTravelDetailProps {
    project: Project;
    language: Language;
}

export default function NepalTravelDetail({ project, language }: NepalTravelDetailProps) {
    return (
        <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                    {getBilingualText(project.title, language)}
                </h1>
                <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                    {getBilingualText(project.description, language)}
                </p>
            </div>

            {/* Project Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <Calendar className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    <div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Published</p>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">2023</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <BookOpen className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    <div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Pages</p>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">24 pages</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <MapPin className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    <div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Location</p>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">Nepal</p>
                    </div>
                </div>
            </div>

            {/* Page Preview */}
            {project.detailImages && project.detailImages.length > 0 && (
                <Card>
                    <CardContent className="p-8">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
                            <BookOpen className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                            {getBilingualText({ en: 'Page Preview', zh: '页面预览' }, language)}
                        </h2>
                        <ImageGallery
                            images={project.detailImages}
                            alt={getBilingualText(project.title, language)}
                            gridCols={3}
                        />
                    </CardContent>
                </Card>
            )}

            {/* Character Development */}
            {project.processImages && project.processImages.length > 0 && (
                <Card>
                    <CardContent className="p-8">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
                            <Users className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                            {getBilingualText({ en: 'Character Development', zh: '角色发展' }, language)}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {project.processImages.map((img, index) => (
                                <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src={img}
                                        alt={`${getBilingualText(project.title, language)} - Character ${index + 1}`}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Publication Details */}
            <Card>
                <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
                        <Award className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                        {getBilingualText({ en: 'Publication & Recognition', zh: '出版与荣誉' }, language)}
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
                        <p>
                            {getBilingualText({
                                en: "Nepal Travel Diaries was self-published in 2023 and received positive feedback for its unique blend of travelogue and graphic storytelling. The work was featured in several independent comic showcases and has been praised for its authentic portrayal of Nepalese culture and landscapes.",
                                zh: "《尼国游日记》于2023年自出版，因其独特的游记与图像叙事结合而获得好评。该作品曾参展多个独立漫画展，并因其对尼泊尔文化和风景的真实描绘而受到赞扬。"
                            }, language)}
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Creative Process */}
            <Card>
                <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
                        <BookOpen className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                        {getBilingualText({ en: 'Creative Process', zh: '创作过程' }, language)}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                {getBilingualText({ en: 'Inspiration', zh: '灵感来源' }, language)}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                {getBilingualText({
                                    en: "Inspired by the classic Chinese travelogue 'Xu Xiake's Travel Diaries' from the Ming Dynasty, this graphic novel reimagines the traditional travel writing format for modern readers while maintaining the poetic and observational style of the original.",
                                    zh: "灵感来源于明代经典游记《徐霞客游记》，这部图像小说为现代读者重新构想了传统游记格式，同时保持了原作的诗歌和观察风格。"
                                }, language)}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                {getBilingualText({ en: 'Art Style', zh: '艺术风格' }, language)}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                {getBilingualText({
                                    en: "The artwork combines traditional Chinese ink painting techniques with modern digital illustration, creating a unique visual language that bridges ancient and contemporary storytelling traditions.",
                                    zh: "艺术作品结合了中国传统水墨画技法和现代数字插画，创造了一种独特的视觉语言，连接了古代和当代的叙事传统。"
                                }, language)}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Tags */}
            <TagsSection
                tags={project.tags || []}
                language={language}
            />
        </div>
    );
}
