import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CalEmbed from "./components/CalEmbed"; // Desktop version
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CalEmbed />
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

export default App;
