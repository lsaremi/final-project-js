/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.{html,js}"],

  theme: {
    extend: {
      colors: {
        title: {
          midumGray: "#757475",
          HeadingTitleColor: "#152536",
          dark: "#343A40",
        },
      },
      fontSize: {
        heading1: "72px",
        heading2: "50px",
        heading3: "40px",
        text1: "32px",
        tinyText: "10px",
      },
      // backgroundImage: {
      //   bg_image: "url('asset/images/shoes1.jpg')",
      // },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
