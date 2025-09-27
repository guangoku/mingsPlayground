import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Sun, Moon, Globe, ArrowLeft, Grid3X3, ChevronLeft, ChevronRight } from "lucide-react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { getBilingualText } from "@/lib/utils";
import { type Language } from "@/lib/types";
import { type Project } from "@/lib/projects";
import { projects, getProjectById } from "@/lib/projects";

export interface NavItem {
    id: string;
    label: { en: string; zh: string };
    href: string;
    type: 'scroll' | 'route' | 'action';
    action?: () => void;
}

export interface NavigationProps {
    isDark: boolean;
    onThemeToggle: () => void;
    language: Language;
    onLanguageToggle: () => void;
    variant?: 'landing' | 'project' | 'minimal';
    currentProjectId?: string;
    onBack?: () => void;
    backText?: { en: string; zh: string };
}

const landingNavItems: NavItem[] = [
    { id: 'home', label: { en: 'Home', zh: '主页' }, href: '#hero', type: 'scroll' },
    { id: 'projects', label: { en: 'Projects', zh: '作品' }, href: '#projects', type: 'scroll' },
    { id: 'blog', label: { en: 'Blog', zh: '博客' }, href: '#blog', type: 'scroll' },
    { id: 'resume', label: { en: 'Resume', zh: '简历' }, href: '#resume', type: 'scroll' },
    { id: 'contact', label: { en: 'Contact', zh: '联系' }, href: '#contact', type: 'scroll' },
];

const projectNavItems: NavItem[] = [
    { id: 'home', label: { en: 'Home', zh: '首页' }, href: '/', type: 'route' },
    { id: 'projects', label: { en: 'Projects', zh: '项目' }, href: '/', type: 'route' },
];

