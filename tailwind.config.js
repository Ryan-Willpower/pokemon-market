module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "ebony-clay": "#252836",
        "burnt-sienna": "#EA7C69",
        "tower-gray": "#ABBBC2",
        "steel-gray": "#1F1D2B",
        "black-lighter": "rgba(0, 0, 0, 0.7)",
        "white-darker": "rgba(255, 255, 255, 1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
