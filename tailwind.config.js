/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme': '#4285F4',
        'linkedin': '#0077b5',
        'instagram': '#d62976',
        'gmail': '#BB001B',
      }
    },
  },
  plugins: [],
}

