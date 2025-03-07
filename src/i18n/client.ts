"use client";

import { useLanguage } from "./LanguageProvider";

interface TranslationParams {
  returnObjects?: boolean;
  [key: string]: unknown;
}

// For stringifying translations
function stringify(value: unknown): string {
  if (typeof value === "string") return value;
  if (value === null || value === undefined) return "";
  return String(value);
}

export function useTranslation() {
  const { language, translations } = useLanguage();

  // Generic t function with type overloads
  function t(key: string): string;
  function t<T extends unknown[]>(
    key: string,
    params: TranslationParams & { returnObjects: true }
  ): T;
  function t(key: string, params?: TranslationParams): string;
  function t(key: string, params?: TranslationParams): unknown {
    // Split the key by dots to access nested properties
    const keys = key.split(".");
    let value: unknown = translations;

    // Navigate through the nested structure
    for (const k of keys) {
      if (value && typeof value === "object" && k in (value as Record<string, unknown>)) {
        value = (value as Record<string, unknown>)[k];
      } else {
        // Return the key if translation not found
        return key;
      }
    }

    // If returnObjects is true and value is an array or object, return it directly
    if (
      params?.returnObjects &&
      (Array.isArray(value) || typeof value === "object")
    ) {
      return value;
    }

    // If the value is not a string, convert it to string for display
    if (typeof value !== "string") {
      return stringify(value);
    }

    // Replace parameters if provided
    if (params) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { returnObjects, ...stringParams } = params;

      return Object.entries(stringParams).reduce(
        (acc, [paramKey, paramValue]) => {
          return acc.replace(
            new RegExp(`{{${paramKey}}}`, "g"),
            stringify(paramValue)
          );
        },
        value
      );
    }

    return value;
  }

  return {
    t,
    language,
  };
}
