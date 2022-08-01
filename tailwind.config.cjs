/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        redHat: "Red Hat Text, sans-serif",
      },
      colors: {
        grayishBlue: 'hsl(237, 18%, 59%)',
        softRed: 'hsl(345, 95%, 68%)',
        saturatedBlue: "hsl(236, 21%, 26%)",
        darkBlue: "hsl(235, 16%, 14%)",
        mostlyBlack: "hsl(234, 17%, 12%)",
      },
      backgroundImage: {
        stars: 'url("./images/bg-stars.svg")',
      },
    },
  },
  plugins: [],
};
