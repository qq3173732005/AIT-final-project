/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
        gray: '#696969',
        lightblue: '#CDE1FF',
        antiquewhite: '#FAEBD7',
        white: '#FFFFFF',
        black: '#000000'
    },
    borderWidth: {
        1: '1px'
    }
  },
  plugins: [],
}
