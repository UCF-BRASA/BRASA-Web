const { nextui } = require("@nextui-org/theme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/tabs.js",
  ],
  theme: {
    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
      "3xl": "1800px",
      "4px": "2000px"
    },
    extend: {
      colors: {
        "main-brasa-yellow": "#fef000",
        "main-brasa-green": "#7cb342",
        "main-brasa-blue": "#008cff",
        "light-grey": "#f7f7f7",
      },
      fontFamily: {
        light: "Roobert Light",
        regular: "Roobert Regular",
        medium: "Roobert Medium",
        "semi-bold": "Roobert Semi Bold",
        bold: "Roobert Bold",
        "bold-italic": "Roobert Bold Italic",
      },
    },
  },
  plugins: [nextui()],
};
