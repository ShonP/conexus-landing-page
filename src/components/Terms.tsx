'use client';

import React from 'react';
import styles from '../styles/Legal.module.css';
import { useTranslation } from '../i18n/client';

// Define types for structured content
interface TermsSection {
  title: string;
  content?: string[];
  list?: string[];
}

const Terms: React.FC = () => {
  const { t } = useTranslation();

  // Get sections with proper typing
  const sections = t<TermsSection[]>('terms.sections', { returnObjects: true });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t('terms.title')}</h1>
      <div className={styles.lastUpdated}>{t('terms.lastUpdated')}</div>
      
      {sections.map((section, index) => (
        <section className={styles.section} key={index}>
          <h2>{section.title}</h2>
          
          {/* Handle regular content */}
          {section.content && section.content.map((paragraph, paraIndex) => (
            <p key={paraIndex}>{paragraph}</p>
          ))}
          
          {/* Handle lists if they exist */}
          {section.list && (
            <ul>
              {section.list.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
};

export default Terms; 