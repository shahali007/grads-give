/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        "primaryColor": "#D6BB4E",
        "secondaryColor": "#F6F2DF",
        "navbarBackground": "rgba(0, 0, 0, 0.2)",
        "lightBlueSectionBackground": "#F4F9F8",
        "mutedTextColor": "#707070",
        "invoiceMoney": "#6F4025"
      },

      spacing: {
        12.75: "3.1875rem",
        15: "3.75rem",
        18: "4.5rem",
        22: "5.5rem",
        24.5: "6.125rem",
        26: "6.5rem",
        27: "6.75rem",
        30: "7.5rem",
        35: "8.75rem",
        46: "11.5rem",
        49: "12.25rem",
        61: "15.25rem",
        62: "15.5rem",
        68: "17rem",
        70: "17.5rem",
        74: "18.5rem",
        74.5: "18.625rem",
        75.25: "18.8125rem",
        76: "19rem",
        77: "19.25rem",
        78: "19.5rem",
        94.5: "23.625rem",
        100: "25rem",
        141: "35.25rem",
        152: "38rem",
        155: "38.75rem",
        158.25: "39.5625rem",
        164: "41rem",
        174: "43.5rem",
        181.75: "45.4375rem",
        183: "45.75rem",
        203: "50.75rem",
        220: "55rem",
        "1/5": "16%"
      },

      borderWidth: {
        1: "1px"
      },

      borderRadius: {
        large: "6.25rem"
      },

      backdropBlur: {
        xs: "2px"
      },

      fontSize: {
        "3.5xl": "2rem",
        "6.5xl": "4rem",
      },

      lineHeight: {
        16: "4rem",
        12: "3rem",
        22: "5.5rem"
      }
    },
  },
  plugins: [],
}
