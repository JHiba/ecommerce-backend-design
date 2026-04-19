/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#B0A8B9', // Pastel Purple base
          light: '#F8F4FF', // Very soft lavender background
          dark: '#938A9D',
        },
        secondary: {
          DEFAULT: '#90ADC6', // Soft slate blue
          light: '#E9F1F6',
        },
        accent: {
          pink: '#FAD0C9', // Soft Peach/Pink
          mint: '#C1E1C1', // Soft Mint
          yellow: '#FDFD96', // Pastel Yellow
        },
        dark: {
          DEFAULT: '#4A4A4A', // Softer dark for text
          light: '#808080', 
        },
        shade: {
          DEFAULT: '#FFFFFF',
          border: '#F0EAF5' // Very light purple border
        }
      },
      fontFamily: {
        inter: ['Quicksand', 'sans-serif'], // Replacing Inter with Quicksand globally while keeping the class name for ease
      },
      spacing: {
        'container': '1180px',
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(176,168,185,0.2)',
        'glow': '0 0 20px rgba(250,208,201,0.4)',
      }
    },
  },
  plugins: [],
}
