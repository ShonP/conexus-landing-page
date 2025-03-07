'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from '../theme/ThemeProvider';
import styles from '../styles/ThemeToggle.module.css';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  // Use state to track if we're on the client
  const [isMounted, setIsMounted] = useState(false);
  
  // Once the component mounts, we know we're on the client
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Default to a placeholder during server-rendering
  // Only render the actual theme toggle on the client
  if (!isMounted) {
    return <div className={styles.themeToggle} aria-hidden="true" />;
  }
  
  return (
    <button 
      className={styles.themeToggle} 
      onClick={toggleTheme} 
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? (
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path 
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle 
            cx="12" 
            cy="12" 
            r="5" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <line 
            x1="12" 
            y1="1" 
            x2="12" 
            y2="3" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <line 
            x1="12" 
            y1="21" 
            x2="12" 
            y2="23" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <line 
            x1="4.22" 
            y1="4.22" 
            x2="5.64" 
            y2="5.64" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <line 
            x1="18.36" 
            y1="18.36" 
            x2="19.78" 
            y2="19.78" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <line 
            x1="1" 
            y1="12" 
            x2="3" 
            y2="12" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <line 
            x1="21" 
            y1="12" 
            x2="23" 
            y2="12" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <line 
            x1="4.22" 
            y1="19.78" 
            x2="5.64" 
            y2="18.36" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <line 
            x1="18.36" 
            y1="5.64" 
            x2="19.78" 
            y2="4.22" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
