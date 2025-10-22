import Navigation from '../components/ui/navigation';
import HeroSection from '../components/sections/hero-section';
import ServicesPreview from '../components/sections/services-preview';
import MetricsSection from '../components/sections/metrics-section';
import CasesSectionV2 from '../components/sections/cases-section-v2';
import ValuesSection from '../components/sections/values-section';
import PartnershipSection from '../components/sections/partnership-section';
import Testimonials from '../components/sections/testimonials';
import ContactCTA from '../components/sections/contact-cta';
import Footer from '../components/sections/footer';
import { useEffect } from 'react';

const Index = () => {
         useEffect(() => {
           // Initialize Cal.com embed for Index page
           const script = document.createElement('script');
           script.type = 'text/javascript';
           script.innerHTML = `
             (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
             Cal("init", "free-consultation-call", {origin:"https://app.cal.com"});
             Cal.ns["free-consultation-call"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
           `;
           document.head.appendChild(script);

           return () => {
             if (script.parentNode) {
               script.parentNode.removeChild(script);
             }
           };
         }, []);

  return (
    <div className="min-h-screen bg-slate-950 overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesPreview />
        <PartnershipSection />
        <Testimonials />
        <MetricsSection />
        <CasesSectionV2 />
        <ValuesSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
