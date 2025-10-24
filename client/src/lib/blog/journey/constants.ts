/**
 * Journey Map Constants
 * Constants for the journey map system
 */

export const JOURNEY_NODE_TYPES = {
  FOUNDATION: 'foundation',
  PROJECT: 'project',
  BRANCH: 'branch',
  REFERENCE: 'reference'
} as const;

export const JOURNEY_EDGE_TYPES = {
  CONNECTION: 'connection',
  PREREQUISITE: 'prerequisite',
  FOLLOWUP: 'followup'
} as const;

export const JOURNEY_LAYOUT_TYPES = {
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal',
  GRID: 'grid'
} as const;

export const JOURNEY_NODE_COLORS = {
  foundation: {
    bg: 'bg-green-100',
    border: 'border-green-500',
    text: 'text-green-800',
    icon: 'bg-green-500',
    ring: 'ring-green-300'
  },
  project: {
    bg: 'bg-blue-100',
    border: 'border-blue-500',
    text: 'text-blue-800',
    icon: 'bg-blue-500',
    ring: 'ring-blue-300'
  },
  branch: {
    bg: 'bg-purple-100',
    border: 'border-purple-500',
    text: 'text-purple-800',
    icon: 'bg-purple-500',
    ring: 'ring-purple-300'
  },
  reference: {
    bg: 'bg-gray-100',
    border: 'border-gray-500',
    text: 'text-gray-800',
    icon: 'bg-gray-500',
    ring: 'ring-gray-300'
  }
} as const;

export const JOURNEY_EDGE_COLORS = {
  connection: '#6B7280', // gray-500
  prerequisite: '#EF4444', // red-500
  followup: '#10B981' // emerald-500
} as const;

export const JOURNEY_LEGEND_ITEMS = [
  {
    type: 'foundation',
    label: { en: 'Foundations', zh: '基础篇' },
    description: { en: 'Core skills and knowledge', zh: '核心技能与知识' },
    color: JOURNEY_NODE_COLORS.foundation.icon
  },
  {
    type: 'project',
    label: { en: 'Projects', zh: '项目' },
    description: { en: 'Major creative projects', zh: '主要创作项目' },
    color: JOURNEY_NODE_COLORS.project.icon
  },
  {
    type: 'branch',
    label: { en: 'Branches', zh: '分支' },
    description: { en: 'Side explorations and interests', zh: '侧向探索与兴趣' },
    color: JOURNEY_NODE_COLORS.branch.icon
  },
  {
    type: 'reference',
    label: { en: 'References', zh: '参考资料' },
    description: { en: 'Books, resources, and inspiration', zh: '书籍、资源与灵感' },
    color: JOURNEY_NODE_COLORS.reference.icon
  }
] as const;

export const DEFAULT_JOURNEY_LAYOUT = {
  type: 'vertical' as const,
  spacing: { x: 200, y: 150 }
} as const;
