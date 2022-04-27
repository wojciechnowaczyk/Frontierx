module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        "gray-dark": "#1F1F1F",
        gray: "#A2A2A2",
        blueberry: "#665AEF",
        redSalsa: "#FC364C",
        codGray: "rgba(13,13,13,1)",
        codGrayInActive: "rgba(13,13,13,0.5)",
        delta: "#8E8B8F",
        matteBlack: "#1C1C1C",
        graniteGray: "#565656",
      },
      borderRadius: {
        lg: "0.625rem",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
