/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "white": "#FFF",
        "black": "#111",
        "background": "#111",
        "primary-100": "#3C9EFF",
        "primary-300": "#EEEEEE",
        "secondary-100": "#1B1B1B",
        "secondary-300": "#FFC132",
      },
      borderRadius: {
        'circle': '50%',
      },
      // backgroundImage: (theme) => ({
      //   "gradient-yellowred":
      //     "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
      //   "mobile-home": "url('./assets/HomePageGraphic.png')",
      // }),
      // fontFamily: {
      //   dmsans: ["DM Sans", "sans-serif"],
      //   montserrat: ["Montserrat", "sans-serif"],
      // },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
