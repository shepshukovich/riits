const path = require("path");

module.exports = {
  mode: "production",
  context: __dirname,
	entry: "./client/index.js",
	devtool: "cheap-eval-source-map",
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "bundle.js"
	}
}
