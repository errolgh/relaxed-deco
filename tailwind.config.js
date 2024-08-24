/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#292f36',
          hover: '#343e4a',
        },
        secondary: '#3d4053',
        accent: {
          DEFAULT: '#cda274',
          secondary: '#f4f0ec',
          hover: '#b88c5d',
        },
      },
      container: {
        padding: {
          DEFAULT: '15px',
        },
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
      },
      fontFamily: {
        primary: 'DM Serif Display',
        secondary: 'Jost',
        sans: ['Jost', 'sans-serif'],
        serif: ['DM Serif Display', 'serif'],
      },
      backgroundImage: {
        hero: 'url(../assets/hero/bg.jpg)',
        grid: 'url(../assets/grid.png)',
      },
    },
  },
  plugins: [],
};
