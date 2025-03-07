'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../i18n/LanguageProvider';
import { getLanguagePath } from '../i18n/utils';
import { useTranslation } from '../i18n/client';
import BottomCTA from './BottomCTA';
import styles from './Features.module.css';

// Define types for our structured content
interface FeatureItem {
  id: string;
  icon: string;
}

interface FeatureRow {
  feature: string;
  conexus: string;
  others: string;
}

export default function Features() {
  const { language } = useLanguage();
  const { t } = useTranslation();

  // Get features with proper typing
  const featureItems = [
    { id: 'multi-social', icon: '📅' },
    { id: 'project-based', icon: '📁' },
    { id: 'media-management', icon: '🖼️' },
    { id: 'collaboration', icon: '👥' },
    { id: 'notifications', icon: '🔔' },
    { id: 'webhooks', icon: '🔄' },
    { id: 'analytics', icon: '📊' },
    { id: 'mobile-first', icon: '📱' },
  ];

  // Get rows with proper typing
  const comparisonRows = t<FeatureRow[]>('features.page.comparison.rows', { returnObjects: true });

  return (
    <div className={styles.features}>
      <section className={styles.hero}>
        <h1>{t('features.page.hero.title')}</h1>
        <p>{t('features.page.hero.subtitle')}</p>
        <div className={styles.freeBanner}>
          <span className={styles.badge}>🎉</span> {t('pricing.title')}
        </div>
      </section>

      <section className={styles.featureList}>
        <div className={styles.featureGrid}>
          {featureItems.map(item => (
            <div className={styles.featureCard} key={item.id}>
              <div className={styles.featureIcon}>{item.icon}</div>
              <div className={styles.featureContent}>
                <h2>{t(`features.items.${item.id}.title`)}</h2>
                <p>{t(`features.items.${item.id}.description`)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className={styles.comparison}>
        <h2>{t('features.page.comparison.title')}</h2>
        <p>{t('features.page.comparison.description')}</p>
        
        <div className={styles.comparisonTable}>
          <table>
            <thead>
              <tr>
                <th>{t('features.page.comparison.headers.feature')}</th>
                <th>{t('features.page.comparison.headers.conexus')}</th>
                <th>{t('features.page.comparison.headers.others')}</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, index) => (
                <tr key={index}>
                  <td>{row.feature}</td>
                  <td className={styles.free}>{row.conexus}</td>
                  <td>{row.others}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <BottomCTA />
    </div>
  );
} 