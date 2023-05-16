const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  darkMode: 'class',

  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Background and foreground colors
        black: '#1F1F1F',
        white: '#F5F5F5',

        // Accent colors
        teal: {
          50: '#F1F9F9',
          100: '#D2ECEC',
          200: '#A2D5D5',
          300: '#6DC0C0',
          400: '#3FACAC',
          500: '#1E9595',
          600: '#157E7E',
          700: '#0C6363',
          800: '#054949',
          900: '#003B3B',
        },
        purple: {
          50: '#FDF5FF',
          100: '#F7E1FF',
          200: '#E7B8FF',
          300: '#D690FF',
          400: '#C96BFF',
          500: '#B046FF',
          600: '#9401FF',
          700: '#7E00E6',
          800: '#6600CC',
          900: '#4D00B3',
        },

        // Gray shades
        gray: {
          50: '#F8F8F8',
          100: '#F0F0F0',
          200: '#E0E0E0',
          300: '#C7C7C7',
          400: '#A3A3A3',
          500: '#7A7A7A',
          600: '#525252',
          700: '#3D3D3D',
          800: '#282828',
          900: '#1C1C1C',
        },
      },
    },
  },
  plugins: [],
});