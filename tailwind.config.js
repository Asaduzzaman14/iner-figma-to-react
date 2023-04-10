/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      solway: ['Solway', 'serif'],
    },
    colors: {
      blue: '#002550',
      black: '#1A1A1A',
      white: '#fff'
    },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
}

