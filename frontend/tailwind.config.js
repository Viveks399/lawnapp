/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        zoomIn: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        zoomIn: "zoomIn 10s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
