/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.{html,js}"],
  theme: {
    fontFamily: {
      josefin: ["Josefin Sans", "sans-serif"],
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: "16px",
      widest: "12px",
    },
    screens: {
      desktop: "1440px",
      md: "768px",
    },
    extend: {
      colors: {
        /* ### Primary */

        "desaturated-red": "hsl(0, 36%, 70%)",
        "soft-red": "hsl(0, 93%, 68%)",

        /* ### Neutral */

        "dark-grayish-red": "hsl(0, 6%, 24%)",
      },
    },
  },
  plugins: [],
};
