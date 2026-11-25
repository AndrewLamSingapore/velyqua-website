import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        abyss: '#010A11',
        deep: '#041523',
        deep2: '#061B2D',
        navy: '#062A4E',
        midnight: '#0B2748',
        teal: '#007F86',
        cyan: {
          DEFAULT: '#00BFC7',
          glow: '#4AF0E3',
          soft: '#8FE8E1',
          pale: '#A5E9E5',
        },
        aqua: '#DDF6F3',
        foam: '#F5FFFF',
        mist: '#F4FBFB',
        ink: '#EAF4F6',
        muted: '#7A96A8',
        line: '#12314B',
        coral: '#D8624A',
        amber: '#D79A24',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      maxWidth: {
        site: '78rem',
      },
      backgroundImage: {
        'radial-fade': 'radial-gradient(ellipse at center, transparent 0%, rgba(1,10,17,0.9) 100%)',
      },
      boxShadow: {
        'cyan-glow': '0 0 40px -8px rgba(74,240,227,0.35)',
        panel: '0 24px 80px -32px rgba(0,0,0,0.8)',
      },
    },
  },
  plugins: [],
};

export default config;
