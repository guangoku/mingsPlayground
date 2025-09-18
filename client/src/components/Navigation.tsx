import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Sun, Moon, Globe } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

interface NavigationProps {
  isDark: boolean;
  onThemeToggle: () => void;
  language: 'en' | 'zh';
  onLanguageToggle: () => void;
}

const navItems = [
  { id: 'home', label: { en: 'Home', zh: '主页' }, href: '#hero', type: 'scroll' },
  { id: 'projects', label: { en: 'Projects', zh: '作品' }, href: '#projects', type: 'scroll' },
  { id: 'blog', label: { en: 'Blog', zh: '博客' }, href: '#blog', type: 'scroll' },
  { id: 'resume', label: { en: 'Resume', zh: '简历' }, href: '#resume', type: 'scroll' },
  { id: 'contact', label: { en: 'Contact', zh: '联系' }, href: '#contact', type: 'scroll' },
];

export default function Navigation({ isDark, onThemeToggle, language, onLanguageToggle }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.replace('#', ''));
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Call once to set initial state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item: typeof navItems[0]) => {
    setIsOpen(false);

    if (item.type === 'route') {
      // Handle routing - React Router will handle this
      return;
    } else if (item.type === 'scroll') {
      // Handle smooth scrolling for landing page sections
      const element = document.getElementById(item.href.replace('#', ''));
      if (element) {
        const offsetTop = element.offsetTop - 80; // Account for fixed nav
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  // Simple, visible navigation colors
  const isOnHero = !isScrolled;
  const navTextColor = isOnHero ? 'text-white' : 'text-foreground';
  const navHoverColor = isOnHero ? 'hover:text-white' : 'hover:text-primary';
  const navActiveColor = isOnHero ? 'text-white' : 'text-primary';
  const navMutedColor = isOnHero ? 'text-white/80' : 'text-muted-foreground';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
      ? 'bg-background/95 backdrop-blur-md border-b shadow-sm'
      : 'bg-black/20 backdrop-blur-sm'
      }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className={`text-2xl font-bold ${navTextColor} ${isOnHero ? 'drop-shadow-lg' : ''} transition-colors duration-300`} data-testid="text-logo">
            {language === 'en' ? 'Mingyun Guan' : '超级赛亚关'}
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
                  data-testid={`link-${item.id}`}
                >
                  {item.label[language]}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`text-base font-semibold transition-all duration-300 ${navHoverColor} ${activeSection === item.id
                    ? `${navActiveColor} relative after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-current after:rounded-full`
                    : navMutedColor
                    }`}
                  data-testid={`link-${item.id}`}
                >
                  {item.label[language]}
                </button>
              )
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={onLanguageToggle}
              className={`hover-elevate ${navTextColor} ${navHoverColor} transition-colors duration-300 px-3 py-1 gap-2`}
              data-testid="button-language-toggle"
            >
              <Globe className="h-4 w-5" />
              <span className="text-sm font-medium">{language === 'en' ? '中文' : 'EN'}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={onThemeToggle}
              className={`hover-elevate ${navTextColor} ${navHoverColor} transition-colors duration-300 px-3 py-1 gap-2`}
              data-testid="button-theme-toggle"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              <span className="text-sm font-medium">{isDark ? (language === 'en' ? 'Light' : '亮色') : (language === 'en' ? 'Dark' : '暗色')}</span>
            </Button>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className={`hover-elevate ${navTextColor} ${navHoverColor} transition-colors duration-300`} data-testid="button-mobile-menu">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col space-y-4 mt-8">
                    {navItems.map((item) => (
                      item.type === 'route' ? (
                        <Link
                          key={item.id}
                          to={item.href}
                          className="text-left text-xl font-semibold text-foreground hover:text-primary hover:bg-primary/5 px-3 py-2 rounded-lg transition-all duration-300"
                          data-testid={`mobile-link-${item.id}`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label[language]}
                        </Link>
                      ) : (
                        <button
                          key={item.id}
                          onClick={() => handleNavClick(item)}
                          className={`text-left text-xl font-semibold transition-all duration-300 ${activeSection === item.id
                            ? 'text-primary bg-primary/10 px-3 py-2 rounded-lg'
                            : 'text-foreground hover:text-primary hover:bg-primary/5 px-3 py-2 rounded-lg'
                            }`}
                          data-testid={`mobile-link-${item.id}`}
                        >
                          {item.label[language]}
                        </button>
                      )
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}