import LandingNavigation from './navigation/LandingNavigation';
import { type Language } from "@/lib/types";

interface NavigationProps {
  isDark: boolean;
  onThemeToggle: () => void;
  language: Language;
  onLanguageToggle: () => void;
}

export default function Navigation({ isDark, onThemeToggle, language, onLanguageToggle }: NavigationProps) {
  return (
    <LandingNavigation
      isDark={isDark}
      onThemeToggle={onThemeToggle}
      language={language}
      onLanguageToggle={onLanguageToggle}
    />
  );
}