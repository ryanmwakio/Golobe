// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        "blackish-green": "#112211",
        "mint-green": "#8DD3BB",
        slamon: "#FF8682"
      },
      boxShadow: {
        mintgreen: "0px 0px 3px 3px #8DD3BB"
      }
    }
  },
  plugins: []
}
