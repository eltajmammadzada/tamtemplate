/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      "colors": {
        "Text_Black": "#333333",
        "Text_Black_50%": "#333333",
        "Text_White": "#ffffff",
        "Text_White_50%": "#ffffff",
        "Primary_1": "#f36b7f",
        "Primary_2": "#f8cf61",
        "herobg": "#81b5a5",
        "footerbg": "#3a524b",
        "subscribebg": "#81b5a5",
        "testimonialbg": "#fcf0e3",
        "aboutbg": "#f9d9eb"
       },
       "fontSize": {
        "sm": "0.75rem",
        "base": "1rem",
        "lg": "1.25rem",
        "xl": "1.5rem",
        "2xl": "2.5rem",
        "3xl": "3.5rem",
        "4xl": "4.5rem"
       },
       "fontFamily": {
        "dm-sans": "DM Sans"
       },
       "borderRadius": {
        "none": "0",
        "xs": "0.1875rem",
        "sm": "0.5rem",
        "default": "1.5rem"
       }
    },
  },
  plugins: [],
}