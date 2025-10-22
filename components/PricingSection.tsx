import { Check, Gift } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../translations';

interface PricingSectionProps {
  onOpenWaitlist: () => void;
}

export function PricingSection({ onOpenWaitlist }: PricingSectionProps) {
  const { language } = useLanguage();
  const t = translations[language];

  const plans = [
    {
      name: t.pricing.starter.name,
  price: 10,
      description: t.pricing.starter.description,
      features: [
        t.pricing.starter.feature1,
        t.pricing.starter.feature2,
        t.pricing.starter.feature3,
        t.pricing.starter.feature4,
        t.pricing.starter.feature5,
      ],
      highlighted: false,
      cta: t.pricing.starter.cta,
    },
    {
      name: t.pricing.professional.name,
  price: 29,
      description: t.pricing.professional.description,
      badge: t.pricing.professional.badge,
      features: [
        t.pricing.professional.feature1,
        t.pricing.professional.feature2,
        t.pricing.professional.feature3,
        t.pricing.professional.feature4,
        t.pricing.professional.feature5,
        t.pricing.professional.feature6,
      ],
      highlighted: true,
      cta: t.pricing.professional.cta,
    },
    {
      name: t.pricing.business.name,
  price: 99,
      description: t.pricing.business.description,
      features: [
        t.pricing.business.feature1,
        t.pricing.business.feature2,
        t.pricing.business.feature3,
        t.pricing.business.feature4,
        t.pricing.business.feature5,
        t.pricing.business.feature6,
      ],
      highlighted: false,
      cta: t.pricing.business.cta,
    },
  ];

  return (
    <section 
      id="pricing"
      className="py-20 md:py-32 bg-white scroll-mt-20"
      aria-labelledby="pricing-heading"
      role="region"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 id="pricing-heading" className="text-center mb-4 text-[#2D2F34]" style={{
          fontSize: 'var(--font-section-headline)',
          lineHeight: 'var(--line-section)',
          fontWeight: 700,
          letterSpacing: '-0.01em'
        }}>
          {t.pricing.title}
        </h2>
        <p className="text-center text-[#939CAE] mb-16" style={{
          fontSize: 'var(--font-body-large)',
          lineHeight: 'var(--line-body-large)'
        }}>
          {t.pricing.subtitle}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 flex flex-col relative rounded-2xl transition-all duration-300 ${
                plan.highlighted
                  ? 'border-4 border-[#53C6F0] shadow-2xl scale-105'
                  : 'border-2 border-[#7BDCFF] hover:shadow-xl'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#53C6F0] text-white px-4 py-1 text-xs">
                  {plan.badge}
                </Badge>
              )}

              {/* Precio */}
              <div className="mb-8">
                <h3 className="mb-3 text-[#2D2F34]">{plan.name}</h3>
                <div className="flex items-baseline mb-3">
                  <span className="text-[#2D2F34]">€{plan.price}</span>
                  <span className="text-[#939CAE] ml-2">/{index === 0 ? t.pricing.starter.period : index === 1 ? t.pricing.professional.period : t.pricing.business.period}</span>
                </div>
                <p className="text-[#939CAE]">{plan.description}</p>
              </div>

              {/* Features */}
              <div className="space-y-4 flex-1 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#53C6F0] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#2D2F34]">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button
                onClick={onOpenWaitlist}
                className={`w-full py-6 transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-[#53C6F0] hover:bg-[#E96F42] text-white shadow-lg'
                    : 'border-2 border-[#53C6F0] text-[#53C6F0] bg-transparent hover:bg-[#7BDCFF]/20'
                }`}
                variant={plan.highlighted ? 'default' : 'outline'}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        {/* Nota final */}
        <Card className="mt-16 p-8 bg-[#7BDCFF]/20 max-w-3xl mx-auto text-center rounded-2xl border-2 border-[#7BDCFF]">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Gift className="w-6 h-6 text-[#53C6F0]" aria-hidden="true" />
            <p className="text-[#2D2F34]">{t.pricing.guarantee}</p>
          </div>
          <p className="text-[#939CAE]">
            {t.pricing.noCard}
          </p>
        </Card>
      </div>
    </section>
  );
}
