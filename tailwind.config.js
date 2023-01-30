/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      screens: {
        sm: "500px",
      },
      colors: {
        "body-bg": "#f2f3f7",
        "common-bg": "white",
        "muted-color": "#00000060",
        "common-color": "#ff7519",
        "common-gray": "#5a5a5a",
        "heading-color": "#212529",
        "heading-size": "17px",
        "smallest-color": "#00000060",
        "regular-border": "#6c757d",
        "account-gray": "rgb(242, 243, 247)"
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
}
