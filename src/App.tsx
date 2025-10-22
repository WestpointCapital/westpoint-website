import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Cases from "./pages/Cases";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import Chatbot from "./pages/Chatbot";
import SmsEmail from "./pages/SmsEmail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import NotFound from "./pages/NotFound";
import VillaVieResidences from "./pages/cases/VillaVieResidences";
import Bedreklima from "./pages/cases/Bedreklima";
import Nicolinehus from "./pages/cases/Nicolinehus";
import NordicRefrigeration from "./pages/cases/NordicRefrigeration";
import Swissblu from "./pages/cases/Swissblu";
import Reimbursement from "./pages/cases/Reimbursement";
import Validation from "./pages/cases/Validation";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Initialize Cal.com embed
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
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        
        {/* Fixed Consultation Button */}
        <button 
          data-cal-link="westpoint-capital/free-consultation-call"
          data-cal-namespace="free-consultation-call"
          data-cal-config='{"layout":"month_view"}'
          className="z-[999999999999] fixed md:bottom-6 bottom-4 md:right-10 right-4 hero-button px-8 py-4 h-auto inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-[300px] bg-primary text-primary-foreground hover:bg-primary/90"
          data-schedule-consultation
        >
          <Calendar className="mr-2 w-5 h-5" />
          Schedule Consultation
        </button>

        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/sms-email" element={<SmsEmail />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/cases/villa-vie-residences" element={<VillaVieResidences />} />
            <Route path="/cases/bedreklima" element={<Bedreklima />} />
            <Route path="/cases/nikolinehus" element={<Nicolinehus />} />
            <Route path="/cases/nordic-refrigeration" element={<NordicRefrigeration />} />
            <Route path="/cases/swissblu" element={<Swissblu />} />
            <Route path="/cases/reimbursement" element={<Reimbursement />} />
            <Route path="/cases/validation" element={<Validation />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
