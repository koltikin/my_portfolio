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
        primary: "rgba(var(--primary))",
        primary_content: "rgba(var(--primary-content))",
        primary_dark: "rgba(var(--primary-dark))",
        primary_light: "rgba(var(--primary-light))",

        secondary: "rgba(var(--secondary))",
        secondary_content: "rgba(var(--secondary-content))",
        secondary_dark: "rgba(var(--secondary-dark))",
        secondary_light: "rgba(var(--secondary-light))",
        
        theme_fg: "rgba(var(--foreground))",
        theme_bg: "rgba(var(--background))",
        theme_border: "rgba(var(--border))",

        theme_fg_copy: "rgba(var(--copy))",
        theme_bg_copy: "rgba(var(--copy-light))",
        theme_copy_lighter: "rgba(var(--copy-lighter))",


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

