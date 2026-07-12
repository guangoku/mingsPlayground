import { useState } from "react";
import { Button } from "@/components/ui/button";
import { getBilingualText } from "@/lib/utils";
import { type Language } from "@/lib/types";
import {
  PROJECT_CATEGORIES,
  getFilterableTags,
  projects,
  type Project,
  type ProjectCategory
} from "@/lib/projects";
import CategoryHeader from "./CategoryHeader";
import ProjectCard from "./ProjectCard";
import AdvisoryCTA from "./AdvisoryCTA";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";

interface ProjectSectionProps {
  language: Language;
}

export default function ProjectSection({ language }: ProjectSectionProps) {
  const [selectedTag, setSelectedTag] = useState<string>('all');

  // Group projects by category
  const projectsByCategory = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {} as Record<ProjectCategory, Project[]>);

  // Explicit display order: tech (founder/builder) → social impact → art
  const CATEGORY_ORDER: ProjectCategory[] = ['tech', 'social-impact', 'art'];

  // Get categories that have projects (exclude graphic-novel from landing page display)
  const categoriesWithProjects = (Object.keys(projectsByCategory)
    .filter(cat => cat !== 'graphic-novel') as ProjectCategory[])
    .sort((a, b) => CATEGORY_ORDER.indexOf(a) - CATEGORY_ORDER.indexOf(b));

  // Filter projects by tag only
  const filteredProjects = projects.filter(project => {
    return selectedTag === 'all' || project.tags?.includes(selectedTag as any);
  });


  return (
    <section
      className="relative py-16 md:py-24 pb-24 md:pb-32 px-6 projects-bg grain sea-motifs"
      id="projects"
    >
      <div className="relative z-[2] max-w-6xl mx-auto">
        <SectionHeading
          eyebrow={{ en: 'Selected Work', zh: '精选作品' }}
          title={{ en: 'Projects & Creative Work', zh: '项目与创作' }}
          lede={{
            en: 'A showcase of my independent projects and contributions',
            zh: '独立项目与合作成果'
          }}
          language={language}
          tone="dark"
          accent="hsl(172 65% 58%)"
          testIdPrefix="projects"
        />

        {/* Tag Filter */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Button
              variant={selectedTag === 'all' ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTag('all')}
              className={`rounded-full border transition-all duration-300 ${selectedTag === 'all'
                ? 'bg-white text-teal-900 border-white shadow-md hover:bg-white'
                : 'bg-white/5 text-white/80 border-white/20 backdrop-blur-sm hover:bg-white/15 hover:text-white hover:border-white/40'
                }`}
              data-testid="button-tag-all"
            >
              {getBilingualText({ en: 'All Tags', zh: '所有标签' }, language)}
            </Button>
            {getFilterableTags().map((tag) => (
              <Button
                key={tag.id}
                variant={selectedTag === tag.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(tag.id)}
                className={`rounded-full border transition-all duration-300 ${selectedTag === tag.id
                  ? 'bg-white text-teal-900 border-white shadow-md hover:bg-white'
                  : 'bg-white/5 text-white/80 border-white/20 backdrop-blur-sm hover:bg-white/15 hover:text-white hover:border-white/40'
                  }`}
                data-testid={`button-tag-${tag.id}`}
              >
                {getBilingualText(tag.label, language)}
              </Button>
            ))}
          </div>
        </Reveal>

        {/* Projects by Category */}
        <div className="space-y-16">
          {(() => {
            const categoriesWithFilteredProjects = categoriesWithProjects
              .map((category) => {
                const filteredProjects = projectsByCategory[category].filter(
                  project => selectedTag === 'all' || project.tags?.includes(selectedTag as any)
                );
                return { category, filteredProjects };
              })
              .filter(({ filteredProjects }) => filteredProjects.length > 0);

            if (categoriesWithFilteredProjects.length === 0) {
              return (
                <div className="text-center py-12">
                  <p className="text-white/70 text-lg">
                    {getBilingualText(
                      { en: 'No projects found with this tag.', zh: '没有找到带有此标签的项目。' },
                      language
                    )}
                  </p>
                </div>
              );
            }

            return categoriesWithFilteredProjects.map(({ category, filteredProjects }) => (
              <Reveal key={category}>
                <CategoryHeader
                  category={category}
                  language={language}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-5 md:gap-7">
                  {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} language={language} />
                  ))}
                </div>
                {category === 'social-impact' && (
                  <AdvisoryCTA language={language} variant="onDark" className="mt-10" />
                )}
              </Reveal>
            ));
          })()}
        </div>
      </div>

      <WaveDivider fill="hsl(var(--seam-blog))" />
    </section>
  );
}