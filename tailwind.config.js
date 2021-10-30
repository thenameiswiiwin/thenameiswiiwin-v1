const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      primary: '#F1E7DA',
    }),
    extend: {
      fontFamily: {
        sans: ['HKGrotesk', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        8: '8.5vw',
        15: '15.3vw',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
