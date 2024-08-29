/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#fea928",
        secondary: "#ed8900",

        primary_light: '#F7F8FC',
        secondary_light: '#eef2ff',
        ternary_light: '#f6f7f8',

        primary_dark: '#0D2438',
        secondary_dark: '#102D44',
        ternary_dark: '#1E3851',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        nerko: 'Nerko One',
        paprika: 'Paprika',
        inria:'Inria Serif',
        poppins:'Poppins',
        rubik:'Rubik',
        hind:'Hind Siliguri',
        hand:'Just Another Hand',
        dafoe:['Mr Dafoe'],
        montez:'Montez',
        sarina:'Sarina',

      },
      container: {
        center: true,
        padding: {
          default: '1rem',
          sm: "3rem"
        }
      }
    },
  },
  plugins: [],
};