export default function BaseNavigation({
    isDark,
    onThemeToggle,
    language,
    onLanguageToggle,
    variant = 'landing',
    currentProjectId,
    onBack,
    backText = { en: 'Back to Projects', zh: '返回项目' }
}: NavigationProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const location = useLocation();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState<Project | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    // Get current project data for project navigation
    useEffect(() => {
        if (currentProjectId && variant === 'project') {
            const project = getProjectById(currentProjectId);
            if (project) {
                setCurrentProject(project);
                setCurrentIndex(projects.findIndex(p => p.id === currentProjectId));
            }
        }
    }, [currentProjectId, variant]);

    // Handle scroll detection for landing page
    useEffect(() => {
        if (variant !== 'landing') return;

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = landingNavItems.map(item => item.href.replace('#', ''));
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const element = document.getElementById(sections[i]);
                if (element && element.offsetTop <= scrollPosition) {
                    setActiveSection(landingNavItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [variant]);

    const handleNavClick = (item: NavItem) => {
        if (item.type === 'scroll') {
            const element = document.getElementById(item.href.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsOpen(false);
    };

    const handlePreviousProject = () => {
        if (projects.length > 0) {
            const newIndex = currentIndex > 0 ? currentIndex - 1 : projects.length - 1;
            const previousProject = projects[newIndex];
            navigate(`/projects/${getProjectSlug(previousProject.id)}`);
        }
    };

    const handleNextProject = () => {
        if (projects.length > 0) {
            const newIndex = currentIndex < projects.length - 1 ? currentIndex + 1 : 0;
            const nextProject = projects[newIndex];
            navigate(`/projects/${getProjectSlug(nextProject.id)}`);
        }
    };

    const getProjectSlug = (projectId: string): string => {
        const projectRoutes: Record<string, string> = {
            '1': 'octopus-girl',
            '2': 'nepal-travel',
            '3': 'flashmind',
            '4': 'charity-box'
        };
        return projectRoutes[projectId] || 'unknown';
    };

    const handleBackToProjects = () => {
        if (onBack) {
            onBack();
        } else {
            navigate('/');
        }
    };

    // Determine which nav items to show based on variant
    const getNavItems = (): NavItem[] => {
        switch (variant) {
            case 'project':
                return projectNavItems;
            case 'minimal':
                return [];
            default:
                return landingNavItems;
        }
    };

    const navItems = getNavItems();
    const isOnHero = variant === 'landing' && location.pathname === '/' && !isScrolled;
    const navTextColor = isOnHero ? 'text-white' : 'text-foreground';
    const navHoverColor = isOnHero ? 'hover:text-white' : 'hover:text-primary';
    const navActiveColor = isOnHero ? 'text-white' : 'text-primary';
    const navMutedColor = isOnHero ? 'text-white/80' : 'text-muted-foreground';

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || variant !== 'landing'
            ? 'bg-background/95 backdrop-blur-md border-b shadow-sm'
            : 'bg-black/20 backdrop-blur-sm'
            }`}>
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo/Title */}
                    <div className={`text-2xl font-bold ${navTextColor} ${isOnHero ? 'drop-shadow-lg' : ''} transition-colors duration-300`}>
                        {variant === 'project' && currentProject ? (
                            <div className="flex items-center gap-4 min-w-0 flex-1">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={handleBackToProjects}
                                    className="flex items-center gap-2 flex-shrink-0"
                                >
                                    <ArrowLeft className="h-4 w-4" />
                                    {getBilingualText(backText, language)}
                                </Button>
                                <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 flex-shrink-0" />
                                <h1 className="text-2xl font-bold text-gray-900 dark:text-white truncate">
                                    {getBilingualText(currentProject.title, language)}
                                </h1>
                            </div>
                        ) : (
                            getBilingualText({ en: 'Mingyun Guan', zh: '超级赛亚关' }, language)
                        )}
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            item.type === 'route' ? (
                                <Link
                                    key={item.id}
                                    to={item.href}
                                    className={`text-base font-semibold transition-colors hover:text-white ${location.pathname === item.href ? 'text-white' : 'text-white/80'
                                        }`}
                                >
                                    {getBilingualText(item.label, language)}
                                </Link>
                            ) : (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavClick(item)}
                                    className={`text-base font-semibold transition-all duration-300 ${navHoverColor} ${activeSection === item.id
                                        ? `${navActiveColor} relative after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-current after:rounded-full`
                                        : navMutedColor
                                        }`}
                                >
                                    {getBilingualText(item.label, language)}
                                </button>
                            )
                        ))}

                        {/* Project Navigation Controls */}
                        {variant === 'project' && projects.length > 1 && (
                            <div className="flex items-center gap-2 ml-4">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={handlePreviousProject}
                                    className="p-2"
                                    aria-label={getBilingualText({ en: 'Previous project', zh: '上一个项目' }, language)}
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </Button>
                                <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap px-2">
                                    {currentIndex + 1} / {projects.length}
                                </span>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={handleNextProject}
                                    className="p-2"
                                    aria-label={getBilingualText({ en: 'Next project', zh: '下一个项目' }, language)}
                                >
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-2">
                        {/* Theme Toggle */}
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={onThemeToggle}
                            className="p-2"
                            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                        >
                            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                        </Button>

                        {/* Language Toggle */}
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={onLanguageToggle}
                            className="p-2"
                            aria-label="Toggle language"
                        >
                            <Globe className="h-4 w-4" />
                        </Button>

                        {/* Mobile Menu */}
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="md:hidden p-2"
                                    aria-label="Open menu"
                                >
                                    <Menu className="h-4 w-4" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                                <div className="flex flex-col space-y-4 mt-8">
                                    {navItems.map((item) => (
                                        item.type === 'route' ? (
                                            <Link
                                                key={item.id}
                                                to={item.href}
                                                className="text-lg font-semibold py-2"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {getBilingualText(item.label, language)}
                                            </Link>
                                        ) : (
                                            <button
                                                key={item.id}
                                                onClick={() => handleNavClick(item)}
                                                className="text-lg font-semibold py-2 text-left"
                                            >
                                                {getBilingualText(item.label, language)}
                                            </button>
                                        )
                                    ))}

                                    {/* Project Navigation in Mobile */}
                                    {variant === 'project' && projects.length > 1 && (
                                        <div className="flex items-center justify-between pt-4 border-t">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={handlePreviousProject}
                                                className="flex items-center gap-2"
                                            >
                                                <ChevronLeft className="h-4 w-4" />
                                                {getBilingualText({ en: 'Previous', zh: '上一个' }, language)}
                                            </Button>
                                            <span className="text-sm text-muted-foreground">
                                                {currentIndex + 1} / {projects.length}
                                            </span>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={handleNextProject}
                                                className="flex items-center gap-2"
                                            >
                                                {getBilingualText({ en: 'Next', zh: '下一个' }, language)}
                                                <ChevronRight className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
}
