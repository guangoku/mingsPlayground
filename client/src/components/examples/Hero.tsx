import Hero from '../Hero';
import { LANGUAGES } from '@/lib/constants';

export default function HeroExample() {
  return (
    <Hero
      name="Your Name"
      description="I transform complex data into meaningful insights and create beautiful digital art. Passionate about the intersection of technology and creativity."
      language={LANGUAGES.EN}
      onResumeClick={() => console.log('Resume clicked')}
      onProjectsClick={() => console.log('Projects clicked')}
    />
  );
}