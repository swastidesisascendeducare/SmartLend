/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#435FEF",
        darkBlue: "#2E4ABF",
        accent: "#F5FFC3",
        textDark: "#2A2A2A",
        textLight: "#E8E8E8",
        backgroundLight: "#F2F2F2",
        backgroundDark: "#2A2A2A",
        link: "#F2F2F2",
        hover: "#233FBF",
      },
    },
  },
  plugins: [],
};
