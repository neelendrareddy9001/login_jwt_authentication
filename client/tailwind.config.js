/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      smm: "540px",
      mdd: "800px",
      lgg: "992px",
      xll: "1040px",
    },
  },
  plugins: [],
};
