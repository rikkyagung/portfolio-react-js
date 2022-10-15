/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         colors: {
            "boysenberry-shadow": "#F2F4F8",
            sailor: "#415A80",
            "azureish-white": "#D7E2E9",
            "midwinter-mist": "#A5D4DC",
            "mangu-black": "#282736",
            "bright-gray": "#EFEFEF",
         },
         fontFamily: {
            montserrat: "'Montserrat', sans-serif",
         },
      },
   },
   plugins: [],
};
