/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        redHat: "Red Hat Text, sans-serif",
      },
      colors: {
        saturatedBlue: "hsl(236, 21%, 26%)",
        darkBlue: "hsl(235, 16%, 14%)",
        mostlyBlack: "hsl(234, 17%, 12%)",
      },
      backgroundImage: {
        hills: 'url("./images/pattern-hills.svg")',
        stars: 'url("./images/bg-stars.svg")',
      },
    },
  },
  plugins: [],
};
