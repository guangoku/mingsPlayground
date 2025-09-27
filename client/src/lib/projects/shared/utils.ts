/**
 * Shared project utility functions
 * Common helper functions used across all project modules
 */

import { type Project, type ProjectData } from './types';

// Helper functions for project data manipulation
export const getProjectById = (projects: Project[], id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (projects: Project[], category: string): Project[] => {
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = (projects: Project[]): Project[] => {
  // For now, return all projects since we removed the featured field
  // In the future, you can add a featured field back or use other criteria
  return projects;
};

export const getAllProjectCategories = (projects: Project[]): string[] => {
  return Array.from(new Set(projects.map(project => project.category)));
};

export const getProjectsByFilter = (projects: Project[], filter: string): Project[] => {
  switch (filter) {
    case 'featured':
      return getFeaturedProjects(projects);
    case 'all':
    default:
      return projects;
  }
};

export const searchProjects = (projects: Project[], query: string, language: 'en' | 'zh' = 'en'): Project[] => {
  const lowerQuery = query.toLowerCase();
  return projects.filter(project => {
    const title = project.title[language].toLowerCase();
    const description = project.description[language].toLowerCase();
    const tags = project.tags?.join(' ').toLowerCase() || '';
    
    return title.includes(lowerQuery) || 
           description.includes(lowerQuery) || 
           tags.includes(lowerQuery);
  });
};

export const getProjectStats = (projects: Project[]) => {
  const totalProjects = projects.length;
  const featuredProjects = getFeaturedProjects(projects).length;
  const categories = getAllProjectCategories(projects);
  
  return {
    total: totalProjects,
    featured: featuredProjects,
    categories: categories.length,
    byCategory: categories.reduce((acc, category) => {
      acc[category] = getProjectsByCategory(projects, category).length;
      return acc;
    }, {} as Record<string, number>)
  };
};

// Convert ProjectData to Project (for backward compatibility)
export const projectDataToProject = (projectData: ProjectData): Project => {
  return {
    id: projectData.id,
    title: projectData.title,
    category: projectData.category,
    description: projectData.description,
    imageUrl: projectData.imageUrl,
    tags: projectData.tags,
    detailImages: projectData.detailImages,
    processImages: projectData.processImages,
    liveUrl: projectData.liveUrl,
    githubUrl: projectData.githubUrl,
    impactMetrics: projectData.impactMetrics,
    artistStatement: projectData.artistStatement,
    technicalStack: projectData.technicalStack
  };
};
