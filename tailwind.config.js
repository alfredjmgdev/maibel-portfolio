/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: {
          lighter: '#E894A7',
          light: '#C06378',
          medium: '#8B4E5E',
          deep: '#663845',
          dark: '#321E25',
        },
      },
    },
  },
  plugins: [],
}

