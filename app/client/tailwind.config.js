/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        exo: ['"Exo 2"', 'sans-serif'],
      },
      screens: {
        wide: '1440px',
      },
      colors: {
        // Red colors:
        'red-light': '#EF4444',
        'red-light-dark': '#C83535',
        'red-md': '#402525',
        'red-dark': '#191414',
        // Dark Grays colors:
        'glass-gray': 'rgba(33, 33, 33, 0.5)',
        'light-gray': '#ABABAB',
        'cool-gray': '#181818',
        'dark-gray': '#070707',
      },
      backgroundImage: {
        'mesh-gradient': "url('/background/mesh-gradients.png')",
      },
    },
  },
  plugins: [],
};
