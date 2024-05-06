/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkPry: "#163020",
        darkSec: "#304D30",
        darkTer: "#B6C4B6",
      },
      keyframes: {
        entry: {
          "0%, 30%": { opacity: 0, transform: "translate(0px, 100px)" },
          "100%": { opacity: 1, transform: "translate(0px)" },
        },
        expand: {
          "0%": { height: "0px" },
          "100%": { height: "100px" },
        },
        shrink: {
          "0%": { height: "100px" },
          "100%": { height: "0px" },
        },
      },
      animation: {
        entry: "entry 1s ease-in-out 1",
        expand: "expand 1s 1",
        shrink: "shrink 1s 1",
      },
    },
  },
  plugins: [],
};
