// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Extend Tailwind's default theme if needed
    },
  },
  plugins: [],
  darkMode: 'class',  // Enables class-based dark mode
}
