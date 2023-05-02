/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#00192F',
          200: '#002442',
          300: '#004B8C',
          400: '#0072CE'
        },
        light: {
          100: '#469DE3',
          200: '#0072CE',
          300: '#004B8C',
          400: '#002442',
        }
      },
    },
  },
  plugins: [],
}