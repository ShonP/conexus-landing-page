'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from '../i18n/client';
import styles from './BottomCTA.module.css';

const BottomCTA: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.bottomCTA}>
      <div className={styles.content}>
        <h2>{t('cta.title')}</h2>
        <p>{t('cta.subtitle')}</p>
        <Link 
          href="https://app.conexus.ai" 
          className={styles.ctaButton}
        >
          {t('cta.button')}
        </Link>
      </div>
    </section>
  );
};

export default BottomCTA; 