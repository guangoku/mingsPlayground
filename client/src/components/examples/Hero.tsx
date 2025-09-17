import Hero from '../Hero';

export default function HeroExample() {
  return (
    <Hero 
      name="Your Name"
      title="Data Engineer & Digital Artist"
      description="I transform complex data into meaningful insights and create beautiful digital art. Passionate about the intersection of technology and creativity."
      onResumeClick={() => console.log('Resume clicked')}
      onProjectsClick={() => console.log('Projects clicked')}
    />
  );
}