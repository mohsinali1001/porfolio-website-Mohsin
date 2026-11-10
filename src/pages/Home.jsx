import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import SkillsPreview from '../components/home/SkillsPreview';
import FeaturedProjects from '../components/home/FeaturedProjects';
import ContactCTA from '../components/home/ContactCTA';

function Home() {
  return (
    <div className="w-full">
      <Hero />
      <AboutPreview />
      <SkillsPreview />
      <FeaturedProjects />
      <ContactCTA />
    </div>
  );
}

export default Home;
