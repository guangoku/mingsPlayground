import BaseNavigation from './BaseNavigation';
import { type Language } from '@/lib/types';

interface LandingNavigationProps {
    isDark: boolean;
    onThemeToggle: () => void;
    language: Language;
    onLanguageToggle: () => void;
}

export default function LandingNavigation({
    isDark,
    onThemeToggle,
    language,
    onLanguageToggle
}: LandingNavigationProps) {
    return (
        <BaseNavigation
            isDark={isDark}
            onThemeToggle={onThemeToggle}
            language={language}
            onLanguageToggle={onLanguageToggle}
            variant="landing"
        />
    );
}
