/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.{vue,ts}",
    ".nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  jit: true
};
