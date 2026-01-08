/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#17cf54",
        "background-light": "#f6f8f6",
        "background-dark": "#112116",
        "surface-light": "#ffffff",
        "surface-dark": "#1a2c20",
        "text-main-light": "#0e1b12",
        "text-main-dark": "#e7f3eb",
        "text-sub-light": "#4e9767",
        "text-sub-dark": "#8ebf9f",
        "border-light": "#d0e7d7",
        "border-dark": "#2a4230",
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"]
      },
    },
  },
  plugins: [],
}