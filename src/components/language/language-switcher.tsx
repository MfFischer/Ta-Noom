import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import Select from 'react-select';

const languages = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Español' },
  { value: 'fr', label: 'Français' },
  { value: 'de', label: 'Deutsch' },
  { value: 'it', label: 'Italiano' },
  { value: 'pt', label: 'Português' },
  { value: 'ru', label: 'Русский' },
  { value: 'zh', label: '中文' },
  { value: 'ja', label: '日本語' },
  { value: 'ko', label: '한국어' },
  { value: 'ar', label: 'العربية' },
  { value: 'hi', label: 'हिन्दी' },
];

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center space-x-2">
      <Globe className="w-5 h-5 text-moss-600" />
      <Select
        options={languages}
        value={languages.find(lang => lang.value === i18n.language)}
        onChange={(option) => option && i18n.changeLanguage(option.value)}
        className="w-32"
        classNamePrefix="select"
        isSearchable={false}
      />
    </div>
  );
};