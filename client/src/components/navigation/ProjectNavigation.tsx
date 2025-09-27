import BaseNavigation from './BaseNavigation';
import { type Language } from '@/lib/types';

interface ProjectNavigationProps {
    isDark: boolean;
    onThemeToggle: () => void;
    language: Language;
    onLanguageToggle: () => void;
    currentProjectId: string;
    onBack?: () => void;
    backText?: { en: string; zh: string };
}

export default function ProjectNavigation({
    isDark,
    onThemeToggle,
    language,
    onLanguageToggle,
    currentProjectId,
    onBack,
    backText
}: ProjectNavigationProps) {
    return (
        <BaseNavigation
            isDark={isDark}
            onThemeToggle={onThemeToggle}
            language={language}
            onLanguageToggle={onLanguageToggle}
            variant="project"
            currentProjectId={currentProjectId}
            onBack={onBack}
            backText={backText}
        />
    );
}
