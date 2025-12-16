// config/fonts.ts  (FULL CODE - local fonts with variables)
import localFont from "next/font/local";

// Altroned - for titles/headings
export const altroned = localFont({
  src: "../public/assets/fonts/ALTRONED.woff2",
  display: "swap",
  variable: "--font-altroned",
});

// Bitpop - for body text
export const bitpop = localFont({
  src: "../public/assets/fonts/Bitpop.woff2",
  display: "swap",
  variable: "--font-bitpop",
});