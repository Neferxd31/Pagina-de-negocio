/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6CACFF',
        secondary: '#85B4F2',
        dark: '#1A2533',
        darkCard: '#344153',
        darkBorder: '#566273',
        muted: '#8EACD2'
      }
    },
  },
  plugins: [],
}