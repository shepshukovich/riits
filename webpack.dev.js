const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
		inline: true,
		historyApiFallback: true,
	},
  module: {
    rules: [
      {
        test: /\.(html)$/,
          use: {
            loader: 'html-loader',
            options: {
              attrs: [':data-src']
            }
          }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("../public/globalStyle.css")
  ]
}
