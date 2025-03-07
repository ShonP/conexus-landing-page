'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLanguage } from '../i18n/LanguageProvider';
import { languages } from '../i18n/config';
import { getLanguagePath } from '../i18n/utils'; 
import styles from '../styles/LanguageSelector.module.css';

const LanguageSelector: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { language } = useLanguage();

  // Extract the path without language prefix to keep the same page when switching languages
  const basePathname = pathname ? pathname.replace(/^\/[a-z]{2}(-[a-z]{2})?/i, '') : '';
  
  // If basePathname starts with /, remove it
  const cleanPath = basePathname.startsWith('/') ? basePathname.substring(1) : basePathname;

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    // Navigate to the same page but with different language
    if (cleanPath) {
      router.push(`/${newLang}/${cleanPath}`);
    } else {
      router.push(`/${newLang}`);
    }
  };

  // Render the language name in its native language
  const getLanguageLabel = (code: string): string => {
    switch (code) {
      case 'es': return 'Español';
      case 'fr': return 'Français';
      case 'ar': return 'العربية';
      case 'he': return 'עברית';
      default: return 'English'; // en
    }
  };

  return (
    <div className={styles.languageSelector}>
      <select
        value={language.code}
        onChange={handleLanguageChange}
        aria-label="Select language"
        className={styles.select}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {getLanguageLabel(lang.code)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector; 