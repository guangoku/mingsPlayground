/**
 * Shared type definitions
 * Critical types for type safety across the application
 */

// Language type is defined in constants.ts and re-exported here for convenience
export type { Language } from './constants';

/**
 * Bilingual text object with English and Chinese versions
 */
export interface BilingualText {
  en: string;
  zh: string;
}

/**
 * Bilingual array object with English and Chinese versions
 */
export interface BilingualArray {
  en: string[];
  zh: string[];
}

/**
 * Common props interface for components that use language
 */
export interface LanguageProps {
  language: import('./constants').Language;
}

/**
 * Common props interface for components that handle language switching
 */
export interface LanguageToggleProps extends LanguageProps {
  onLanguageToggle: () => void;
}

/**
 * Common props interface for components that handle theme switching
 */
export interface ThemeProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

/**
 * Common props interface for components that handle both language and theme
 */
export interface LanguageAndThemeProps extends LanguageProps, ThemeProps {}
