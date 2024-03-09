/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".1em",
      widest: "5px",
    },
    extend: {
      colors: {
        /* ## Colors */
        "very-dark-grayish-blue": "hsl(217, 19%, 35%)",
        "desaturated-dark-blue": "hsl(214, 17%, 51%)",
        "grayish-blue": "hsl(212, 23%, 69%)",
        "light-grayish-blue": "hsl(210, 46%, 95%)",
      },
    },
  },
  plugins: [],
};
