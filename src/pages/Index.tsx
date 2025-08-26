import Navigation from '@/components/Navigation';
import EventsCarousel from '@/components/EventsCarousel';
import AboutSection from '@/components/AboutSection';
import BistroSection from '@/components/BistroSection';
import StudioSection from '@/components/StudioSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <EventsCarousel />
        <AboutSection />
        <BistroSection />
        <StudioSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
