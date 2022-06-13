/* eslint-disable */

module.exports={
  presets:[
    ["@babel/preset-env"],
    ["@babel/preset-react"],
    ["@babel/preset-typescript"]
  ],
  plugins:[
    ["@babel/plugin-transform-runtime"],
    ["import",{
      "style":true,
      "libraryName":"antd"
    }]
  ]
};