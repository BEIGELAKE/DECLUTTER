/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFD700',
          dark: '#B29700',
          light: '#FFE44D',
        },
        background: {
          DEFAULT: '#121212',
          light: '#1E1E1E',
        },
        text: {
          DEFAULT: '#FFFFFF',
          muted: '#A0A0A0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};