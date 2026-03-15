/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f7ff",
          100: "#e9eeff",
          200: "#cfd9ff",
          300: "#a7b8ff",
          400: "#7b91ff",
          500: "#5b6cff",
          600: "#4a57ff",
          700: "#3f45f4",
          800: "#3638d2",
          900: "#2d2ea9",
        },
      },
      boxShadow: {
        glow: "0 20px 50px rgba(91, 108, 255, 0.25)",
      },
    },
  },
  plugins: [],
};
