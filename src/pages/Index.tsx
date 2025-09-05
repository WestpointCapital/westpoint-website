import Navigation from '../components/ui/navigation';
import HeroSection from '../components/sections/hero-section';
import ServicesPreview from '../components/sections/services-preview';
import MetricsSection from '../components/sections/metrics-section';
import CasesSectionV2 from '../components/sections/cases-section-v2';
import ValuesSection from '../components/sections/values-section';
import PartnershipSection from '../components/sections/partnership-section';
import Testimonials from '../components/sections/testimonials';
import IntegrationsSection from '../components/sections/integrations-section';
import ContactCTA from '../components/sections/contact-cta';
import Footer from '../components/sections/footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesPreview />
        <MetricsSection />
        <CasesSectionV2 />
        <ValuesSection />
        <PartnershipSection />
        <Testimonials />
        <IntegrationsSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
