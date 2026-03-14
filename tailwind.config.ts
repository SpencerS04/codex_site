import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: '#060908',
          panel: '#0b120f',
          panelAlt: '#111a15',
          border: '#30473a',
          text: '#cddfcf',
          muted: '#8da993',
          accent: '#7ee787',
          amber: '#d8b26a',
          signal: '#e57373',
        },
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'monospace'],
        display: ['"VT323"', 'monospace'],
      },
      boxShadow: {
        terminal: '0 20px 60px rgba(0, 0, 0, 0.42)',
      },
    },
  },
  plugins: [],
} satisfies Config;
