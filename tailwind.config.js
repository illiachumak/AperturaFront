/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/Components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [require('daisyui')],
  darkMode: false,
  daisyui: {
    themes: [],
  },
}
