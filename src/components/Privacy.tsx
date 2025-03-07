'use client';

import React from 'react';
import styles from '../styles/Legal.module.css';
import { useTranslation } from '../i18n/client';

// Define types for structured content
interface PrivacySubsection {
  title: string;
  content: string;
  list?: string[];
}

interface PrivacySection {
  title: string;
  content?: string[];
  list?: string[];
  additionalContent?: string[];
  subsections?: PrivacySubsection[];
}

export default function Privacy() {
  const { t } = useTranslation();

  // Get sections with proper typing
  const sections = t<PrivacySection[]>('privacy.sections', { returnObjects: true });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t('privacy.title')}</h1>
      <div className={styles.lastUpdated}>{t('privacy.lastUpdated')}</div>
      
      {sections.map((section, index) => (
        <section className={styles.section} key={index}>
          <h2>{section.title}</h2>
          
          {/* Handle subsections if they exist */}
          {section.subsections ? (
            section.subsections.map((subsection, subIndex) => (
              <div key={subIndex}>
                <h3>{subsection.title}</h3>
                <p>{subsection.content}</p>
                {subsection.list && (
                  <ul>
                    {subsection.list.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))
          ) : (
            <>
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
              
              {/* Handle additional content after list */}
              {section.additionalContent && section.additionalContent.map((paragraph, paraIndex) => (
                <p key={`additional-${paraIndex}`}>{paragraph}</p>
              ))}
            </>
          )}
        </section>
      ))}
    </div>
  );
} 