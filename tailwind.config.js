/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0077B6',
        secondary: '#00B4D8',
        accent: '#48CAE4',
        light: '#ADE8F4',
        dark: '#023E8A',
      },
    },
  },
  plugins: [],
}
