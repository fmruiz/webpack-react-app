const path = require("path");

const ruleForStyles = {
  test: /\.css$/,
  use: ["style-loader", "css-loader"],
};

const ruleForJavascript = {
  test: /\.js$/,
  loader: "babel-loader",
  options: {
    presets: ["@babel/preset-react"],
  },
};

const rules = [ruleForJavascript, ruleForStyles];

module.exports = {
  output: {
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules,
  },
};
