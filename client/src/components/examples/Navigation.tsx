import Navigation from '../Navigation';

export default function NavigationExample() {
  return (
    <Navigation 
      isDark={false}
      onThemeToggle={() => console.log('Theme toggled')}
      language="en"
      onLanguageToggle={() => console.log('Language toggled')}
    />
  );
}