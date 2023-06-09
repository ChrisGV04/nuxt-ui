const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app.vue', './pages/**/*.vue'],
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
        primary: colors.sky,
      },
    },
  },
};
