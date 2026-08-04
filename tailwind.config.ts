import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          500: '#0284C7',
          600: '#0265D2',
          700: '#1D4ED8',
          800: '#1E3A8A',
          900: '#0F172A',
        },
        emerald: {
          600: '#059669',
          700: '#047857',
        },
        amber: {
          500: '#F59E0B',
          600: '#D97706',
        }
      },
    },
  },
  plugins: [],
};
export default config;
