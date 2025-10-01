/**
 * Shared project utility functions
 * Common helper functions used across all project modules
 */

import { type ProjectData } from './types';

// Helper functions for project data manipulation
export const getProjectById = (projects: ProjectData[], id: string): ProjectData | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (projects: ProjectData[], category: string): ProjectData[] => {
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = (projects: ProjectData[]): ProjectData[] => {
  // For now, return all projects since we removed the featured field
  // In the future, you can add a featured field back or use other criteria
  return projects;
};

export const getAllProjectCategories = (projects: ProjectData[]): string[] => {
  return Array.from(new Set(projects.map(project => project.category)));
};

export const getProjectsByFilter = (projects: ProjectData[], filter: string): ProjectData[] => {
  switch (filter) {
    case 'featured':
      return getFeaturedProjects(projects);
    case 'all':
    default:
      return projects;
  }
};

export const searchProjects = (projects: ProjectData[], query: string, language: 'en' | 'zh' = 'en'): ProjectData[] => {
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

export const getProjectStats = (projects: ProjectData[]) => {
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

