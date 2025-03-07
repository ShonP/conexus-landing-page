import { defaultLanguage, isValidLanguage } from './config';

export function getLanguageFromPath(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  const langCode = segments[0];
  
  // Check if it's a valid language code
  if (langCode && isValidLanguage(langCode)) {
    return langCode;
  }
  
  // Default to English
  return defaultLanguage.code;
}

export function removeLanguageFromPath(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  const langCode = segments[0];
  
  if (langCode && isValidLanguage(langCode)) {
    return '/' + segments.slice(1).join('/');
  }
  
  return pathname;
}

/**
 * Generate a language-specific path
 * @param path The base path without language prefix
 * @param langCode The language code
 * @returns Full path with language prefix
 */
export function getLanguagePath(path: string, langCode: string): string {
  // If the path already contains a language code, replace it
  if (path.match(/^\/[a-z]{2}(-[a-z]{2})?/i)) {
    return path.replace(/^\/[a-z]{2}(-[a-z]{2})?/i, `/${langCode}`);
  }
  
  // Remove any leading slash for consistent handling
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  // If it's an empty path (root), just return /{langCode}
  if (!cleanPath) {
    return `/${langCode}`;
  }
  
  // Otherwise, return /{langCode}/{path}
  return `/${langCode}/${cleanPath}`;
} 