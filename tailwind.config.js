/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      md: "500px",
      lg: "650px",
    },
    colors: {
      // I sposob
      porzeczkowy: "#b345ca",
      // II sposób
      brunatny: {
        100: "#abc345",
        800: "#abc456",
      },
    },
    extend: {
      fontFamily: {
        customFont: "Anta",
      },
    },
  },
  plugins: [],
};
