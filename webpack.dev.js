const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../'
            }
          },
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "styles.css",
      chunkFilename: "[id].css"
    })
  ]
}
