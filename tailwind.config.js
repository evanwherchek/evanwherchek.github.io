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
        'comfort-blue': '#20b3ff'
      }
    }
  },
  plugins: [],
}
