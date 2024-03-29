/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#165dff'
      },
      width: {
        innerPage: '1000px'
      }
    }
  },
  plugins: []
};
