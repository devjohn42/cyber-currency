/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      first: 'Outfit',
      second: 'IBM Plex Mono',
    },
    colors: {
      raisin: '#131222',
      space: '#171627',
      cadet: '#1E1D32',
      turquoise: '#04D6C5',
      alice: '#E3EDF7',
    },
    extend: {},
  },
  plugins: [],
};
