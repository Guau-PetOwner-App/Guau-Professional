import { useEffect, useRef, useState } from 'react';
import { Check, Clock, CalendarCheck, Receipt } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, useScroll } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../translations';

export function SolutionSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCard, setActiveCard] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const features = [
    {
      icon: Clock,
      title: t.solution.card1Title,
      description: t.solution.card1Description,
      benefits: [
        t.solution.card1Benefit1,
        t.solution.card1Benefit2,
        t.solution.card1Benefit3,
      ],
      imageUrl: 'https://images.unsplash.com/photo-1735597403677-2029485b4547?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBncm9vbWluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjA0NDAwMjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-[#53C6F0]/20 to-[#7BDCFF]/10',
    },
    {
      icon: CalendarCheck,
      title: t.solution.card2Title,
      description: t.solution.card2Description,
      benefits: [
        t.solution.card2Benefit1,
        t.solution.card2Benefit2,
        t.solution.card2Benefit3,
      ],
      imageUrl: 'https://images.unsplash.com/photo-1695908608663-30ca2034b2a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBkYXljYXJlJTIwaW5kb29yJTIwcGxheXxlbnwxfHx8fDE3NjA0NDMyMjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-[#E96F42]/20 to-[#FF7F50]/10',
    },
    {
      icon: Receipt,
      title: t.solution.card3Title,
      description: t.solution.card3Description,
      benefits: [
        t.solution.card3Benefit1,
        t.solution.card3Benefit2,
        t.solution.card3Benefit3,
      ],
      imageUrl: 'https://images.unsplash.com/photo-1719464454959-9cf304ef4774?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBjYXJlJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzYwNDQwMDIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-[#91FF3A]/20 to-[#91FF3A]/10',
    },
  ];

  // Update active card based on scroll progress
  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      const cardIndex = Math.min(
        Math.floor(latest * features.length),
        features.length - 1
      );
      setActiveCard(cardIndex);
    });
  }, [scrollYProgress, features.length]);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-b from-white to-[#939CAE]/10"
      style={{ height: `${features.length * 100}vh` }}
      aria-labelledby="solution-heading"
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl w-full">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 
              id="solution-heading"
              className="text-[#2D2F34] mb-4" 
              style={{
                fontSize: 'var(--font-section-headline)',
                lineHeight: 'var(--line-section)',
                fontWeight: 700,
                letterSpacing: '-0.01em'
              }}
            >
              {t.solution.title}
            </h2>
            <p 
              className="text-[#4A5568]" 
              style={{
                fontSize: 'var(--font-body-large)',
                lineHeight: 'var(--line-body-large)'
              }}
            >
              {t.solution.subtitle}
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center gap-3 mb-8 md:mb-12">
            {features.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  index === activeCard 
                    ? 'w-12 bg-[#53C6F0]' 
                    : 'w-8 bg-[#939CAE]/30'
                }`}
                aria-label={`Feature ${index + 1} ${index === activeCard ? 'active' : ''}`}
              />
            ))}
          </div>

          {/* Cards Container */}
          <div className="relative h-[550px] md:h-[420px]">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = index === activeCard;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 50,
                    scale: isActive ? 1 : 0.95,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className={`absolute inset-0 ${!isActive ? 'pointer-events-none' : ''}`}
                >
                  <div className={`grid md:grid-cols-2 gap-6 md:gap-10 items-center h-full bg-gradient-to-br ${feature.gradient} rounded-3xl p-5 md:p-8 shadow-xl`}>
                    {/* Image */}
                    <motion.div 
                      className="relative h-56 md:h-full order-2 md:order-1 min-h-[240px] md:min-h-0"
                      initial={{ x: -30, opacity: 0 }}
                      animate={isActive ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <div className="rounded-2xl shadow-2xl overflow-hidden h-full w-full">
                        <ImageWithFallback 
                          src={feature.imageUrl}
                          alt={feature.title}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      {/* Decorative element */}
                      <div className="absolute -top-3 -right-3 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full" aria-hidden="true" />
                    </motion.div>

                    {/* Content */}
                    <motion.div 
                      className="order-1 md:order-2 flex flex-col justify-center"
                      initial={{ x: 30, opacity: 0 }}
                      animate={isActive ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white shadow-lg">
                          <Icon className="w-6 h-6 text-[#53C6F0]" aria-hidden="true" />
                        </div>
                        <h3 
                          className="text-[#2D2F34]" 
                          style={{
                            fontSize: 'var(--font-subheading)',
                            lineHeight: 'var(--line-subheading)',
                            fontWeight: 600
                          }}
                        >
                          {feature.title}
                        </h3>
                      </div>
                      
                      <p 
                        className="text-[#4A5568] mb-5" 
                        style={{
                          fontSize: 'var(--font-body-regular)',
                          lineHeight: 'var(--line-body-regular)'
                        }}
                      >
                        {feature.description}
                      </p>

                      <div className="space-y-2.5">
                        {feature.benefits.map((benefit, idx) => (
                          <motion.div 
                            key={idx} 
                            className="flex items-start gap-2.5"
                            initial={{ x: 20, opacity: 0 }}
                            animate={isActive ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
                            transition={{ duration: 0.4, delay: 0.4 + (idx * 0.1) }}
                          >
                            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#53C6F0]/15 flex-shrink-0 mt-0.5">
                              <Check className="w-3.5 h-3.5 text-[#53C6F0]" aria-hidden="true" />
                            </div>
                            <span className="text-[#2D2F34] text-[15px] leading-snug">{benefit}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            className="text-center mt-8 md:mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: activeCard < features.length - 1 ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-[#939CAE] text-sm flex items-center justify-center gap-2">
              <span>Sigue scrolleando para ver más</span>
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ↓
              </motion.span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
