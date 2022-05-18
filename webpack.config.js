let path = require("path");

module.exports = {
  entry: {
    texteditor: "./texteditor.tsx"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        include: [path.resolve(__dirname)],
        exclude: /node_modules/
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname),
  },
};
