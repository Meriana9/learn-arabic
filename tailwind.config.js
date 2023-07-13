module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/img/Damascus-Jasmine-Story.jpg)",
      },
      color:{
        'pinkSky': '#faf0f7',
      }

    
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
