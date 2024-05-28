/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'player': "url('/src/assets/images/player.jpg')",
        'hero-1': "url('/src/assets/images/hero-1.jpg')",
      },
      colors: {
        "red-600": "#ff0000",
      }
    },
  },
  plugins: [],
}