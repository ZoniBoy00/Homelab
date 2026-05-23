/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#0a0a0a',
          surface: '#0d0d0d',
          green: '#00ff41',
          cyan: '#00d4ff',
          orange: '#ff6b35',
          text: '#e0e0e0',
          muted: '#6a6a6a',
          dim: '#3a3a3a',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      spacing: {
        '7.5': '1.875rem',
        '8.5': '2.125rem',
        '9.5': '2.375rem',
        '10.5': '2.625rem',
        '11.5': '2.875rem',
      },
      fontSize: {
        'xs': ['0.7rem', { lineHeight: '1rem' }],
        'sm': ['0.75rem', { lineHeight: '1.1rem' }],
        'base': ['0.875rem', { lineHeight: '1.25rem' }],
        'lg': ['1rem', { lineHeight: '1.5rem' }],
        'xl': ['1.125rem', { lineHeight: '1.5rem' }],
        '2xl': ['1.25rem', { lineHeight: '1.5rem' }],
      },
      animation: {
        blink: 'blink 2s step-end infinite',
        'cursor-blink': 'cursor-blink 0.7s step-end infinite',
        'pulse-ring': 'pulse-ring 2.5s ease-out infinite',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'card-in': 'card-in 0.6s ease-out backwards',
        'slide-up': 'slide-up 0.4s ease-out forwards',
        'scale-in': 'scale-in 0.3s ease-out forwards',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.25' },
        },
        'cursor-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '0.5' },
          '100%': { transform: 'scale(1.4)', opacity: '0' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'card-in': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
