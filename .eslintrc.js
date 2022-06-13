/* eslint-disable */

module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["airbnb","prettier","plugin:@typescript-eslint/recommended","plugin:react-hooks/recommended"],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint"
  ],
  globals: {
    page: true,
  },
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": [1, { extensions: [".js"] }],
    "react/jsx-wrap-multilines": 0,
    "react/prop-types": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-one-expression-per-line": 0,
    "import/no-unresolved": [2, { ignore: ["^@/", "^umi/"] }],
    "import/no-extraneous-dependencies": [2,{
      optionalDependencies: true,
      devDependencies: ["**/tests/**.js", "/mock/**.js", "**/**.test.js"],
    }],
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "linebreak-style": 0,
    "no-unused-expressions": ["error",{"allowShortCircuit":true}],
    "no-underscore-dangle": 0,
    "import/prefer-default-export": 0,
    "react/jsx-closing-tag-location": 0,
    "no-console": 0,
    "no-shadow":0,
    "react/jsx-indent":0,
    "no-await-in-loop":0,
    "react/jsx-indent-props":0,
    "react/jsx-filename-extension": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-curly-brace-presence":0,
    "func-names": 0,
    "dot-notation": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "camelcase": "off"
  },
  settings: {
    polyfills: ["fetch", "promises", "url"],
  },
};