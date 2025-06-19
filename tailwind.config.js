/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hoverColor: "#FFC000",
        brightColor: "#dd8036",
        backgroundColor: "#36ae9a",
        backgroundImage: {
          "custom-gradient": "linear-gradient(30deg, #dd8036, #181919)",
        },
      },
    },
  },
  plugins: [],
};
