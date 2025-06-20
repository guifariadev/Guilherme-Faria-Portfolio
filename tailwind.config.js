/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      border: {  },
      keyframes: {
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },
      },
      animation: {
        shine: 'shine 5s linear infinite',
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],       
        PoppinsItalic: ["Poppins-ThinItalic", "sans-serif"],       
      },
    },
  },
  plugins: [],
}

