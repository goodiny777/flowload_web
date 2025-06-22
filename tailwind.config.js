/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          500: '#FF7F50',
        },
        teal: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          600: '#0D9488',
          800: '#134E4A',
        },
      },
    },
  },
  plugins: [],
}