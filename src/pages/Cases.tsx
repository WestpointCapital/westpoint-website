import Navigation from '../components/ui/navigation';
import CasesHero from '../components/sections/cases-hero';
import LogoSlider from '../components/sections/logo-slider';
import CasesGrid from '../components/sections/cases-grid';
import Footer from '../components/sections/footer';

const Cases = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="relative z-[60]">
        <Navigation />
      </div>
      <main>
        <CasesHero />
        <LogoSlider />
        <CasesGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Cases;