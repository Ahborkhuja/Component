/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend:{
      rotate:{
        '360':'360deg',
      }
    },
    fontSize:{
      xs:'0.4rem',
      sx:'0.6rem',
      ss:'0.9rem',
      main:'1.3rem',
      xl:'1.8rem',
      '2xl':'2.2rem',
    },
    borderColor:{
      main:"#27b881"
    },
  },
  plugins: [],
}
