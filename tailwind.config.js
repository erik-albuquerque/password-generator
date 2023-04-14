/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        red: {
          400: '#DA2F47'
        },
        gray: {
          400: '#969696',
          700: '#393939',
          800: '#272727',
          900: '#212121'
        },
        purple: {
          500: '#8257E6'
        }
      }
    }
  },
  plugins: []
}
