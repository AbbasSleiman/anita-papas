/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#FFFFFF",
        third: "#F8F8F8",
        dark: "#303030",
      },
      fontFamily: {
        tenor: ["Tenor", "serif"],
        roboto: ["Roboto", "sans-serif"],
        prata: ["Prata", "serif"],
      },
    },
  },
  plugins: [],
};
