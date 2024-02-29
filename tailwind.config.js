/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        
          'black-dark':'#00000050',
          'white-light':'#FFFFFF30',
          'white-medium':'#FFFFFF40',
          'neon-blue':'#2FB8FF',
        
        buttonbgColor:"#0067FF",
        yellowColor:"#FEB60D" ,
        purpleColor:"#9771FF",
        primaryColor:"#0E86D4" ,
        irisBlueColor:"#0B5C5" ,headingColor:"#181A1E",
        textColor:"#4E545F"
      },
    boxShadow:{
      panelShadow:"rgba(17,12,46,0.15) 0px 48px 100px 0px;",
    },
    fontFamily:{
      display :["Teko","swap"]
    }
    },
  },
  plugins: [],
}