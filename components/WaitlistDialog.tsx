import { useState } from 'react';
import { UserPlus, Mail, Building2, Gift } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { toast } from 'sonner';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../translations';
import { WaitlistService } from '../services/waitlistService';

interface WaitlistDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function WaitlistDialog({ open, onOpenChange }: WaitlistDialogProps) {
  const { language } = useLanguage();
  const t = translations[language];

  const businessTypes = [
    { value: 'hotel', label: t.waitlist.businessHotel },
    { value: 'daycare', label: t.waitlist.businessDaycare },
    { value: 'petsitter', label: t.waitlist.businessPetsitter },
    { value: 'grooming', label: t.waitlist.businessGrooming },
    { value: 'veterinary', label: t.waitlist.businessVeterinary },
    { value: 'training', label: t.waitlist.businessTraining },
    { value: 'other', label: t.waitlist.businessOther },
  ];

  const petVolumeOptions = [
    { value: '1-10', label: t.waitlist.volume1 },
    { value: '11-30', label: t.waitlist.volume2 },
    { value: '31-100', label: t.waitlist.volume3 },
    { value: '100+', label: t.waitlist.volume4 },
  ];

  const featureOptions = [
    { value: 'updates', label: t.waitlist.feature1 },
    { value: 'guau-app', label: t.waitlist.feature2 },
    { value: 'team', label: t.waitlist.feature3 },
    { value: 'billing', label: t.waitlist.feature4 },
    { value: 'qr-checkin', label: t.waitlist.feature5 },
  ];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: '',
    petVolume: '',
    companyName: '',
    phone: '',
    features: [] as string[],
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast.error(t.waitlist.errorConsent);
      return;
    }

    if (!formData.name || !formData.email || !formData.businessType || !formData.petVolume) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      // Check if email already exists
      const emailExists = await WaitlistService.checkEmailExists(formData.email);
      
      if (emailExists) {
        toast.error('This email is already on our waitlist');
        setIsSubmitting(false);
        return;
      }

      // Submit to Supabase
      const result = await WaitlistService.submitLead({
        email: formData.email,
        full_name: formData.name,
        business_type: formData.businessType,
        pet_volume: formData.petVolume,
        company_name: formData.companyName || undefined,
        phone: formData.phone || undefined,
        marketing_consent: formData.consent,
      });

      if (result.success) {
        toast.success(t.waitlist.successTitle, {
          description: t.waitlist.successDescription,
          duration: 6000, // Show for 6 seconds
          style: {
            background: '#ffffff',
            border: '2px solid #53C6F0',
            color: '#2D2F34',
          },
          className: 'text-base',
          descriptionClassName: 'text-sm text-[#53C6F0] font-semibold mt-1',
        });

        setFormData({
          name: '',
          email: '',
          businessType: '',
          petVolume: '',
          companyName: '',
          phone: '',
          features: [],
          consent: false,
        });
        onOpenChange(false);
      } else {
        toast.error('Error saving your information', {
          description: result.error || 'Please try again later',
          duration: 5000,
          style: {
            background: '#ffffff',
            border: '2px solid #f87171',
            color: '#2D2F34',
          },
          className: 'text-base',
          descriptionClassName: 'text-sm text-red-600 font-semibold mt-1',
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('An unexpected error occurred', {
        description: 'Please try again later',
        duration: 5000,
        style: {
          background: '#ffffff',
          border: '2px solid #f87171',
          color: '#2D2F34',
        },
        className: 'text-base',
        descriptionClassName: 'text-sm text-red-600 font-semibold mt-1',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFeature = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(value)
        ? prev.features.filter((f) => f !== value)
        : [...prev.features, value],
    }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[85vh] overflow-y-auto bg-white rounded-3xl border-2 border-[#53C6F0]/30 shadow-2xl p-0">
        <div className="p-6 sm:p-8">
          <DialogHeader className="space-y-4 text-left">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#53C6F0] to-[#7BDCFF] shadow-lg flex-shrink-0">
                <Gift className="w-7 h-7 text-white" aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0">
                <DialogTitle className="text-[#2D2F34] mb-2" style={{
                  fontSize: '28px',
                  lineHeight: '1.2',
                  fontWeight: 700,
                  letterSpacing: '-0.01em'
                }}>
                  {t.waitlist.title}
                </DialogTitle>
                <DialogDescription className="text-[#2D2F34]" style={{
                  fontSize: 'var(--font-body-regular)',
                  lineHeight: 'var(--line-body-regular)'
                }}>
                  {t.waitlist.subtitle} <strong className="text-[#E96F42] font-semibold">{t.waitlist.freeMonths}</strong> {t.waitlist.launch}
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#2D2F34]">
                {t.waitlist.emailLabel} <span className="text-[#E96F42]">{t.waitlist.required}</span>
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#53C6F0] pointer-events-none" aria-hidden="true" />
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t.waitlist.emailPlaceholder}
                  required
                  className="border-2 border-[#7BDCFF]/50 hover:border-[#7BDCFF] focus:border-[#53C6F0] focus:ring-2 focus:ring-[#53C6F0]/20 pl-11 h-12 transition-all"
                />
              </div>
            </div>

            {/* Nombre */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[#2D2F34]">
                {t.waitlist.nameLabel} <span className="text-[#E96F42]">{t.waitlist.required}</span>
              </Label>
              <div className="relative">
                <UserPlus className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#53C6F0] pointer-events-none" aria-hidden="true" />
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t.waitlist.namePlaceholder}
                  required
                  className="border-2 border-[#7BDCFF]/50 hover:border-[#7BDCFF] focus:border-[#53C6F0] focus:ring-2 focus:ring-[#53C6F0]/20 pl-11 h-12 transition-all"
                />
              </div>
            </div>

            {/* Company Name (Optional) */}
            <div className="space-y-2">
              <Label htmlFor="companyName" className="text-[#2D2F34]">
                Company Name <span className="text-[#939CAE] text-sm">(Optional)</span>
              </Label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#53C6F0] pointer-events-none" aria-hidden="true" />
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="Your business name"
                  className="border-2 border-[#7BDCFF]/50 hover:border-[#7BDCFF] focus:border-[#53C6F0] focus:ring-2 focus:ring-[#53C6F0]/20 pl-11 h-12 transition-all"
                />
              </div>
            </div>

            {/* Phone (Optional) */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-[#2D2F34]">
                Phone Number <span className="text-[#939CAE] text-sm">(Optional)</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1 (555) 123-4567"
                className="border-2 border-[#7BDCFF]/50 hover:border-[#7BDCFF] focus:border-[#53C6F0] focus:ring-2 focus:ring-[#53C6F0]/20 h-12 transition-all"
              />
            </div>

            {/* Tipo de negocio */}
            <div className="space-y-2">
              <Label htmlFor="businessType" className="text-[#2D2F34]">
                {t.waitlist.businessLabel} <span className="text-[#E96F42]">{t.waitlist.required}</span>
              </Label>
              <Select
                value={formData.businessType}
                onValueChange={(value) => setFormData({ ...formData, businessType: value })}
                required
              >
                <SelectTrigger 
                  id="businessType"
                  className="border-2 border-[#7BDCFF]/50 hover:border-[#7BDCFF] focus:border-[#53C6F0] focus:ring-2 focus:ring-[#53C6F0]/20 h-12 transition-all"
                >
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-[#53C6F0]" aria-hidden="true" />
                    <SelectValue placeholder={t.waitlist.businessPlaceholder} />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-white border-2 border-[#7BDCFF]/50 shadow-xl">
                  {businessTypes.map((type) => (
                    <SelectItem 
                      key={type.value} 
                      value={type.value}
                      className="focus:bg-[#53C6F0]/10 focus:text-[#2D2F34] cursor-pointer"
                    >
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Volumen de mascotas */}
            <div className="space-y-3">
              <Label className="text-[#2D2F34]">
                {t.waitlist.volumeLabel} <span className="text-[#E96F42]">{t.waitlist.required}</span>
              </Label>
              <RadioGroup
                value={formData.petVolume}
                onValueChange={(value) => setFormData({ ...formData, petVolume: value })}
                className="space-y-2"
                required
              >
                {petVolumeOptions.map((option) => (
                  <label 
                    key={option.value}
                    htmlFor={`volume-${option.value}`}
                    className="flex items-center gap-3 p-3 rounded-xl border-2 border-[#7BDCFF]/30 hover:border-[#53C6F0] hover:bg-[#53C6F0]/5 transition-all cursor-pointer"
                  >
                    <RadioGroupItem 
                      value={option.value} 
                      id={`volume-${option.value}`}
                      className="border-2 border-[#53C6F0] text-[#53C6F0]"
                    />
                    <span className="text-[#2D2F34]">
                      {option.label}
                    </span>
                  </label>
                ))}
              </RadioGroup>
            </div>

            {/* Features preferidas */}
            <div className="space-y-3">
              <Label className="text-[#2D2F34]">
                {t.waitlist.featuresLabel} <span className="text-[#939CAE] text-sm font-normal">{t.waitlist.featuresOptional}</span>
              </Label>
              <div className="space-y-2">
                {featureOptions.map((feature) => (
                  <label 
                    key={feature.value}
                    htmlFor={`feature-${feature.value}`}
                    className="flex items-center gap-3 p-3 rounded-xl border-2 border-[#7BDCFF]/30 hover:border-[#53C6F0] hover:bg-[#53C6F0]/5 transition-all cursor-pointer"
                  >
                    <Checkbox
                      id={`feature-${feature.value}`}
                      checked={formData.features.includes(feature.value)}
                      onCheckedChange={() => toggleFeature(feature.value)}
                      className="border-2 border-[#53C6F0] data-[state=checked]:bg-[#53C6F0] data-[state=checked]:text-white"
                    />
                    <span className="text-[#2D2F34]">
                      {feature.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Consent */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#53C6F0]/5 border-2 border-[#53C6F0]/20">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, consent: checked as boolean })
                }
                className="mt-0.5 border-2 border-[#53C6F0] data-[state=checked]:bg-[#53C6F0] data-[state=checked]:text-white flex-shrink-0"
                required
              />
              <Label 
                htmlFor="consent"
                className="text-sm text-[#2D2F34] cursor-pointer leading-relaxed"
              >
                {t.waitlist.consentText}
              </Label>
            </div>

            {/* Submit Button */}
            <div className="space-y-2 pt-2">
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#53C6F0] to-[#7BDCFF] hover:from-[#E96F42] hover:to-[#FF7F50] text-white py-6 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] rounded-2xl"
                disabled={isSubmitting}
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  letterSpacing: '0.01em'
                }}
              >
                {isSubmitting ? t.waitlist.submitting : t.waitlist.submitButton}
              </Button>
              <p className="text-center text-xs text-[#939CAE]">
                {t.waitlist.footer}
              </p>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
