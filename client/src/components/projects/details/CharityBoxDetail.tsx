import { getBilingualText } from "@/lib/utils";
import { type Language } from "@/lib/types";
import { type Project } from "@/lib/projects";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Target, TrendingUp, Calendar, ExternalLink, Github } from "lucide-react";
import { TagsSection } from "../modules";

interface CharityBoxDetailProps {
    project: Project;
    language: Language;
}

export default function CharityBoxDetail({ project, language }: CharityBoxDetailProps) {
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
                            {getBilingualText({ en: 'View Project', zh: '查看项目' }, language)}
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
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">6 months</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <Users className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    <div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Team Size</p>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">3 people</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <Target className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    <div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Target</p>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">
                            {getBilingualText({ en: 'Charity Organizations', zh: '慈善组织' }, language)}
                        </p>
                    </div>
                </div>
            </div>

            {/* Impact Metrics */}
            {project.impactMetrics && project.impactMetrics.length > 0 && (
                <Card>
                    <CardContent className="p-8">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
                            <TrendingUp className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                            {getBilingualText({ en: 'Key Impact Metrics', zh: '关键影响指标' }, language)}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

            {/* Success Stories */}
            <Card>
                <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
                        <Heart className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                        {getBilingualText({ en: 'Success Stories', zh: '成功案例' }, language)}
                    </h2>
                    <div className="space-y-6">
                        <blockquote className="border-l-4 border-emerald-500 pl-6 text-gray-700 dark:text-gray-300 italic text-lg">
                            "{getBilingualText({
                                en: "This project significantly improved our outreach to underserved communities. The team's dedication was truly inspiring.",
                                zh: "这个项目显著改善了我们对服务不足社区的外展工作。团队的奉献精神真正令人鼓舞。"
                            }, language)}"
                            <footer className="mt-3 text-sm text-gray-500 dark:text-gray-400 not-italic">
                                — {getBilingualText({ en: 'Local Community Leader', zh: '当地社区领袖' }, language)}
                            </footer>
                        </blockquote>
                        <blockquote className="border-l-4 border-emerald-500 pl-6 text-gray-700 dark:text-gray-300 italic text-lg">
                            "{getBilingualText({
                                en: "A well-designed solution that made a real difference. We saw immediate positive results.",
                                zh: "一个设计精良的解决方案，真正产生了影响。我们立即看到了积极的结果。"
                            }, language)}"
                            <footer className="mt-3 text-sm text-gray-500 dark:text-gray-400 not-italic">
                                — {getBilingualText({ en: 'Partner Organization', zh: '合作伙伴组织' }, language)}
                            </footer>
                        </blockquote>
                    </div>
                </CardContent>
            </Card>

            {/* Technical Details */}
            <Card>
                <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
                        <Target className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                        {getBilingualText({ en: 'Technical Implementation', zh: '技术实现' }, language)}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                {getBilingualText({ en: 'Platform', zh: '平台' }, language)}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                {getBilingualText({
                                    en: "Built as a WeChat mini-program to leverage the platform's massive user base in China and provide seamless integration with WeChat Pay.",
                                    zh: "构建为微信小程序，利用平台在中国的大量用户基础，并与微信支付无缝集成。"
                                }, language)}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                {getBilingualText({ en: 'Key Features', zh: '核心功能' }, language)}
                            </h3>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                    {getBilingualText({ en: 'Secure payment processing', zh: '安全支付处理' }, language)}
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                    {getBilingualText({ en: 'Real-time donation tracking', zh: '实时捐赠跟踪' }, language)}
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                    {getBilingualText({ en: 'Transparent fund allocation', zh: '透明的资金分配' }, language)}
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                    {getBilingualText({ en: 'Multi-language support', zh: '多语言支持' }, language)}
                                </li>
                            </ul>
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
