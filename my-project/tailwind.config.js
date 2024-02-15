/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        navBar: "#252B42",
        headerShop: "#2DC071",
        lightGrey: "#FAFAFA",
      },
      colors: {
        aTag: "#737373",
        primaryColor: "#23A6F0",
        categoryColor: "#252B42",
        mutedCcolor: "#BDBDBD",
        dolar: "#23856D",
        alertColor: "#E77C40",
        navBar: "#252B42",
        disabled: "#8EC2F2",
      },
    },
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
