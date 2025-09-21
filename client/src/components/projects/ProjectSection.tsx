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

  // Get categories that have projects (exclude graphic-novel from landing page display)
  const categoriesWithProjects = Object.keys(projectsByCategory).filter(cat => cat !== 'graphic-novel') as ProjectCategory[];

  // Filter projects by tag only
  const filteredProjects = projects.filter(project => {
    return selectedTag === 'all' || project.tags?.includes(selectedTag as any);
  });


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


        {/* Tag Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Button
            variant={selectedTag === 'all' ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedTag('all')}
            className={`hover-elevate rounded-full border-2 ${selectedTag === 'all'
              ? 'bg-white/90 dark:bg-gray-100 text-emerald-700 dark:text-emerald-800 border-emerald-600 dark:border-emerald-500'
              : 'bg-transparent text-white dark:text-gray-200 border-white dark:border-gray-300'
              }`}
            data-testid="button-tag-all"
            style={{
              textShadow: selectedTag === 'all' ? 'none' : '1px 1px 2px rgba(0,0,0,0.3)'
            }}
          >
            {getBilingualText({ en: 'All Tags', zh: '所有标签' }, language)}
          </Button>
          {getFilterableTags().map((tag) => (
            <Button
              key={tag.id}
              variant={selectedTag === tag.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTag(tag.id)}
              className={`hover-elevate rounded-full border-2 ${selectedTag === tag.id
                ? 'bg-white/90 dark:bg-gray-100 text-emerald-700 dark:text-emerald-800 border-emerald-600 dark:border-emerald-500'
                : 'bg-transparent text-white dark:text-gray-200 border-white dark:border-gray-300'
                }`}
              data-testid={`button-tag-${tag.id}`}
              style={{
                textShadow: selectedTag === tag.id ? 'none' : '1px 1px 2px rgba(0,0,0,0.3)'
              }}
            >
              {getBilingualText(tag.label, language)}
            </Button>
          ))}
        </div>

        {/* Projects by Category */}
        <div className="space-y-8">
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
                  <p className="text-white/80 dark:text-gray-300 text-lg" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                    {getBilingualText(
                      { en: 'No projects found with this tag.', zh: '没有找到带有此标签的项目。' },
                      language
                    )}
                  </p>
                </div>
              );
            }

            return categoriesWithFilteredProjects.map(({ category, filteredProjects }) => (
              <div key={category}>
                <CategoryHeader
                  category={category}
                  language={language}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-4 md:gap-6">
                  {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} language={language} />
                  ))}
                </div>
              </div>
            ));
          })()}
        </div>
      </div>
    </section>
  );
}