import { LanguageSelector } from './LanguageSelector';
import { PawIcon } from './icons/PawIcon';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../translations';

/**
 * Header Component
 * Semantic HTML5 header with navigation
 * WCAG 2.1 AA compliant
 */
export function Header() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b-2 border-[#7BDCFF]/30 shadow-sm"
      role="banner"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <nav
          className="flex items-center justify-between h-20"
          role="navigation"
          aria-label={language === 'es' ? 'Navegación principal' : language === 'en' ? 'Main navigation' : 'Navigation principale'}
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a
              href="#main-content"
              className="flex items-center gap-3 focus:outline-none focus:ring-[3px] focus:ring-[#53C6F0] focus:ring-offset-2 rounded-lg px-2 py-1 transition-all duration-200 group"
              aria-label={language === 'es' ? 'Guau Pro - Inicio' : language === 'en' ? 'Guau Pro - Home' : 'Guau Pro - Accueil'}
            >
              <PawIcon 
                size={32} 
                className="text-[#53C6F0] group-hover:text-[#E96F42] transition-colors duration-200" 
              />
              <span className="text-[#2D2F34] group-hover:text-[#53C6F0] transition-colors duration-200">
                Guau Pro
              </span>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#pricing"
              className="text-[#939CAE] hover:text-[#53C6F0] transition-colors duration-200 focus:outline-none focus:ring-[3px] focus:ring-[#53C6F0] focus:ring-offset-2 rounded px-3 py-2 min-h-[44px] flex items-center"
            >
              {t.header.pricing}
            </a>
            <a
              href="#faq"
              className="text-[#939CAE] hover:text-[#53C6F0] transition-colors duration-200 focus:outline-none focus:ring-[3px] focus:ring-[#53C6F0] focus:ring-offset-2 rounded px-3 py-2 min-h-[44px] flex items-center"
            >
              {t.header.faq}
            </a>
            <LanguageSelector />
          </div>

          {/* Mobile Language Selector */}
          <div className="md:hidden">
            <LanguageSelector />
          </div>
        </nav>
      </div>
    </header>
  );
}
