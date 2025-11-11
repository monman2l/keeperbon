/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f6ff",
          100: "#e6e8ff",
          200: "#c9ccff",
          300: "#a6adff",
          400: "#7b84ff",
          500: "#5b63ff",
          600: "#4448d9",
          700: "#3639b3",
          800: "#2b2f8c",
          900: "#1e215e",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
