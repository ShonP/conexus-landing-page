'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from '../i18n/client';
import ThemeToggle from './ThemeToggle';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../i18n/LanguageProvider';
import { getLanguagePath } from '../i18n/utils';
import styles from '../styles/Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href={getLanguagePath('/', language.code)}>
            <span>Conexus</span>
          </Link>
        </div>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link href={getLanguagePath('/', language.code)}>
                {t('nav.home')}
              </Link>
            </li>
            <li>
              <Link href={getLanguagePath('features', language.code)}>
                {t('nav.features')}
              </Link>
            </li>
            <li>
              <Link href={getLanguagePath('about', language.code)}>
                {t('nav.about')}
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.actions}>
          <ThemeToggle />
          <LanguageSelector />
          <a href="https://app.conexus.ai" className={styles.cta}>
            {t('nav.login')}
          </a>
        </div>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Conexus</h3>
            <p>{t('footer.tagline')}</p>
            <p className={styles.freeOffer}>
              {t('footer.freeUntil')} <strong>June 1, 2025</strong>
            </p>
          </div>
          
          <div className={styles.footerSection}>
            <h3>{t('footer.links')}</h3>
            <ul>
              <li>
                <Link href={getLanguagePath('/', language.code)}>
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href={getLanguagePath('features', language.code)}>
                  {t('nav.features')}
                </Link>
              </li>
              <li>
                <Link href={getLanguagePath('about', language.code)}>
                  {t('nav.about')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h3>{t('footer.legal')}</h3>
            <ul>
              <li>
                <Link href={getLanguagePath('privacy', language.code)}>
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link href={getLanguagePath('terms', language.code)}>
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className={styles.copyright}>
          <p>© {new Date().getFullYear()} Conexus. {t('footer.rights')}</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 