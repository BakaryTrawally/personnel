/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
"./index.html",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
   
  ],
  theme: {
    screen:{
      sm:'480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {},
  },
  plugins: [],
}



// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}"
//   ],
//   theme: {
//     theme: {
//      screen:{
//     sm:'480px',
//     md: '768px',
//     lg: '976px',
//     xl: '1440px'
//     },
//     extend: {},
//   },
//   plugins: [],
// }
