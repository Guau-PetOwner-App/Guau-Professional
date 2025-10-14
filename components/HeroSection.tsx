import { Sparkles, Zap, Link2, CheckCircle, Star } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { PawIcon } from './icons/PawIcon';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../translations';

interface HeroSectionProps {
  onOpenWaitlist: () => void;
}

/**
 * Hero Section Component
 * WCAG 2.1 AA compliant with semantic HTML5
 * ARIA labels for screen readers
 */
export function HeroSection({ onOpenWaitlist }: HeroSectionProps) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section 
      id="main-content"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#7BDCFF]/20 to-[#7BDCFF]/30 py-20 md:py-32 mt-20"
      aria-labelledby="hero-heading"
      role="region"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-[60%_40%] gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <h1 id="hero-heading" className="text-[#2D2F34] text-6xl md:text-7xl xl:text-8xl" style={{ 
              fontSize: 'var(--font-hero-headline, 80px)', 
              lineHeight: 'var(--line-hero, 1.1)',
              fontWeight: 700,
              letterSpacing: '-0.02em'
            }}>
              {t.hero.title}{' '}
              <span className="bg-gradient-to-r from-[#53C6F0] to-[#E96F42] bg-clip-text text-transparent">
                {t.hero.titleHighlight}
              </span>
            </h1>

            <p className="text-[#4A5568] max-w-3xl text-lg md:text-xl" style={{
              fontSize: 'var(--font-body-large, 20px)',
              lineHeight: 'var(--line-body-large, 1.6)'
            }}>
              {t.hero.subtitle}
            </p>

            {/* Beneficios */}
            <ul className="space-y-4" role="list" aria-label="Beneficios principales">
              <li className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-[#53C6F0] flex-shrink-0 mt-1" aria-hidden="true" />
                <p className="text-[#4A5568]" style={{
                  fontSize: 'var(--font-body-regular)',
                  lineHeight: 'var(--line-body-regular)'
                }}>
                  {t.hero.benefit1}
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-[#53C6F0] flex-shrink-0 mt-1" aria-hidden="true" />
                <p className="text-[#4A5568]" style={{
                  fontSize: 'var(--font-body-regular)',
                  lineHeight: 'var(--line-body-regular)'
                }}>
                  {t.hero.benefit2}
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Link2 className="w-6 h-6 text-[#53C6F0] flex-shrink-0 mt-1" aria-hidden="true" />
                <p className="text-[#4A5568]" style={{
                  fontSize: 'var(--font-body-regular)',
                  lineHeight: 'var(--line-body-regular)'
                }}>
                  {t.hero.benefit3}
                </p>
              </li>
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4" role="group" aria-label="Acciones principales">
              <Button
                size="lg"
                onClick={onOpenWaitlist}
                className="bg-[#53C6F0] hover:bg-[#E96F42] text-white px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 min-h-[44px]"
                aria-label={t.hero.ctaPrimary}
                style={{
                  fontSize: 'var(--font-cta)',
                  fontWeight: 500
                }}
              >
                {t.hero.ctaPrimary}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-6 border-2 border-[#53C6F0] text-[#53C6F0] hover:bg-[#7BDCFF]/20 transition-all duration-300 min-h-[44px]"
                aria-label={t.hero.ctaSecondary}
                style={{
                  fontSize: 'var(--font-cta)',
                  fontWeight: 500
                }}
              >
                {t.hero.ctaSecondary}
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row gap-4 text-[#4A5568]" role="list" aria-label="Prueba social" style={{
              fontSize: 'var(--font-body-small)',
              lineHeight: 'var(--line-body-small)'
            }}>
              <div className="flex items-center gap-2" role="listitem">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#91FF3A]/20">
                  <CheckCircle className="w-4 h-4 text-[#2D2F34]" aria-hidden="true" />
                </div>
                <span>{t.hero.socialProof1}</span>
              </div>
              <div className="flex items-center gap-2" role="listitem">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#FF7F50]/20">
                  <Star className="w-4 h-4 text-[#E96F42]" aria-hidden="true" />
                </div>
                <span>{t.hero.socialProof2}</span>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative" role="img" aria-label={t.hero.imageAlt}>
            <div className="rounded-2xl shadow-2xl overflow-hidden aspect-[4/3]">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1581838560913-e731a8ed82e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZ3MlMjBkYXljYXJlfGVufDF8fHx8MTc2MDQ0MDAyMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt={t.hero.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border-2 border-[#7BDCFF] flex items-center justify-center" aria-hidden="true">
              <PawIcon size={40} className="text-[#53C6F0]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
