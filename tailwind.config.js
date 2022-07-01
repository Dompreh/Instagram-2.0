module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  
  plugins: [require("@tailwindcss/forms"),
  require('tailwind-scrollbar'),
  require('tailwind-scrollbar-hide'),
],
}