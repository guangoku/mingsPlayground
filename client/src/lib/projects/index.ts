/**
 * Projects module - Main entry point
 * Re-exports all project-related functionality
 */

// Shared utilities and types
export * from './shared/types';
export * from './shared/constants';
export * from './shared/utils';

// Re-export ProjectCategory specifically to avoid conflicts
export type { ProjectCategory } from './shared/constants';

// Individual project data
export { octopusGirlData } from './octopus-girl/data';
export { flashmindData } from './flashmind/data';
export { nepalTravelData } from './nepal-travel/data';
export { charityBoxData } from './charity-box/data';

// Project images
export { OCTOPUS_GIRL_IMAGES } from './octopus-girl/images';
export { FLASHMIND_IMAGES } from './flashmind/images';
export { NEPAL_TRAVEL_IMAGES } from './nepal-travel/images';
export { CHARITY_BOX_IMAGES } from './charity-box/images';

// Project constants
export { OCTOPUS_GIRL_CONSTANTS } from './octopus-girl/constants';
export { FLASHMIND_CONSTANTS } from './flashmind/constants';
export { NEPAL_TRAVEL_CONSTANTS } from './nepal-travel/constants';
export { CHARITY_BOX_CONSTANTS } from './charity-box/constants';

// Import all project data
import { octopusGirlData } from './octopus-girl/data';
import { flashmindData } from './flashmind/data';
import { nepalTravelData } from './nepal-travel/data';
import { charityBoxData } from './charity-box/data';
import { projectDataToProject } from './shared/utils';
import { type Project } from './shared/types';

// Convert all project data to Project format
export const projects: Project[] = [
  projectDataToProject(octopusGirlData),
  projectDataToProject(nepalTravelData),
  projectDataToProject(flashmindData),
  projectDataToProject(charityBoxData),
];

// Create helper functions that use the projects array
import { 
  getProjectById as _getProjectById,
  getProjectsByCategory as _getProjectsByCategory,
  getFeaturedProjects as _getFeaturedProjects,
  getAllProjectCategories as _getAllProjectCategories,
  getProjectsByFilter as _getProjectsByFilter,
  searchProjects as _searchProjects,
  getProjectStats as _getProjectStats,
} from './shared/utils';

export const getProjectById = (id: string) => _getProjectById(projects, id);
export const getProjectsByCategory = (category: string) => _getProjectsByCategory(projects, category);
export const getFeaturedProjects = () => _getFeaturedProjects(projects);
export const getAllProjectCategories = () => _getAllProjectCategories(projects);
export const getProjectsByFilter = (filter: string) => _getProjectsByFilter(projects, filter);
export const searchProjects = (query: string, language: 'en' | 'zh' = 'en') => _searchProjects(projects, query, language);
export const getProjectStats = () => _getProjectStats(projects);