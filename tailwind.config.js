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
      boxShadow: {
        sm: "0 2px 4px 0 rgba(0,0,0,0.0562)",
        md: "0 0 7px 2px rgba(0,0,0,0.0294)",
        lg: "0 2px 7px 0 rgba(0,0,0,0.0532)",
        xl: "0 0 4px 1px rgba(0,0,0,0.1049)",
        "2xl": "0 0 7px 0 rgba(0,0,0,0.2931)",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};
