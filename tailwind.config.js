/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        main: '#f1692f'
      },
      colors:{
        primaryColor: '#F1692F'
      },
      screens: {
        'max-sm': {max: '640px'},
        'max-md': {max: '768px'},
        'max-lg': {max: '1024px'},
        xl: '1025px',
      }
    },
  },
  plugins: [],
}

