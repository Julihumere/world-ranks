/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1a1b1d",
        gridBg: "#1c1d1f",
        textDark: "#6b737e",
        textWhite: "#D2D5DA",
      },
    },
    fontFamily: {
      beVietnamPro: ["Be Vietnam Pro", "sans-serif"],
    },
  },
  plugins: [],
};
