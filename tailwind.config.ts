import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: '#05080a',
          panel: '#09110d',
          panelAlt: '#0d1811',
          border: '#1d4d2a',
          text: '#c5ffc8',
          muted: '#7db78b',
          accent: '#2cfb72',
          amber: '#ffcc66',
        },
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'monospace'],
        display: ['"VT323"', 'monospace'],
      },
      boxShadow: {
        terminal: '0 0 32px rgba(44, 251, 114, 0.12)',
      },
    },
  },
  plugins: [],
} satisfies Config;
