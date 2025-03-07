export interface Language {
  code: string;
  name: string;
  dir: 'ltr' | 'rtl';
}

export const languages: Language[] = [
  {
    code: 'en',
    name: 'English',
    dir: 'ltr',
  },
  {
    code: 'es',
    name: 'Español',
    dir: 'ltr',
  },
  {
    code: 'fr',
    name: 'Français',
    dir: 'ltr',
  },
  {
    code: 'ar',
    name: 'العربية',
    dir: 'rtl',
  },
  {
    code: 'he',
    name: 'עברית',
    dir: 'rtl',
  },
];

export const defaultLanguage = languages[0];

export function getLanguage(code: string): Language {
  return languages.find((lang) => lang.code === code) || defaultLanguage;
}

export function isValidLanguage(lang: string): boolean {
  return languages.some(l => l.code === lang);
} 