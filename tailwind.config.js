/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend:{},
    fontSize:{
      xs:'0.4rem',
      sx:'0.6rem',
      xl:'1.8rem'
    },
    borderColor:{
      main:"#27b881"
    },
  },
  plugins: [],
}
