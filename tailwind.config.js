/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
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
        mintgreen: "0px 3px 3px 1px #8DD3BB"
      }
    }
  },
  plugins: []
}
