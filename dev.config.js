// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    // filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            // options: {
            //   modules: true
            // }
          }
        ]
      }, {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve(__dirname, 'replace-loader.js'),
            options: { name: "fuming" },
          }
        ]
      }]
  },
  plugins: [
    // new HtmlWebpackPlugin(),
    // new CleanWebpackPlugin(),
  ]
}