/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Montserrat, sans-serif',
        inter: 'Inter, sans-serif',
      },
      /* colors: {
        gray: {
          900:'#212529',
          800:'#343A40',
          700:'#495057',
          600:'#868E96',
          500:'#ADB5BD',
          400:'#CED4DA',
          300:'#DEE2E6',
          200:'#E9ECEF',
          100:'#F1F3F5',
          50:'#F8F9FA',
        }
      } */
    },
  },
  plugins: [],
}
