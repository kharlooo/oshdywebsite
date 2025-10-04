import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServiceDetailPage from "./pages/ServiceDetail";
import PackageThemesPage from "./pages/PackageThemes";
import ThemeDetailPage from "./pages/ThemeDetail";
import MenuPage from "./pages/Menu";
import GrazingTableDetailPage from "./pages/GrazingTableDetail";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import LearnMore from "./pages/LearnMore";
import FeedbackWidget from "./components/FeedbackWidget"; // Add this import

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/packages/:packageId" element={<PackageThemesPage />} />
          <Route path="/theme/:themeId" element={<ThemeDetailPage />} />
          <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/grazing/:packageId" element={<GrazingTableDetailPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/how-it-works" element={<LearnMore />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        {/* Add FeedbackWidget here - it will be available on all pages */}
        <FeedbackWidget />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;