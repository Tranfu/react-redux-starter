/* eslint-disable */
const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = function () {
  return {
    entry: {
      index: './src/index.js',
      vendors: [
        'babel-polyfill',
        'react',
        'react-dom',
        'react-router',
        'redux',
        'redux-thunk',
        'redux-logger',
        'react-redux',
        'react-router-redux',
        'axios',
        'classnames',
        'redux-form',
        'nprogress',
        'sweetalert',
        'particles.js',
        // 'intro.js',
        // 'dragula',
      ]
    },
    output: {
      filename: 'js/[name].[chunkhash].js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          // use: ['babel-loader', 'eslint-loader'],
          use: ['babel-loader'],
          exclude: /node_modules/
        },
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 100000,
              name: 'assets/[hash].[ext]'
            }
          }
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new ExtractTextPlugin('css/[name].[contenthash].css'),
      new HtmlWebpackPlugin({
        template: './index.html',
      }),
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendors', 'manifest']
      }),
    ]
  };
}
