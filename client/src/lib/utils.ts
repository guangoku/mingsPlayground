import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { LANGUAGES, READ_TIME_FORMAT, type Language } from './constants';

/**
 * Utility function for combining class names
 * @param inputs - Class values to combine
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Content utility functions
 * Helper functions for common content operations
 */

/**
 * Get bilingual text based on current language
 * @param text - Object with en and zh properties
 * @param language - Current language ('en' or 'zh')
 * @returns Text in the specified language
 */
export const getBilingualText = (text: { en: string; zh: string }, language: Language): string => {
  return text[language];
};

/**
 * Get bilingual array based on current language
 * @param array - Object with en and zh array properties
 * @param language - Current language ('en' or 'zh')
 * @returns Array in the specified language
 */
export const getBilingualArray = (array: { en: string[]; zh: string[] }, language: Language): string[] => {
  return array[language];
};

/**
 * Format read time based on language
 * @param minutes - Number of minutes
 * @param language - Current language ('en' or 'zh')
 * @returns Formatted read time string
 */
export const formatReadTime = (minutes: number, language: Language): string => {
  return READ_TIME_FORMAT[language](minutes);
};

/**
 * Check if current language is English
 * @param language - Current language
 * @returns True if language is English
 */
export const isEnglish = (language: Language): boolean => {
  return language === LANGUAGES.EN;
};

/**
 * Check if current language is Chinese
 * @param language - Current language
 * @returns True if language is Chinese
 */
export const isChinese = (language: Language): boolean => {
  return language === LANGUAGES.ZH;
};

/**
 * Get the opposite language
 * @param language - Current language
 * @returns The opposite language
 */
export const getOppositeLanguage = (language: Language): Language => {
  return language === LANGUAGES.EN ? LANGUAGES.ZH : LANGUAGES.EN;
};