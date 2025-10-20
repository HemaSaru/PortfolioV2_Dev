module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Space Grotesk",
          "system-ui",
          "Avenir",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        slide: "slide 8s linear infinite",
      },
    },
  },
};
