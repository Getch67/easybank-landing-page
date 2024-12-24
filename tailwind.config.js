/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DarkBlue: "hsl(233, 26%, 24%)",
        LimeGreen: "hsl(136, 65%, 51%)",
        BrightCyan: "hsl(192, 70%, 51%)",
        GrayishBlue: "hsl(233, 8%, 62%)",
        LightGrayishBlue: "hsl(220, 16%, 96%)",
        VeryLightGray: "hsl(0, 0%, 98%)",
        White: "hsl(0, 0%, 100%)",
        DarkBlueFade: "rgba(45, 49, 77, 0.4)",
      },
      fontFamily: {
        publicSans: "'Public Sans', 'sans-serif'",
      },
      fontSize: {
        mxl: "1.03rem",
        lsm: "15px",
        lsm2: "14.5px",
        "3xl2": "33px",
        sm2: "0.808rem",
        sm3: "0.85rem",
        xs: "11px",
        lg2: "17px",
        "4xl2": "40px",
      },
      borderRadius: {
        custom: "3rem",
      },
      width: {
        prXl: "640px",
        prLg: "540px",
        70: "285px",
        68: "281.5px",
        38: "150px",
        46: "182px",
        hero: "465px",
        nav: "64%",
        "2xl": "1536px",
      },
      height: {
        hero: "680px",
        50: "200px",
      },
      lineHeight: {
        hero: "1.2",
      },
      spacing: {
        34: "134px",
        29: "122px",
        30: "130px",
        50: "200px",
      },
    },
  },
  plugins: [],
};
