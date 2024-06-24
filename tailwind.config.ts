import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Include all JS, TS, JSX, and TSX files in the src directory
    './public/**/*.html',          // Include any HTML files in the public directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
