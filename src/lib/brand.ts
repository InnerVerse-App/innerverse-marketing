// Mirror of ../../../src/lib/brand.ts (the PWA's brand file, two
// directories up since this site lives at innerverse-web-app/innerverse-website/).
// Keep in sync if the app palette changes. Defined here as TS for
// type-safe consumers and also exported as CSS variables in
// src/styles/global.css for Tailwind utilities.

export const BRAND = {
  primary: "#59A4C0",
  primaryContrast: "#FFFFFF",
  dark: "#00050A",
  text: "#0F172A",
  surface: "#FFFFFF",
  destructive: "#B0200C",
  success: "#1E6C30",
  alert: "#DCA114",
} as const;

export const APP_URL = "https://app.innerverseapp.com";
