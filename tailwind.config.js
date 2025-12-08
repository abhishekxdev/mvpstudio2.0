/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
      },
      fontWeight: {
        '550': '550',
        '599': '599',
      },
      colors: {
        'ln-gray': {
          0: '#ffffff',
          25: '#fcfcfc',
          50: '#f9f9f9',
          100: '#f3f3f3',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          450: '#8a8a8a',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          925: '#101010',
          950: '#0a0a0a',
        },
        'ln-orange': '#F05023',
        'template': {
          hr: '#F05023',
          finance: '#23B2E7',
          marketing: '#A259FF',
          crypto: '#F4BF4E',
          ai: '#61C655'
        }
      },
      boxShadow: {
        'ln-xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'ln-subheading': '0 0 0 1px rgba(0, 0, 0, 0.08), inset 0 1px 2px rgba(255, 255, 255, 0.12)',
        'ln-badge-gray': '0 0 0 1px rgba(61, 61, 61, 0.12), inset 0 0.75px 0.75px rgba(255, 255, 255, 0.64)',
        'ln-badge-orange': '0 0 0 1px rgba(240, 80, 35, 0.12), inset 0 0.75px 0.75px rgba(255, 255, 255, 0.32)',
        'ln-badge-green': '0 0 0 1px rgba(34, 197, 94, 0.12), inset 0 0.75px 0.75px rgba(255, 255, 255, 0.32)',
        'ln-button-white': '0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0,0,0,0.08)',
        'ln-button-gray': '0 1px 2px 0 rgba(0, 0, 0, 0.05), inset 0 1px 0.5px rgba(255,255,255,0.1)',
        'ln-customization-button': '0 0 0 2px #fff, 0 0 0 4px #e5e5e5',
        'ln-toggle-active': '0 4px 8px rgba(116, 27, 2, 0.06), 0 2px 4px rgba(116, 27, 2, 0.04), 0 1px 2px rgba(116, 27, 2, 0.04), inset 0 -0.5px 0.5px rgba(240, 80, 35, 0.08)',
      },
      fontSize: {
        'ln-label-xs': ['12px', { lineHeight: '16px', fontWeight: '500' }],
        'ln-label-sm': ['13px', { lineHeight: '18px', fontWeight: '500' }],
        'ln-label-md': ['14px', { lineHeight: '20px', fontWeight: '500' }],
        'ln-label-lg': ['16px', { lineHeight: '24px', fontWeight: '500' }],
        'ln-paragraph-xs': ['12px', { lineHeight: '18px', fontWeight: '400' }],
        'ln-paragraph-sm': ['13px', { lineHeight: '20px', fontWeight: '400' }],
        'ln-paragraph-md': ['14px', { lineHeight: '24px', fontWeight: '400' }],
        'ln-paragraph-lg': ['16px', { lineHeight: '26px', fontWeight: '400' }],
        'ln-title-h1': ['56px', { lineHeight: '64px', fontWeight: '550', letterSpacing: '-0.022em' }],
        'ln-title-h3': ['34px', { lineHeight: '40px', fontWeight: '550', letterSpacing: '-0.022em' }],
        'ln-title-h4': ['28px', { lineHeight: '36px', fontWeight: '550', letterSpacing: '-0.02em' }],
        'ln-title-h6': ['18px', { lineHeight: '24px', fontWeight: '550', letterSpacing: '-0.01em' }],
        'ln-subheading-xs': ['10px', { lineHeight: '12px', fontWeight: '600', letterSpacing: '0.04em' }],
      },
      borderRadius: {
        '20': '20px',
      },
      transitionDuration: {
        '450': '450ms',
      },
      animation: {
        'spark': 'spark 2s linear infinite',
      },
      keyframes: {
        spark: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        }
      }
    }
  },
  plugins: [],
}
