/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    height: {
      md: "75vh",
    },
    extend: {
      backgroundColor: {
        "custom-nav-light": "#BC96E6",
        "custom-nav-dark": "#343F3E",
        "custom-section-light": "#FBFBFF",
      },
      textColor: {
        "custom-highlight-light": "#FBB13C",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        ntr: ["var(--font-ntr)"],
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit,minmax(15rem,1fr))",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
