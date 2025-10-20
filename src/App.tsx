import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import CalModal from "./components/CalModal";
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
  const [isCalModalOpen, setIsCalModalOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        
        {/* Fixed Consultation Button */}
        <Button 
          onClick={() => setIsCalModalOpen(true)}
          className="z-[999999999999] fixed md:bottom-6 bottom-4 md:right-10 right-4 hero-button px-8 py-4 h-auto"
          data-schedule-consultation
        >
          <Calendar className="mr-2 w-5 h-5" />
          Schedule Consultation
        </Button>

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
        
        <CalModal isOpen={isCalModalOpen} onClose={() => setIsCalModalOpen(false)} />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
