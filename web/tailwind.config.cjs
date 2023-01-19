/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      colors:{
        background: '#09090A',
        hoverbg: '#090905',
      },

      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))'
      },

      fontFamily: {
        quicksand: "'Quicksand', Serif"
      }

    },
  },
  plugins: [],
}
