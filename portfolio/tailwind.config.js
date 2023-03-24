/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      color: {
        "header-background": "#011825",
        "section-background": "#002431",
        "contact-text": "#291003",
        "contact-bg": "rgba(41, 16, 3, 255)",
        "header-text": "#f2f4f4 ",
        "icons": "#84a4b5",
        "body-text": "#607482",
        "orange": "#b51f06",
        "light-blue": "#37a3a9",
        "light-blue2": "#498a9e",
        
      },
      fontFamily : {
      "sans": ('PT Sans', 'sans-serif')
    }
    },
  },
  plugins: [],
}
