/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: () => ({
        'brand-color': '#4c3398',
        'primary-brand-color': '#5d3ebc',
        'secondary-brand-color': '#7849f7',
        'brand-color-yellow': '#ffd300',
        'color-text-dark': '#3e3e3e',
        'primary-light-color': '#f3f0fe'
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')],
}
