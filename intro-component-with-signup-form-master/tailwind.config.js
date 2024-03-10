/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    screens: {
      desktop: "1440px",
    },
    extend: {
      colors: {
        /* ### Primary */

        red: "hsl(0, 100%, 74%)",
        green: "hsl(154, 59%, 51%)",

        /* ### Accent */

        blue: "hsl(248, 32%, 49%)",
      },
    },
  },
  plugins: [],
};
