/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryPurple: "#A510FF",
      },
      screens: {
        tab: { max: "1024px" },
        mob: { max: "500px" },
        lgsc: { max: "2560px" },
        mobsm: { max: "340px" },
      },
    },
  },
  plugins: [],
};
