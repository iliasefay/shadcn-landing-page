import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Languages } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="w-auto px-2 gap-1">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="text-sm font-medium">
            {i18n.language === 'ar' ? 'عربي' : 'EN'}
          </span>
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => toggleLanguage('en')}>
          <span className={i18n.language === 'en' ? 'font-bold' : ''}>
            English
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => toggleLanguage('ar')}>
          <span className={i18n.language === 'ar' ? 'font-bold' : ''}>
            العربية
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
