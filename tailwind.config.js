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
        bgbeige: "#fdf0e0",
        myblue: "#0288d1",
        "main-brasa-yellow": "#fef000",
        "main-brasa-green": "#7cb342",
        "main-brasa-blue": "#008cff",
      },
      fontFamily: {
        regular: "Roobert Regular",
        medium: "Roobert Medium",
        bold: "Roobert Bold",
        "bold-italic": "Roobert Bold Italic",
      },
    },
  },
  plugins: [],
};
