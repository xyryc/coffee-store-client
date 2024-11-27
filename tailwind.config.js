/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rancho: ["Rancho", "cursive"],
        raleway: ["Raleway", "sans-serif"],
      },
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.5)", // Small shadow
        md: "2px 2px 4px rgba(0, 0, 0, 0.6)", // Medium shadow
        lg: "4px 4px 6px rgba(0, 0, 0, 0.7)", // Large shadow
        glow: "0 0 10px rgba(255, 255, 255, 0.8)", // Glow effect
      },
    },
  },
  plugins: [
    require("daisyui"), 
    require("tailwindcss-textshadow")],
};
