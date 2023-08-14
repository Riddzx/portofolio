/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      animation: {
        "bounce-slow": "pulse 3s linear infinite",
      },
      colors: {
        dark: "#272727",
        primary: "#3BF686",
        table: "#323443",
      },
    },
  },
  plugins: [],
};
