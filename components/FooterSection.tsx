import { Heart } from 'lucide-react';
import { PawIcon } from './icons/PawIcon';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../translations';

/**
 * Footer Section Component
 * Semantic HTML5 footer with proper navigation
 */
export function FooterSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer 
      className="relative bg-gradient-to-br from-[#0B2F4A] via-[#0B2F4A] to-[#082535] text-white py-16 overflow-hidden"
      role="contentinfo"
    >
      {/* Decorative gradient border top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#53C6F0] via-[#7BDCFF] to-[#E96F42]" aria-hidden="true" />
      
      {/* Subtle blue glow effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#53C6F0]/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7BDCFF]/5 rounded-full blur-3xl" aria-hidden="true" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Branding */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#53C6F0]/15 rounded-lg backdrop-blur-sm border border-[#53C6F0]/20">
                <PawIcon size={28} className="text-[#53C6F0]" />
              </div>
              <h3 className="text-white" style={{
                fontSize: 'var(--font-subheading)',
                lineHeight: 'var(--line-subheading)',
                fontWeight: 600
              }}>Guau Pro</h3>
            </div>
            <p className="text-blue-200/80" style={{
              fontSize: 'var(--font-body-small)',
              lineHeight: 'var(--line-body-small)'
            }}>{t.footer.brandline}</p>
          </div>

          {/* Links */}
          <nav aria-label="Enlaces del producto">
            <h4 className="text-white mb-6 flex items-center gap-2" style={{
              fontSize: 'var(--font-body-large)',
              lineHeight: 'var(--line-body-large)',
              fontWeight: 600
            }}>
              <div className="h-0.5 w-8 bg-gradient-to-r from-[#53C6F0] to-transparent rounded-full" aria-hidden="true" />
              {t.footer.product}
            </h4>
            <ul className="space-y-3 text-sm" role="list">
              <li>
                <a 
                  href="#pricing" 
                  className="text-blue-200/70 hover:text-[#7BDCFF] transition-all duration-200 focus:outline-none focus:text-[#7BDCFF] min-h-[44px] inline-flex items-center group"
                >
                  <span className="relative">
                    {t.footer.pricing}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7BDCFF] group-hover:w-full transition-all duration-200" aria-hidden="true" />
                  </span>
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="text-blue-200/70 hover:text-[#7BDCFF] transition-all duration-200 focus:outline-none focus:text-[#7BDCFF] min-h-[44px] inline-flex items-center group"
                >
                  <span className="relative">
                    {t.footer.faq}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7BDCFF] group-hover:w-full transition-all duration-200" aria-hidden="true" />
                  </span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-blue-200/70 hover:text-[#7BDCFF] transition-all duration-200 focus:outline-none focus:text-[#7BDCFF] min-h-[44px] inline-flex items-center group"
                >
                  <span className="relative">
                    {t.footer.roadmap}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7BDCFF] group-hover:w-full transition-all duration-200" aria-hidden="true" />
                  </span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Enlaces legales">
            <h4 className="text-white mb-6 flex items-center gap-2" style={{
              fontSize: 'var(--font-body-large)',
              lineHeight: 'var(--line-body-large)',
              fontWeight: 600
            }}>
              <div className="h-0.5 w-8 bg-gradient-to-r from-[#FFBBA1] to-transparent rounded-full" aria-hidden="true" />
              {t.footer.legal}
            </h4>
            <ul className="space-y-3 text-sm" role="list">
              <li>
                <a 
                  href="#" 
                  className="text-blue-200/70 hover:text-[#FFBBA1] transition-all duration-200 focus:outline-none focus:text-[#FFBBA1] min-h-[44px] inline-flex items-center group"
                >
                  <span className="relative">
                    {t.footer.terms}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFBBA1] group-hover:w-full transition-all duration-200" aria-hidden="true" />
                  </span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-blue-200/70 hover:text-[#FFBBA1] transition-all duration-200 focus:outline-none focus:text-[#FFBBA1] min-h-[44px] inline-flex items-center group"
                >
                  <span className="relative">
                    {t.footer.privacy}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFBBA1] group-hover:w-full transition-all duration-200" aria-hidden="true" />
                  </span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-blue-200/70 hover:text-[#FFBBA1] transition-all duration-200 focus:outline-none focus:text-[#FFBBA1] min-h-[44px] inline-flex items-center group"
                >
                  <span className="relative">
                    {t.footer.cookies}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFBBA1] group-hover:w-full transition-all duration-200" aria-hidden="true" />
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#53C6F0]/10 pt-8 mt-12">
          <div className="text-center space-y-4">
            <p className="text-blue-300/60 text-sm">{t.footer.copyright}</p>
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#E96F42]/15 backdrop-blur-sm">
                <Heart className="w-4 h-4 text-[#FF7F50] fill-[#FF7F50] animate-pulse" aria-hidden="true" style={{ animationDuration: '2s' }} />
              </div>
              <p className="text-blue-100/90 text-base">{t.footer.tagline}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
