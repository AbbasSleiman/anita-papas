/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#FFFFFF",
        accent: "#a1582f",
        accent_hover: "#5C3219",
        danger: "#D5333A",
        success: "#33D439",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        carme: ["Carme", "sans-serif"],
        century: ["Century", "sans-serif"],
      },
    },
  },
  plugins: [],
};
