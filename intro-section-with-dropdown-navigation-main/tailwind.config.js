/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      epilogue: ["Epilogue", "sans-serif"],
    },
    extend: {
      colors: {
        /* ### Neutral */
        "almost-white": "hsl(0, 0%, 98%)",
        "medium-gray": "hsl(0, 0%, 41%)",
        "almost-black": "hsl(0, 0%, 8%)",
      },
      lineHeight: {
        extra: "",
      },
      boxShadow: {
        "3xl": "0px 10px 40px 0px rgba(0,0,0, .15)",
      },
    },
  },
  plugins: [],
};
