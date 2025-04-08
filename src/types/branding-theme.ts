export interface ColorScheme {
  "--background": string;
  "--foreground": string;
  "--sidebar-ring": string;
  "--sidebar-border": string;
  "--sidebar-accent-foreground": string;
  "--sidebar-accent": string;
  "--sidebar-primary-foreground": string;
  "--sidebar-primary": string;
  "--sidebar-foreground": string;
  "--sidebar": string;
  "--chart-5": string;
  "--chart-4": string;
  "--chart-3": string;
  "--chart-2": string;
  "--chart-1": string;
  "--ring": string;
  "--input": string;
  "--border": string;
  "--destructive": string;
  "--accent-foreground": string;
  "--accent": string;
  "--muted-foreground": string;
  "--muted": string;
  "--secondary-foreground": string;
  "--secondary": string;
  "--primary-foreground": string;
  "--primary": string;
  "--popover-foreground": string;
  "--popover": string;
  "--card-foreground": string;
  "--card": string;
}

export interface BrandingTheme {
  ":root": ColorScheme;
  ".dark": ColorScheme;
}
