import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Slider } from './ui/slider';
import { BarChart3, TrendingUp, Clock, CheckCircle2, Euro } from 'lucide-react';
import { useROICalculator } from '../hooks/useROICalculator';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../translations';
import CountUp from 'react-countup';

interface ROICalculatorProps {
  onOpenWaitlist: () => void;
}

export function ROICalculator({ onOpenWaitlist }: ROICalculatorProps) {
  const { language } = useLanguage();
  const t = translations[language];
  const { inputs, setInputs, results } = useROICalculator({
    minutesUpdates: 45,
    minutesBookings: 20,
    minutesPayments: 15,
    hourlyRate: 20,
  });

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[#7BDCFF]/20 via-white to-[#7BDCFF]/10">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-center mb-4 text-[#2D2F34]" style={{
          fontSize: 'var(--font-section-headline)',
          lineHeight: 'var(--line-section)',
          fontWeight: 700,
          letterSpacing: '-0.01em'
        }}>
          {t.roi.title}
        </h2>
        <p className="text-center text-[#939CAE] mb-16" style={{
          fontSize: 'var(--font-body-large)',
          lineHeight: 'var(--line-body-large)'
        }}>
          {t.roi.subtitle}
        </p>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Inputs */}
          <Card className="p-8 bg-white rounded-2xl shadow-lg border-2 border-[#7BDCFF]/30 lg:sticky lg:top-24 z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#53C6F0]/10">
                <BarChart3 className="w-6 h-6 text-[#53C6F0]" aria-hidden="true" />
              </div>
              <h3 className="text-[#2D2F34]" style={{
                fontSize: 'var(--font-subheading)',
                lineHeight: 'var(--line-subheading)',
                fontWeight: 600
              }}>{t.roi.adjustValues}</h3>
            </div>

            <div className="space-y-8">
              {/* Slider 1 */}
              <div>
                <Label className="mb-4 flex justify-between items-center text-[#2D2F34]" style={{
                  fontSize: 'var(--font-body-small)',
                  lineHeight: 'var(--line-body-small)'
                }}>
                  <span>{t.roi.minutesUpdates}</span>
                  <span className="text-[#53C6F0] font-semibold text-lg">{inputs.minutesUpdates} {t.roi.minutes}</span>
                </Label>
                <Slider
                  value={[inputs.minutesUpdates]}
                  onValueChange={([value]) =>
                    setInputs((prev) => ({ ...prev, minutesUpdates: value }))
                  }
                  min={0}
                  max={120}
                  step={5}
                  className="w-full"
                />
              </div>

              {/* Slider 2 */}
              <div>
                <Label className="mb-4 flex justify-between items-center text-[#2D2F34]" style={{
                  fontSize: 'var(--font-body-small)',
                  lineHeight: 'var(--line-body-small)'
                }}>
                  <span>{t.roi.minutesBookings}</span>
                  <span className="text-[#53C6F0] font-semibold text-lg">{inputs.minutesBookings} {t.roi.minutes}</span>
                </Label>
                <Slider
                  value={[inputs.minutesBookings]}
                  onValueChange={([value]) =>
                    setInputs((prev) => ({ ...prev, minutesBookings: value }))
                  }
                  min={0}
                  max={60}
                  step={5}
                />
              </div>

              {/* Slider 3 */}
              <div>
                <Label className="mb-4 flex justify-between items-center text-[#2D2F34]" style={{
                  fontSize: 'var(--font-body-small)',
                  lineHeight: 'var(--line-body-small)'
                }}>
                  <span>{t.roi.minutesPayments}</span>
                  <span className="text-[#53C6F0] font-semibold text-lg">{inputs.minutesPayments} {t.roi.minutes}</span>
                </Label>
                <Slider
                  value={[inputs.minutesPayments]}
                  onValueChange={([value]) =>
                    setInputs((prev) => ({ ...prev, minutesPayments: value }))
                  }
                  min={0}
                  max={60}
                  step={5}
                />
              </div>

              {/* Input número */}
              <div className="pt-4 border-t-2 border-[#7BDCFF]/30">
                <Label htmlFor="hourlyRate" className="mb-4 block text-[#2D2F34]" style={{
                  fontSize: 'var(--font-body-small)',
                  lineHeight: 'var(--line-body-small)'
                }}>
                  {t.roi.hourlyRateLabel}
                </Label>
                <div className="relative">
                  <Euro className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#939CAE]" aria-hidden="true" />
                  <Input
                    id="hourlyRate"
                    type="number"
                    value={inputs.hourlyRate}
                    onChange={(e) =>
                      setInputs((prev) => ({
                        ...prev,
                        hourlyRate: Number(e.target.value) || 0,
                      }))
                    }
                    min={0}
                    max={200}
                    className="pl-11 border-2 border-[#7BDCFF] focus:border-[#53C6F0] focus:ring-[#53C6F0] text-lg"
                  />
                </div>
              </div>
            </div>
          </Card>

          {/* Right Column - Results */}
          <div className="space-y-6">
            {/* Title */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#91FF3A]/20">
                <CheckCircle2 className="w-6 h-6 text-[#2D2F34]" aria-hidden="true" />
              </div>
              <h3 className="text-[#2D2F34]" style={{
                fontSize: 'var(--font-subheading)',
                lineHeight: 'var(--line-subheading)',
                fontWeight: 600
              }}>{t.roi.yourSavings}</h3>
            </div>

            {/* Two comparison cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Current Situation */}
              <Card className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-2xl border-2 border-gray-200 relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gray-300/20 rounded-full -mr-12 -mt-12" aria-hidden="true" />
                <div className="relative flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-5 h-5 text-[#939CAE]" aria-hidden="true" />
                    <p className="text-xs text-[#939CAE] font-medium uppercase tracking-wide">{t.roi.timeLostCurrently}</p>
                  </div>
                  <div className="mb-2 flex-1 flex items-center">
                    <div className="text-4xl font-bold text-[#2D2F34]">
                      <CountUp end={results.totalMinutesPerDay} duration={1.5} /> 
                      <span className="text-2xl text-[#939CAE]"> {t.roi.minPerDay}</span>
                    </div>
                  </div>
                  <div className="text-sm text-[#939CAE] space-y-0.5">
                    <div>= <CountUp end={results.hoursPerWeek} decimals={1} duration={1} /> {t.roi.hoursPerWeek}</div>
                    <div>= <CountUp end={results.hoursPerYear} duration={1} /> {t.roi.hoursPerYear}</div>
                  </div>
                </div>
              </Card>

              {/* With Guau Pro */}
              <Card className="bg-gradient-to-br from-[#91FF3A]/10 to-[#91FF3A]/20 p-5 rounded-2xl border-2 border-[#91FF3A] relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#91FF3A]/20 rounded-full -mr-12 -mt-12" aria-hidden="true" />
                <div className="relative flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2D2F34]" aria-hidden="true" />
                    <p className="text-xs text-[#2D2F34] font-medium uppercase tracking-wide">{t.roi.withGuauPro}</p>
                  </div>
                  <div className="mb-2 flex-1 flex items-center">
                    <div className="text-4xl font-bold text-[#2D2F34]">
                      <CountUp end={results.savedHoursPerWeek} decimals={1} duration={1.5} /> 
                      <span className="text-2xl text-[#2D2F34]/70"> {t.roi.hPerWeek}</span>
                    </div>
                  </div>
                  <div className="text-sm text-[#2D2F34] space-y-0.5">
                    <div>= <CountUp end={results.savedHoursPerYear} duration={1} /> {t.roi.hoursPerYear}</div>
                    <div className="opacity-0 select-none" aria-hidden="true">Placeholder</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Main Savings Card - HERO */}
            <Card className="bg-gradient-to-br from-[#53C6F0] via-[#53C6F0] to-[#7BDCFF] p-8 rounded-3xl border-2 border-[#53C6F0] shadow-2xl relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mt-16" aria-hidden="true" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mb-20" aria-hidden="true" />
              
              <div className="relative">
                <div className="text-center">
                  <p className="text-white/90 mb-2 uppercase tracking-wide" style={{
                    fontSize: 'var(--font-body-small)',
                    lineHeight: 'var(--line-body-small)',
                    fontWeight: 500
                  }}>{t.roi.annualSavings}</p>
                  
                  {/* HUGE Number */}
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <span className="text-white" style={{
                      fontSize: '64px',
                      fontWeight: 800,
                      lineHeight: 1,
                      letterSpacing: '-0.02em'
                    }}>
                      €<CountUp end={results.savedMoneyPerYear} separator="," duration={2} />
                    </span>
                  </div>

                  {/* Cost & ROI */}
                  <div className="space-y-2.5">
                    <div className="inline-block bg-white/20 backdrop-blur-sm rounded-xl px-5 py-2.5">
                      <p className="text-white/80 text-sm">
                        {t.roi.guauProCost} <span className="font-semibold text-white">€{results.costPerYear}{t.roi.perYear}</span>
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-center gap-3 p-3 bg-white/25 backdrop-blur-sm rounded-2xl border border-white/30">
                      <TrendingUp className="w-5 h-5 text-white/90" aria-hidden="true" />
                      <span className="text-white" style={{
                        fontSize: '22px',
                        fontWeight: 600,
                        lineHeight: 1
                      }}>
                        {t.roi.roi} <CountUp end={results.roi} duration={2} />%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* CTA Button */}
            <div className="text-center pt-3">
              <Button
                size="lg"
                onClick={onOpenWaitlist}
                className="w-full bg-gradient-to-r from-[#E96F42] to-[#FF7F50] hover:from-[#FF7F50] hover:to-[#E96F42] text-white px-10 py-7 shadow-2xl hover:shadow-[#E96F42]/50 transition-all duration-300 hover:scale-[1.03] rounded-2xl"
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  letterSpacing: '0.01em'
                }}
              >
                {t.roi.joinBeta}
              </Button>
              <p className="text-sm text-[#939CAE] mt-3 font-medium">
                {t.roi.waitlistCount}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
