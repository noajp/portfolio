/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system', 
          'BlinkMacSystemFont', 
          '"San Francisco"', 
          '"Helvetica Neue"', 
          'Helvetica', 
          'Arial', 
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};