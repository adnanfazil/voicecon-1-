/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
      },
      width: {
        nav: "628px",
        button: "167px",
      },
      height: {
        nav: "51px",
        button: "56px",
        section: "1146px",
      },
      backgroundColor: {
        nav: "rgba(8, 8, 8, 0.45)",
        button: "#8BC83F",
        "button-hover": "#7ab536",
      },
      borderColor: {
        "nav-border": "rgba(255, 255, 255, 0.21)",
      },
      boxShadow: {
        nav: "0px 4px 4px 0px rgba(134, 188, 41, 0.19)",
        eclipse:
          "0 0 113.49px #0D0E0B, 0 0 226.98px #0D0E0B, 0 0 794.43px #0D0E0B, 0 0 1588.86px #0D0E0B, 0 0 2723.76px #0D0E0B, 0 0 4766.58px #0D0E0B",
      },
      borderRadius: {
        nav: "50px",
      },
      spacing: {
        "nav-x": "30px",
        "nav-y": "20px",
        "button-gap": "8px",
      },
      colors: {
        "text-gray": "#BABABA",
      },
      backgroundImage: {
        "section-gradient":
          "linear-gradient(180deg, #080808 4%, rgba(134, 188, 41, 0.56) 70%, #080808 100%)",
      },
      padding: {
        "section-x": "172.5px",
      },
    },
  },
  plugins: [],
};
