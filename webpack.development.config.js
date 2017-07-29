var webpack = require('webpack');
var path = require('path');
var glob = require('glob');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dis'),
    publicPath: '/dis/',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.(scss|css)$/,
        include: path.resolve(__dirname, "src/sass"),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: false,
                sourceMap: false,
                url: false
              }
            }, {
              loader: 'postcss-loader',
              options: {
                plugins: function() {
                  return [require('autoprefixer')];
                }
              }
            }, {
              loader: "sass-loader"
            }
          ]
        })
      }, {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader'
      }, {
        test: /\.(jpg|png)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [new ExtractTextPlugin("main.css")]
}
