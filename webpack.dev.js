const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  context: __dirname,
	entry: "./development/index.js",
	devtool: "cheap-eval-source-map",
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "bundle.js"
	},
  devServer: {
		host: "localhost",
		port: 8000,
		inline: true,
    contentBase: "./public",
		historyApiFallback: true,
    open: false
	},
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: [
          { loader: 'html-loader' }
        ]
      },
      {
        test: /\.(css|scss)$/i,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
        },
    }
  ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
}
