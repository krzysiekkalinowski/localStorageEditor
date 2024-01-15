/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'delete': "url('img/delete-icon.png')",
        'load': "url('img/load-icon.png')",
        'copy': "url('img/copy-icon.png')"
      }
    },
  },
  plugins: [],
}

