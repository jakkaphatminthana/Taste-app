/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/screens/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontWeight: {
        regular: "500",
        medium: "600",
        bold: "800",
      },
      colors: {
        primary: '#FF8C32',
        dark: '#06113C',
        light: '#EEEEEE',
        primaryText: '#515350',
        black: '#000000',
        white: '#FFFFFF',
        white20: 'rgba(255, 255, 255, 0.2)',
        white40: 'rgba(255, 255, 255, 0.4)',
        white60: 'rgba(255, 255, 255, 0.6)',
      },

    },
  },
}

