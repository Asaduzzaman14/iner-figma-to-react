/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      solway: ['Solway', 'serif'],
      sans: ['Open Sans', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
}

