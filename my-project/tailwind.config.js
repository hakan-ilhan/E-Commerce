/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        navBar: "#252B42",
        headerShop: "#2DC071",
        lightGrey: "#FAFAFA",
        hoverColor: "#2A7CC7",
      },
      colors: {
        aTag: "#737373",
        primaryColor: "#23A6F0",
        categoryColor: "#252B42", //text-color
        mutedCcolor: "#BDBDBD",
        dolar: "#23856D",
        alertColor: "#E77C40",
        navBar: "#252B42",
        disabled: "#8EC2F2",
        p: "#858585",
        border: "#E8E8E8",
        hr: "#ECECEC",
        border1: "#C4C4C4",
      },
    },
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
