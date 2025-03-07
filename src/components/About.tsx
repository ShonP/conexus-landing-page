'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from '../i18n/client';
import styles from './About.module.css';

// Define interfaces for our translation objects
interface ValueItem {
  title: string;
  description: string;
}

interface TeamMember {
  initials: string;
  name: string;
  role: string;
}

export default function About() {
  const { t } = useTranslation();

  return (
    <div className={styles.about}>
      <section className={styles.hero}>
        <h1>{t('about.hero.title')}</h1>
        <p>
          {t('about.hero.subtitle')}
        </p>
      </section>

      <section className={styles.mission}>
        <h2>{t('about.mission.title')}</h2>
        <p>
          {t('about.mission.description')}
        </p>
      </section>

      <section className={styles.story}>
        <div className={styles.storyContent}>
          <h2>{t('about.story.title')}</h2>
          <p>
            {t('about.story.description1')}
          </p>
          <p>
            {t('about.story.description2')}
          </p>
        </div>
        <div className={styles.storyImage}>
          <div className={styles.imagePlaceholder}>
            <span>Our Team</span>
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <h2>{t('about.values.title')}</h2>
        <div className={styles.valueGrid}>
          {t<ValueItem[]>('about.values.items', { returnObjects: true }).map((value, index) => (
            <div className={styles.valueCard} key={index}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.team}>
        <h2>{t('about.team.title')}</h2>
        <p className={styles.teamIntro}>
          {t('about.team.subtitle')}
        </p>
        <div className={styles.memberGrid}>
          {t<TeamMember[]>('about.team.members', { returnObjects: true }).map((member, index) => (
            <div className={styles.memberCard} key={index}>
              <div className={styles.memberPhoto}>
                <span>{member.initials}</span>
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.freeAccess}>
        <div className={styles.freeCard}>
          <h2>{t('pricing.title')}</h2>
          <p>{t('pricing.subtitle')}</p>
          <Link 
            href="https://app.conexus.ai" 
            className={styles.ctaButton}
          >
            {t('cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
} 