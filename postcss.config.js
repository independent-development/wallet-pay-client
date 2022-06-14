/* eslint-disable */

module.exports = {
  plugins: [
    require("postcss-flexbugs-fixes"),
    require("postcss-preset-env")({
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
    }),
    // require("postcss-aspect-ratio-mini")({}),
    // require("postcss-px-to-viewport")({
    //   viewportWidth: 750, // (Number) The width of the viewport.
    //   viewportHeight: 1624, // (Number) The height of the viewport.
    //   unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
    //   viewportUnit: "vw", // (String) Expected units.
    //   selectorBlackList: [".ignore", ".hairlines"], // (Array) The selectors to ignore and leave as px.
    //   minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
    //   mediaQuery: false, // (Boolean) Allow px to be converted in media queries.
    // }),
    // require("postcss-viewport-units")({}),
  ]
};