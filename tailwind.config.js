/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poly': ['"poly"', ...fontFamily.sans],
      },
      colors: {
        'navy': '#101C2D',
        'soft-white': '#FFF8F4',
        'comfort-blue': '#20b3ff',
        'showcase-grey': '#1b1f23',
        'panel-blue': '#010B3C',
        'background-white': '#D5D5D5'
      }
    }
  },
  plugins: [],
}
