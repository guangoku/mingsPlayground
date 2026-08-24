import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import OneDayAWeekDetail from "@/components/blog/details/one-day-a-week/OneDayAWeekDetail";
import BaseNavigation from "@/components/navigation/BaseNavigation";
import OceanBand from "@/components/OceanBand";

/**
 * "One Day a Week" - the CharityBox essay. A written piece with its own
 * route, wearing the same detail-page chrome as the project pages.
 */
export default function OneDayAWeekPage() {
    const { language, toggleLanguage } = useLanguage();
    const navigate = useNavigate();
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const shouldBeDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);

        setIsDark(shouldBeDark);
        document.documentElement.classList.toggle('dark', shouldBeDark);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleThemeToggle = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        document.documentElement.classList.toggle('dark', newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    };

    const handleBack = () => {
        navigate('/#projects');
    };

    return (
        <div className="min-h-screen detail-bg sea-motifs-sparse">
            <BaseNavigation
                variant="blog"
                language={language}
                isDark={isDark}
                onThemeToggle={handleThemeToggle}
                onLanguageToggle={toggleLanguage}
                title={{ en: 'One Day a Week', zh: '每周一天' }}
                onBack={handleBack}
                backText={{ en: 'Back', zh: '返回' }}
            />
            <OceanBand className="h-36 md:h-44" />
            <div className="max-w-6xl mx-auto px-6 pt-8 md:pt-12 pb-20">
                <OneDayAWeekDetail language={language} />
            </div>
        </div>
    );
}
