/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.{html,js}"],

  theme: {
    extend: {
      fontSize: {
        heading1: "72px",
        heading2: "50px",
        heading3: "40px",
        text1: "32px",
      },
      backgroundImage: {
        bg_image: "url('asset/images/shoes1.jpg')",
      },
    },
  },
  // corePlugins: {
  //   preflight: false,
  // },
  darkMode: "class",
};
