/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111022',
        muted: '#5d6b7c',
        violet: {
          soft: '#efe7ff',
          light: '#bda7ff',
          main: '#6d28d9',
          dark: '#5b21b6',
        },
      },
      boxShadow: {
        panel: '0 18px 42px rgba(64, 44, 110, 0.14)',
        button: '0 12px 20px rgba(104, 50, 219, 0.3)',
      },
    },
  },
  plugins: [],
}
