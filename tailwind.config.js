/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'sblue': 'hsl(220, 15%, 55%)',
        'tblue': 'hsl(218, 44%, 22%)',
      },
      fontFamily: {
        outift: "'Outfit', sans-serif"
      }
    },
  },
  plugins: [],
}

