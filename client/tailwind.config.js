/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
import mainColors from "./src/data/mainColors"
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: mainColors
    },
  },
  plugins: [],
};
