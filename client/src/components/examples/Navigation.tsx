import Navigation from '../Navigation';
import { LANGUAGES } from '@/lib/constants';

export default function NavigationExample() {
  return (
    <Navigation
      isDark={false}
      onThemeToggle={() => console.log('Theme toggled')}
      language={LANGUAGES.EN}
      onLanguageToggle={() => console.log('Language toggled')}
    />
  );
}