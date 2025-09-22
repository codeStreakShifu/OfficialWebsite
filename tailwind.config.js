/** @type {import('tailwindcss').Config} */
export default {
  
  theme: {
    extend: {
      colors: {
        cream: "#F5EEDD",
      },
      fontFamily: {
        retro: ['RetroBritish', 'sans-serif'], // Tailwind class: font-custom
      },
    },
  },
  plugins: [],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

}



