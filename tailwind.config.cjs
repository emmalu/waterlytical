const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    /*  colors: {
      blue: "#1d5599",
      bhhs: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc331",
      "blue-light": "#d0dde9",
    },
    fontFamily: {
      sans: ["Avenir", "Calibri", "Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    }, */
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
    boxShadow: {
      //default: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      neumodark:
        //'inset 1px 1px 3px #1f2327,9px 9px 20px rgb(11, 11, 11, 0.8),-0px -0px 20px #1f2327',
        "inset 1px 1px 1px #aaa, -3px -3px 3px #ddd, 9px 9px 20px rgba(199, 199, 199, 0.8);",
      neumolight:
        //'inset 1px 1px 5px #fff, 9px 9px 20px rgba(222, 222, 222, 0.8),-0px -0px 20px #ffffff'
        "inset 1px 1px 1px #fff, -9px -9px 9px #e6e6e6, 9px 9px 20px rgba(199, 199, 199, 0.8)",
    },
  },

  plugins: [],
};

module.exports = config;
