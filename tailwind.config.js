/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
      colors: {
        surface: "#13111C",
        surface2: "#1a1828",
        surface3: "#221f33",
        glass: "rgba(30,30,50,0.6)",
        glassBorder: "rgba(255,255,255,0.08)",
      },
    },
  },
  plugins: [],
};
