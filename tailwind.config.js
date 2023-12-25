/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors : {
        'custom-blue': '#818FB4',
        'custom-grey' : '#B9B9B9',
        'custom-card-bg' : "rgba(63, 40, 9, 0.71)",
      }
    },
  },
  plugins: [],
}

