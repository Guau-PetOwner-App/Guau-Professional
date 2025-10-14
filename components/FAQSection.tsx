import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../translations';

export function FAQSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const faqs = [
    {
      question: t.faq.q1,
      answer: t.faq.a1,
    },
    {
      question: t.faq.q2,
      answer: t.faq.a2,
    },
    {
      question: t.faq.q3,
      answer: t.faq.a3,
    },
    {
      question: t.faq.q4,
      answer: t.faq.a4,
    },
    {
      question: t.faq.q5,
      answer: t.faq.a5,
    },
    {
      question: t.faq.q6,
      answer: t.faq.a6,
    },
  ];

  return (
    <section 
      id="faq"
      className="py-20 md:py-32 bg-[#939CAE]/10 scroll-mt-20"
      aria-labelledby="faq-heading"
      role="region"
    >
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 id="faq-heading" className="text-center mb-4 text-[#2D2F34]" style={{
          fontSize: 'var(--font-section-headline)',
          lineHeight: 'var(--line-section)',
          fontWeight: 700,
          letterSpacing: '-0.01em'
        }}>
          {t.faq.title}
        </h2>
        <p className="text-center text-[#939CAE] mb-16" style={{
          fontSize: 'var(--font-body-large)',
          lineHeight: 'var(--line-body-large)'
        }}>
          {t.faq.subtitle}
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border-2 border-[#7BDCFF] rounded-xl px-6 data-[state=open]:border-[#53C6F0] transition-colors"
            >
              <AccordionTrigger className="text-left hover:no-underline text-[#2D2F34] [&[data-state=open]>svg]:text-[#53C6F0]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#939CAE] leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
