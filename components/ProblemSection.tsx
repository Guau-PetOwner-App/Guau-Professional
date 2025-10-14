import { Clock, ClipboardList, DollarSign } from 'lucide-react';
import { Card } from './ui/card';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../translations';

/**
 * Problem Section Component
 * Semantic HTML5 with proper ARIA labels
 */
export function ProblemSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const problems = [
    {
      icon: Clock,
      title: t.problem.card1Title,
      description: t.problem.card1Description,
    },
    {
      icon: ClipboardList,
      title: t.problem.card2Title,
      description: t.problem.card2Description,
    },
    {
      icon: DollarSign,
      title: t.problem.card3Title,
      description: t.problem.card3Description,
    },
  ];

  return (
    <section 
      className="py-20 md:py-32 bg-white"
      aria-labelledby="problems-heading"
      role="region"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 id="problems-heading" className="text-center mb-16 text-[#2D2F34]" style={{
          fontSize: 'var(--font-section-headline)',
          lineHeight: 'var(--line-section)',
          fontWeight: 700,
          letterSpacing: '-0.01em'
        }}>
          {t.problem.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-8" role="list">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-[#7BDCFF] hover:border-[#53C6F0] rounded-xl focus-within:ring-[3px] focus-within:ring-[#53C6F0]"
                role="listitem"
                tabIndex={0}
              >
                <Icon className="w-16 h-16 text-[#E96F42] mb-6" aria-hidden="true" />
                <h3 className="mb-4 text-[#2D2F34]" style={{
                  fontSize: 'var(--font-subheading)',
                  lineHeight: 'var(--line-subheading)',
                  fontWeight: 600
                }}>{problem.title}</h3>
                <p className="text-[#939CAE]" style={{
                  fontSize: 'var(--font-body-regular)',
                  lineHeight: 'var(--line-body-regular)'
                }}>{problem.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
