const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  context: __dirname,
	entry: "./client/index.js",
	devtool: "cheap-eval-source-map",
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "bundle.js"
	},
  devServer: {
		host: "localhost",
		port: 8000,
		contentBase: "public",
		hot: true,
		inline: true,
		historyApiFallback: true,
	},
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
