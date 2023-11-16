/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/Components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
    },
  },
  plugins: [require('daisyui')],
}
