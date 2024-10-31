/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          900: "hsl(200, 15%, 8%)",
          700: "hsl(207, 26%, 17%)",
          500: "hsl(209, 23%, 22%)",
        },
        gray: {
          500: "hsl(0, 0%, 52%)",
          100: "hsl(0, 0%, 98%)",
        },
      },
      fontFamily: {
        sans: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};
