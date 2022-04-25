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
      },
      borderRadius: {
        lg: "0.625rem",
      },
    },
  },
  plugins: [],
};
