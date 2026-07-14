/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#17202a',
        muted: '#667085',
        teal: {
          soft: '#e6f4f1',
          light: '#8bc5ba',
          main: '#167c72',
          dark: '#0f5f58',
        },
      },
      boxShadow: {
        panel: '0 14px 32px rgba(15, 48, 54, 0.08)',
      },
      keyframes: {
        wordPop: {
          '0%': { opacity: '0', transform: 'translateY(8px) scale(0.96)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
      animation: {
        'word-pop': 'wordPop 220ms ease-out both',
      },
    },
  },
  plugins: [],
}
