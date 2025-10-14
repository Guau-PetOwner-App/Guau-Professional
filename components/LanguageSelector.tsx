import { Globe } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { useLanguage, type Language } from '../hooks/useLanguage';
import { translations } from '../translations';

/**
 * Language Selector Component
 * ISO 639-1 compliant language switcher
 * Persists selection in localStorage
 */
export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 border-2 border-[#7BDCFF] hover:border-[#53C6F0] hover:bg-[#7BDCFF]/20 transition-all duration-200 min-h-[44px] min-w-[44px]"
          aria-label={t.language.label}
        >
          <Globe className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only">{t.language.label}: </span>
          <span>{language.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-white border-2 border-[#7BDCFF] rounded-xl shadow-lg"
      >
        <DropdownMenuItem
          onClick={() => setLanguage('es')}
          className={`cursor-pointer min-h-[44px] px-4 ${
            language === 'es' ? 'bg-[#7BDCFF]/20 text-[#2D2F34]' : 'text-[#939CAE]'
          } hover:bg-[#7BDCFF]/30 focus:bg-[#7BDCFF]/30 focus:outline-none focus:ring-[3px] focus:ring-[#53C6F0]`}
        >
          {t.language.spanish}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage('en')}
          className={`cursor-pointer min-h-[44px] px-4 ${
            language === 'en' ? 'bg-[#7BDCFF]/20 text-[#2D2F34]' : 'text-[#939CAE]'
          } hover:bg-[#7BDCFF]/30 focus:bg-[#7BDCFF]/30 focus:outline-none focus:ring-[3px] focus:ring-[#53C6F0]`}
        >
          {t.language.english}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage('fr')}
          className={`cursor-pointer min-h-[44px] px-4 ${
            language === 'fr' ? 'bg-[#7BDCFF]/20 text-[#2D2F34]' : 'text-[#939CAE]'
          } hover:bg-[#7BDCFF]/30 focus:bg-[#7BDCFF]/30 focus:outline-none focus:ring-[3px] focus:ring-[#53C6F0]`}
        >
          {t.language.french}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
