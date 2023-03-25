/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "header-background": "#071b24",
        "section-background": "#002431",
        "contact-text": "#291003",
        "contact-bg": "rgba(41, 16, 3, 255)",
        "header-text": "#506e75",
        "icons": "#84a4b5",
        "icons-bg": "#002733",
        "body-text": "#607482",
        "orange": "#b51f06",
        "light-blue": "#37a3a9",
        "light-blue2": "#498a9e",
        "about-section": "#012630",
        "about-header": "#fcfcfc",
        "about-text": "#465b67",
      },
      fontFamily : {
        "sans": ("PT Sans", "Noto Sans Display", "Nunito", "sans-serif"),
        "cursive": ("Dancing Script",  "sans-serif"),
    }
    },
  },
  plugins: [],
}
