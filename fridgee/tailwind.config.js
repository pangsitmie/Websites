/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "white": "#FFF",
        "black": "#0F0D18",
        "background": "#0F0D18",
        "primary": "#3F1AE0",
        "secondary": "#D9D1F9",
        "border": "#C0B8E0",
        "orange": "#EE6C4F",
        "orange-secondary": "#F0D5CF"
      },
      borderRadius: {
        'circle': '50%',
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      'sm': '300px',
      'md': '960px',
      'lg': '1000px',
    },
  },
  plugins: [],
};
