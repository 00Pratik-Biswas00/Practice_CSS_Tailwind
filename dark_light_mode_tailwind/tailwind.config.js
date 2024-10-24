/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js, jsx, ts, tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
