import { getBilingualText } from "@/lib/utils";
import { type Language } from "@/lib/types";
import { type Project } from "@/lib/projects";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Calendar, Users, ExternalLink, Github, Zap, BarChart } from "lucide-react";
import { TagsSection } from "../modules";

interface FlashMindDetailProps {
    project: Project;
    language: Language;
}

export default function FlashMindDetail({ project, language }: FlashMindDetailProps) {
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

                {/* Action Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                    {project.liveUrl && (
                        <Button
                            size="lg"
                            onClick={() => window.open(project.liveUrl, '_blank')}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white"
                        >
                            <ExternalLink className="h-5 w-5 mr-2" />
                            {getBilingualText({ en: 'Live Demo', zh: '在线演示' }, language)}
                        </Button>
                    )}
                    {project.githubUrl && (
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => window.open(project.githubUrl, '_blank')}
                            className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                        >
                            <Github className="h-5 w-5 mr-2" />
                            {getBilingualText({ en: 'GitHub Repo', zh: 'GitHub 仓库' }, language)}
                        </Button>
                    )}
                </div>
            </div>

            {/* Project Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <Calendar className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    <div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Timeline</p>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">3 months</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <Users className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    <div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Team Size</p>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">Solo Project</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <Code className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    <div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Type</p>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">Web Application</p>
                    </div>
                </div>
            </div>

            {/* Technical Stack */}
            {project.technicalStack && project.technicalStack.length > 0 && (
                <Card>
                    <CardContent className="p-8">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
                            <Code className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                            {getBilingualText({ en: 'Technical Stack', zh: '技术栈' }, language)}
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {project.technicalStack.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium border border-emerald-200 dark:border-emerald-700"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Features & Benefits */}
            <Card>
                <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
                        <Zap className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                        {getBilingualText({ en: 'Key Features', zh: '核心功能' }, language)}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                {getBilingualText({ en: 'AI-Powered Learning', zh: 'AI驱动学习' }, language)}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                {getBilingualText({
                                    en: "Uses advanced algorithms to optimize your study schedule and identify knowledge gaps.",
                                    zh: "使用先进算法优化学习计划并识别知识盲点。"
                                }, language)}
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                {getBilingualText({ en: 'Spaced Repetition', zh: '间隔重复' }, language)}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                {getBilingualText({
                                    en: "Scientifically-proven method to improve long-term retention and memory.",
                                    zh: "科学验证的方法提高长期记忆和保留率。"
                                }, language)}
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                {getBilingualText({ en: 'Progress Tracking', zh: '进度跟踪' }, language)}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                {getBilingualText({
                                    en: "Detailed analytics and insights to monitor your learning progress.",
                                    zh: "详细的分析和洞察来监控学习进度。"
                                }, language)}
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                {getBilingualText({ en: 'Cross-Platform', zh: '跨平台' }, language)}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                {getBilingualText({
                                    en: "Access your flashcards anywhere with web and mobile support.",
                                    zh: "通过网页和移动端随时随地访问你的记忆卡片。"
                                }, language)}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Impact Metrics */}
            {project.impactMetrics && project.impactMetrics.length > 0 && (
                <Card>
                    <CardContent className="p-8">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
                            <BarChart className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                            {getBilingualText({ en: 'Impact & Metrics', zh: '影响与指标' }, language)}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {project.impactMetrics.map((metric, index) => (
                                <div key={index} className="flex flex-col items-center text-center bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                                    <p className="text-4xl font-extrabold text-emerald-600 dark:text-emerald-400 mb-2">{metric.value}</p>
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{metric.label}</p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Tags */}
            <TagsSection
                tags={project.tags || []}
                language={language}
            />
        </div>
    );
}
