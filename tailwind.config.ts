import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Include all JS, TS, JSX, and TSX files in the src directory
    './public/**/*.html',          // Include any HTML files in the public directory
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          600: '#f97316', // Current color
          700: '#ea580c', // Darker shade for hover
        },
      },
    },
  },
  plugins: [],
};

export default config;
