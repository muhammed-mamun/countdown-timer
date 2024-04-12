/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors:{
      blackPrimary: '#0D0518',
     }
      
    },
  },
  plugins: [require("daisyui")],
}