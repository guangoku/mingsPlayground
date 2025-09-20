import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Eye, Heart } from "lucide-react";
import octopusGirlCool from "@assets/octopus_girl_cool.png";
import nepal_travel_diaries_cover from "@assets/nepal_travel_diaries_cover.jpg";
import flashmind_cover from "@assets/flashmind_cover.png";
import yihe_miniprogram_cover from "@assets/yihe_miniprogram_cover.jpg";
import { getBilingualText, getBilingualArray } from "@/lib/utils";
import { LANGUAGES, COLORS, CATEGORIES } from "@/lib/constants";
import { type BilingualText, type Language } from "@/lib/types";
interface Project {
  id: string;
  title: BilingualText;
  category: string;
  description: BilingualText;
  imageUrl: string;
  likes: number;
  year: string;
}

interface ProjectSectionProps {
  language: Language;
}

const projects: Project[] = [
  {
    id: '1',
    title: {
      en: 'Octopus Girl',
      zh: '章鱼女孩'
    },
    category: 'Art & Illustration',
    description: {
      en: 'My personal avatar inspired by marine life, reflecting the octopus\'s intelligence, curiosity, and adaptability.',
      zh: '以章鱼为灵感的个人化身，体现了章鱼的智慧、好奇与适应力。'
    },
    imageUrl: octopusGirlCool,
    likes: 42,
    year: '2024'
  },
  {
    id: '2',
    title: {
      en: 'Nepal Travel Diaries',
      zh: '尼国游日记'
    },
    category: 'Graphic Novels',
    description: {
      en: 'A graphic travelogue blending classical Chinese prose in Xu Xiake\'s style with ink-and-comic illustrations of Nepal\'s festivals, cities, and mountain trails.',
      zh: '以徐霞客游记风格的古文，结合水墨与漫画的绘画方式，记录尼泊尔的节庆、古城与徒步旅程。'
    },
    imageUrl: nepal_travel_diaries_cover,
    likes: 38,
    year: '2025'
  },
  {
    id: '3',
    title: {
      en: 'FlashMind',
      zh: '闪念卡'
    },
    category: 'Tech Development',
    description: {
      en: 'AI flashcards that turn notes, links, or files into dynamic study cards with smart tagging and collections.',
      zh: '记忆卡片应用，把笔记、链接或文件转化为动态学习卡片，并支持智能标签与合集'
    },
    imageUrl: flashmind_cover,
    likes: 35,
    year: '2024'
  },
  {
    id: '4',
    title: {
      en: 'Charity Box Mini-Program',
      zh: '益盒小程序'
    },
    category: 'Social Impact',
    description: {
      en: 'A WeChat mini-program that makes donating 1% of income simple and transparent, supporting effective charities across China. I contributed to backend design, payment workflows, and user experience improvements.',
      zh: '基于微信的小程序，让用户轻松透明地捐出收入的1%，支持全中国的高效公益组织。我参与了后端设计、支付流程及用户体验优化。'
    },
    imageUrl: yihe_miniprogram_cover,
    likes: 41,
    year: '2024'
  }
];

const categories = [
  CATEGORIES.ALL,
  { en: 'Art & Illustration', zh: '艺术插画' },
  { en: 'Graphic Novels', zh: '绘本' },
  { en: 'Tech Development', zh: '技术开发' },
  { en: 'Social Impact', zh: '社会实践' }
];

export default function ProjectSection({ language }: ProjectSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(CATEGORIES.ALL.en);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === CATEGORIES.ALL.en
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const handleLike = (id: string) => {
    console.log(`Liked project: ${id}`);
    // TODO: Implement real like functionality
  };

  return (
    <section
      className="py-8 md:py-12 px-6 projects-bg"
      id="projects"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white dark:text-gray-100" data-testid="text-projects-title" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            {getBilingualText({ en: 'Projects & Creative Work', zh: '项目与创作' }, language)}
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-white/90 dark:text-gray-200" data-testid="text-projects-description" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
            {getBilingualText({
              en: 'A showcase of my independent projects and contributions',
              zh: '独立项目与合作成果'
            }, language)}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {categories.map((category) => (
            <Button
              key={category.en}
              variant={selectedCategory === category.en ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.en)}
              className={`hover-elevate rounded-full border-2 ${selectedCategory === category.en
                ? 'bg-white/90 dark:bg-gray-100 text-emerald-700 dark:text-emerald-800 border-emerald-600 dark:border-emerald-500'
                : 'bg-transparent text-white dark:text-gray-200 border-white dark:border-gray-300'
                }`}
              data-testid={`button-category-${category.en.toLowerCase()}`}
              style={{
                textShadow: selectedCategory === category.en ? 'none' : '1px 1px 2px rgba(0,0,0,0.3)'
              }}
            >
              {getBilingualText(category, language)}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover-elevate bg-white/95 dark:bg-gray-800/95 border-white/30 dark:border-gray-600/30"
              data-testid={`card-project-${project.id}`}
              style={{
                backdropFilter: 'blur(10px)'
              }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={getBilingualText(project.title, language)}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="icon" variant="secondary" className="hover-elevate rounded-full" data-testid={`button-view-${project.id}`}>
                        <Eye className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <div className="aspect-square w-full">
                        <img
                          src={project.imageUrl}
                          alt={getBilingualText(project.title, language)}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-emerald-700 dark:text-emerald-400" data-testid={`text-project-title-${project.id}`}>
                    {getBilingualText(project.title, language)}
                  </h3>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-emerald-700 dark:bg-emerald-600 text-white border-none"
                  >
                    {project.year}
                  </Badge>
                </div>
                <p className="text-sm mb-3 text-gray-600 dark:text-gray-300" data-testid={`text-project-description-${project.id}`}>
                  {getBilingualText(project.description, language)}
                </p>
                <div className="flex justify-between items-center">
                  <Badge
                    variant="outline"
                    className="border-emerald-700 dark:border-emerald-400 text-emerald-700 dark:text-emerald-400 bg-transparent"
                  >
                    {getBilingualText(
                      categories.find(cat => cat.en === project.category) || { en: project.category, zh: project.category },
                      language
                    )}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleLike(project.id)}
                    className="hover-elevate rounded-full text-emerald-700 dark:text-emerald-400"
                    data-testid={`button-like-${project.id}`}
                  >
                    <Heart className="h-4 w-4 mr-1" />
                    {project.likes}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}