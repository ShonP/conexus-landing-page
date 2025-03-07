'use client';

import React, { createContext, useContext } from 'react';
import { Language } from './config';

// Import translations
import enTranslations from './translations/en.json';
import esTranslations from './translations/es.json';
import frTranslations from './translations/fr.json';
import arTranslations from './translations/ar.json';
import heTranslations from './translations/he.json';

// Define translations type
type TranslationValue = string | number | boolean | Record<string, unknown> | Array<unknown>;
type Translations = Record<string, TranslationValue>;

// Define available translations
const translationsMap: Record<string, Translations> = {
  en: enTranslations,
  es: esTranslations,
  fr: frTranslations,
  ar: arTranslations,
  he: heTranslations,
  // Add more languages as needed
};

interface LanguageContextType {
  language: Language;
  translations: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  language: { code: 'en', name: 'English', dir: 'ltr' },
  translations: enTranslations,
});

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
  children: React.ReactNode;
  language: Language;
}

export function LanguageProvider({ children, language }: LanguageProviderProps) {
  // Get translations for the current language or fallback to English
  const translations = translationsMap[language.code] || translationsMap.en;

  return (
    <LanguageContext.Provider value={{ language, translations }}>
      {children}
    </LanguageContext.Provider>
  );
} 