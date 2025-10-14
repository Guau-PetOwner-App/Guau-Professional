import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../translations';

/**
 * Skip Links Component
 * WCAG 2.1 AA - Bypass Blocks (2.4.1)
 * Allows keyboard users to skip to main content
 */
export function SkipLinks() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="sr-only focus-within:not-sr-only">
      <a
        href="#main-content"
        className="fixed top-4 left-4 z-50 bg-[#53C6F0] text-white px-6 py-3 rounded-lg shadow-lg focus:outline-none focus:ring-[3px] focus:ring-[#E96F42] focus:ring-offset-2 transition-all duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
      >
        {t.skipToMain}
      </a>
      <a
        href="#pricing"
        className="fixed top-4 left-[200px] z-50 bg-[#53C6F0] text-white px-6 py-3 rounded-lg shadow-lg focus:outline-none focus:ring-[3px] focus:ring-[#E96F42] focus:ring-offset-2 transition-all duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
      >
        {t.skipToPricing}
      </a>
      <a
        href="#faq"
        className="fixed top-4 left-[360px] z-50 bg-[#53C6F0] text-white px-6 py-3 rounded-lg shadow-lg focus:outline-none focus:ring-[3px] focus:ring-[#E96F42] focus:ring-offset-2 transition-all duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
      >
        {t.skipToFAQ}
      </a>
    </div>
  );
}
