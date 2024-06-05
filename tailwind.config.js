/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      Primary: {
        DEFAULT:"#294159",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#294159',
          'primary-focus': '#294159',
          'primary-content': '#fff', 
         
        },
      },
    ],
  },
}