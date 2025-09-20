/**
 * Application-wide constants
 * Centralized location for frequently used values to reduce hardcoding
 */

// Language constants - single source of truth
export const LANGUAGES = {
  EN: 'en',
  ZH: 'zh'
} as const;

// Derive type from constants for type safety
export type Language = typeof LANGUAGES[keyof typeof LANGUAGES];

// Common UI text patterns
export const READ_TIME_FORMAT = {
  en: (minutes: number) => `${minutes} min read`,
  zh: (minutes: number) => `${minutes}分钟阅读`
} as const;

// CSS color variables (most frequently used)
export const COLORS = {
  EMERALD_GREEN: 'hsl(var(--emerald-green))',
  CORAL_FIXED: 'hsl(var(--coral-fixed))',
  GRAPHITE_GRAY: 'hsl(var(--graphite-gray))',
  LIGHT_SLATE_GRAY: 'hsl(var(--light-slate-gray))'
} as const;

// Navigation constants
export const NAVIGATION_OFFSET = 80;

// Common category labels
export const CATEGORIES = {
  ALL: { en: 'All', zh: '全部' },
  ALL_POSTS: { en: 'All Posts', zh: '所有文章' }
} as const;

// Copyright text
export const COPYRIGHT = {
  en: '© 2025 Mingyun Guan. All rights reserved.',
  zh: '© 2025 超级赛亚关 — 版权所有。'
} as const;

// Footer taglines
export const FOOTER_TAGLINES = {
  en: 'Made with ocean hues, code, and curiosity.',
  zh: '用海洋色调、代码与好奇心编织而成。'
} as const;
