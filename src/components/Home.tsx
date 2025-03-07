'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../i18n/LanguageProvider';
import { getLanguagePath } from '../i18n/utils';
import { useTranslation } from '../i18n/client';
import BottomCTA from './BottomCTA';
import styles from './Home.module.css';

// Define the type for the steps
interface Step {
  number: string;
  title: string;
  description: string;
}

export default function Home() {
  const { language } = useLanguage();
  const { t } = useTranslation();

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>{t('hero.title')}</h1>
          <p>
            {t('hero.subtitle')}
          </p>
          <div className={styles.cta}>
            <Link 
              href={getLanguagePath('features', language.code)} 
              className={styles.primaryButton}
            >
              {t('hero.cta')}
            </Link>
            <Link 
              href={getLanguagePath('about', language.code)} 
              className={styles.secondaryButton}
            >
              {t('hero.secondaryCta')}
            </Link>
          </div>
          <div className={styles.freeBanner}>
            <span className={styles.badge}>🎉</span> {t('pricing.title')}
          </div>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.mockup}>
            <div className={styles.imagePlaceholder}>
              <span>Conexus Dashboard</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <h2>{t('features.title')}</h2>
        <p>{t('features.subtitle')}</p>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📅</div>
            <h3>{t('features.scheduling.title')}</h3>
            <p>{t('features.scheduling.description')}</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📊</div>
            <h3>{t('features.analytics.title')}</h3>
            <p>{t('features.analytics.description')}</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🤖</div>
            <h3>{t('features.automation.title')}</h3>
            <p>{t('features.automation.description')}</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>👥</div>
            <h3>{t('features.management.title')}</h3>
            <p>{t('features.management.description')}</p>
          </div>
        </div>
        <div className={styles.viewAll}>
          <Link href={getLanguagePath('features', language.code)}>
            {t('how_it_works.view_all')}
          </Link>
        </div>
      </section>

      <section className={styles.steps}>
        <h2>{t('how_it_works.title')}</h2>
        <div className={styles.stepList}>
          {(t('how_it_works.steps', { returnObjects: true }) as Step[]).map((step, index) => (
            <div className={styles.step} key={index}>
              <div className={styles.stepNumber}>{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <BottomCTA />
    </div>
  );
} 