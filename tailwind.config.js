/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FEF852',
        backgroundSecondary: '#FFFC94',
        textPrimary: '#2A2A2A',
      },
      fontSize: {
        headlineBig: 'clamp(3rem, 10vw, 15rem)',
        headlineSmall: 'clamp(1rem, 1.2vw, 6rem)',
      },
      spacing: {
        'reveal-padding-left': '30%',
        'reveal-padding-right': '10%',
      },
      dropShadow: {
        'custom': '0 0 0.06rem rgb(2, 2, 2)',
      }
    },
  },
  plugins: [],
}

