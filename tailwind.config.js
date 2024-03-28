/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          black: "#2D3250",
          navy: "#424769",
          "light-navy": "#7077A1",
          beige: "#F6B17A",
        },
      },
    },
  },
  plugins: [],
}
