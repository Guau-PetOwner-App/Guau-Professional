import { useState } from 'react';
import { Toaster } from './components/ui/sonner';
import { SkipLinks } from './components/SkipLinks';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { ROICalculator } from './components/ROICalculator';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { FooterSection } from './components/FooterSection';
import { WaitlistDialog } from './components/WaitlistDialog';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

/**
 * Guau Pro Landing Page
 * 
 * Accessibility Standards:
 * - WCAG 2.1 Level AA compliant
 * - European Accessibility Act (EAA) compliant
 * - ARIA 1.2 compatible
 * - Section 508 compliant
 * 
 * Features:
 * - Semantic HTML5 structure
 * - Skip links for keyboard navigation
 * - ARIA labels and live regions
 * - 3px focus rings with high contrast
 * - Minimum 44x44px touch targets
 * - prefers-reduced-motion support
 * - i18n support (ES/EN/FR)
 * - Mobile-first responsive design
 */

function AppContent() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white" lang={language}>
      <SkipLinks />
      <Header />
      
      <main role="main">
        <HeroSection onOpenWaitlist={() => setWaitlistOpen(true)} />
        <ProblemSection />
        <SolutionSection />
        <ROICalculator onOpenWaitlist={() => setWaitlistOpen(true)} />
        <PricingSection onOpenWaitlist={() => setWaitlistOpen(true)} />
        <FAQSection />
      </main>
      
      <FooterSection />
      
      <WaitlistDialog open={waitlistOpen} onOpenChange={setWaitlistOpen} />
      <Toaster position="top-center" />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
