/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
  plugins: [],
};
