import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        leaf: {
          50: '#f4fbf1',
          100: '#ddf4d6',
          200: '#bbe9b0',
          300: '#90d786',
          400: '#66c45f',
          500: '#48ac46',
          600: '#388a37',
          700: '#2e6d2e',
          800: '#285729',
          900: '#224823'
        }
      },
      boxShadow: {
        glow: '0 20px 70px rgba(56, 138, 55, 0.22)'
      },
      fontFamily: {
        heading: ['var(--font-cinzel)'],
        body: ['var(--font-noto)']
      },
      backgroundImage: {
        hero: "linear-gradient(120deg, rgba(17, 49, 29, 0.68), rgba(42, 90, 57, 0.34)), url('https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=2200&q=80')"
      }
    }
  },
  plugins: []
};

export default config;
