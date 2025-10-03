import { useEffect } from 'react';
import { Hero } from '../components/sections/Hero';
import { WhoWeAre } from '../components/sections/WhoWeAre';
import { VisionMission } from '../components/sections/VisionMission';
import { ContactCard } from '../components/sections/ContactCard';
import { Footer } from '../components/sections/Footer';
import { Chatbot } from '../components/ui/Chatbot';

export const Home = () => {
  useEffect(() => {
    // Check if we need to scroll to a specific section
    const sectionToScroll = sessionStorage.getItem('scrollToSection');
    if (sectionToScroll) {
      sessionStorage.removeItem('scrollToSection');
      // Wait for page to load then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionToScroll);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <WhoWeAre />
      <VisionMission />
      <ContactCard />
      <Footer />
      <Chatbot />
    </div>
  );
};