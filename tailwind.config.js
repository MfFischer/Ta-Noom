/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        earth: {
          50: '#f7f3eb',
          100: '#e8ddc6',
          200: '#d9c7a1',
          300: '#c9b17c',
          400: '#ba9b57',
          500: '#a88542',
          600: '#8c6e37',
          700: '#70572c',
          800: '#544121',
          900: '#382b16',
        },
        moss: {
          50: '#f1f4e9',
          100: '#dbe3c4',
          200: '#c5d29f',
          300: '#afc17a',
          400: '#99b055',
          500: '#839640',
          600: '#6d7c35',
          700: '#57632a',
          800: '#414a1f',
          900: '#2b3114',
        },
        clay: {
          50: '#fdf3f1',
          100: '#f9ddd7',
          200: '#f5c7bd',
          300: '#f1b1a3',
          400: '#ed9b89',
          500: '#e9856f',
          600: '#c26f5d',
          700: '#9b594a',
          800: '#744338',
          900: '#4d2c26',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
        scaleIn: 'scaleIn 0.3s ease-out',
      },
    },
  },
  plugins: [],
};