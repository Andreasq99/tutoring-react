/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ['.src/*.jsx',
            '.src/**/*.jsx',
            './src/**/**/*.jsx'
          ],
  theme: {
    extend: {
      colors: { 
        'accent': { DEFAULT: '#386641', 100: '#0b140d', 200: '#16291a', 300: '#223d27', 400: '#2d5234', 500: '#386641', 600: '#51935e', 700: '#77b483', 800: '#a4cdac', 900: '#d2e6d6' }, 
        'background': { DEFAULT: '#6a994e', 100: '#151e10', 200: '#2a3d1f', 300: '#3f5b2f', 400: '#54793e', 500: '#6a994e', 600: '#85b36b', 700: '#a4c690', 800: '#c2d9b5', 900: '#e1ecda' }, 
        'button': { DEFAULT: '#a7c957', 100: '#222b0e', 200: '#45561c', 300: '#67812a', 400: '#8aad38', 500: '#a7c957', 600: '#b8d377', 700: '#c9de99', 800: '#dbe9bb', 900: '#edf4dd' }, 
        'text': { DEFAULT: '#f2e8cf', 100: '#463813', 200: '#8d7027', 300: '#cba442', 400: '#dfc688', 500: '#f2e8cf', 600: '#f4edd9', 700: '#f7f1e2', 800: '#faf6ec', 900: '#fcfaf5' }, 
        'header': { DEFAULT: '#bc4749', 100: '#260e0e', 200: '#4c1c1c', 300: '#73292b', 400: '#993739', 500: '#bc4749', 600: '#ca6c6e', 700: '#d79192', 800: '#e5b6b6', 900: '#f2dadb' } 
      }
    },
  },
  plugins: [],
});

