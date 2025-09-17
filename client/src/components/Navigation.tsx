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
  { id: 'home', label: { en: 'Home', zh: '首页' }, href: '/', type: 'route' },
  { id: 'about', label: { en: 'About', zh: '关于' }, href: '#about', type: 'scroll' },
  { id: 'projects', label: { en: 'Projects', zh: '项目' }, href: '/projects', type: 'route' },
  { id: 'blog', label: { en: 'Blog', zh: '博客' }, href: '/blog', type: 'route' },
  { id: 'art', label: { en: 'Art', zh: '艺术' }, href: '#art', type: 'scroll' },
  { id: 'resume', label: { en: 'Resume', zh: '简历' }, href: '#resume', type: 'scroll' },
];

export default function Navigation({ isDark, onThemeToggle, language, onLanguageToggle }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
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

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b' : 'bg-transparent'
      }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold text-foreground" data-testid="text-logo">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.type === 'route' ? (
                <Link
                  key={item.id}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === item.href ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  data-testid={`link-${item.id}`}
                >
                  {item.label[language]}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
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
              className="hover-elevate"
              data-testid="button-language-toggle"
            >
              <Globe className="h-4 w-4" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={onThemeToggle}
              className="hover-elevate"
              data-testid="button-theme-toggle"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="hover-elevate" data-testid="button-mobile-menu">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col space-y-4 mt-8">
                    {navItems.map((item) => (
                      item.type === 'route' ? (
                        <Link
                          key={item.id}
                          to={item.href}
                          className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors"
                          data-testid={`mobile-link-${item.id}`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label[language]}
                        </Link>
                      ) : (
                        <button
                          key={item.id}
                          onClick={() => handleNavClick(item)}
                          className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors"
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