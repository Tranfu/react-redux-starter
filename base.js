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
      vendor: [
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
    devtool: 'inline-source-map',
    output: {
      filename: 'js/[name].[chunkhash].js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          // use: ['babel-loader', 'eslint-loader'],
          use: ['babel-loader'],
          exclude: /node_modules/
        },
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          loader: 'url-loader',
          options: {
            limit: 100000,
            name: 'assets/[hash].[ext]'
          }
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('css/[name].[contenthash].css'),
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest'] // Specify the common bundle's name.
      }),
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        template: './index.html',
        chunksSortMode: 'dependency'
      })
    ]
  };
}
