// tailwind.config.js  (FULL FIXED CODE - custom fonts + HeroUI plugin)
const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"], // fallback
        mono: ["var(--font-mono)", "monospace"],
        altroned: ["var(--font-altroned)", "sans-serif"],
        bitpop: ["var(--font-bitpop)", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

module.exports = config;