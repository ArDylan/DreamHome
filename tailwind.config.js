module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700_cc: "#ffffffcc", A700: "#ffffff" },
        gray: { 50: "#fafafa", 500: "#a4a4a4" },
        black: { 900: "#000000" },
        blue: { A700: "#0065ff" },
        teal: { "900_3f": "#0b6b3d3f" },
        light_blue: { 900: "#00529c" },
        indigo: { 500: "#3f72af" },
      },
      boxShadow: { bs: "0px 4px  3px 0px #0b6b3d3f" },
      fontFamily: { roboto: "Roboto" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
