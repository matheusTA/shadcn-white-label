'use client';

import { BrandingProvider } from 'shadcn-white-label';
import React from 'react';
import { ThemeProvider } from './theme-provider';

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <BrandingProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </BrandingProvider>
  );
}
