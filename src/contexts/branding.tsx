'use client';

import React, {
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { BrandingTheme } from '../types/branding-theme';

export interface BrandingContextType {
  brandingTheme: BrandingTheme | null;
  setBrandingTheme: (branding: BrandingTheme) => void;
}

const BRANDING_STORAGE_KEY = '@white-label:branding';

function generateBrandingCSS(branding: BrandingTheme) {
  return `
    :root {
      ${Object.entries(branding[':root'])
        .map(([key, value]) => `${key}: ${value}`)
        .join(';')}
    }

    .dark {
      ${Object.entries(branding['.dark'])
        .map(([key, value]) => `${key}: ${value}`)
        .join(';')}
    }
  `;
}

function getInitialBranding(): BrandingTheme | null {
  if (typeof window === 'undefined') return null;

  try {
    const savedBranding = localStorage.getItem(BRANDING_STORAGE_KEY);

    return savedBranding ? (JSON.parse(savedBranding) as BrandingTheme) : null;
  } catch (error) {
    console.error('Error loading branding from localStorage:', error);

    return null;
  }
}

export const BrandingContext = createContext<BrandingContextType>(
  {} as BrandingContextType
);

export function BrandingProvider({ children }: { children: React.ReactNode }) {
  const [brandingTheme, setBrandingThemeState] = useState<BrandingTheme | null>(
    getInitialBranding
  );
  const styleRef = useRef<HTMLStyleElement | null>(null);

  const setBrandingTheme = useCallback((newBrandingTheme: BrandingTheme) => {
    setBrandingThemeState(newBrandingTheme);
    localStorage.setItem(
      BRANDING_STORAGE_KEY,
      JSON.stringify(newBrandingTheme)
    );
  }, []);

  useEffect(() => {
    if (!styleRef.current) {
      const style = document.createElement('style');
      style.id = 'custom-branding';
      document.head.appendChild(style);
      styleRef.current = style;
    }

    return () => {
      if (styleRef.current) {
        document.head.removeChild(styleRef.current);
        styleRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!brandingTheme || !styleRef.current) return;
    styleRef.current.innerHTML = generateBrandingCSS(brandingTheme);
  }, [brandingTheme]);

  return (
    <BrandingContext.Provider value={{ brandingTheme, setBrandingTheme }}>
      {children}
    </BrandingContext.Provider>
  );
}
