/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      colors: {
        background: '#121212',
        gray: '#A4A4A4',
        dark: {
          100: '#202020',
          200: '#363636'
        }
      },
      fontFamily: {
        'rubik': 'Rubik'
      }
    },
  },
  plugins: [],
}

