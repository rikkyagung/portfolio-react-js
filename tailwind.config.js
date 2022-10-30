/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   darkMode: "class",
   theme: {
      extend: {
         colors: {
            "boysenberry-shadow": "#F2F4F8",
            sailor: "#415A80",
            "azureish-white": "#D7E2E9",
            "midwinter-mist": "#A5D4DC",
            "mangu-black": "#282736",
            "bright-gray": "#EFEFEF",

            // Dark Mode Color
            "eerie-black": "#1B1C22",
            "raisin-black": "#24262E",
            "wild-blue-yonder": "#9AAED5",
            "baby-powder": "#F6F8F2",
         },
         fontFamily: {
            montserrat: "'Montserrat', sans-serif",
         },
      },
   },
   plugins: [],
};
