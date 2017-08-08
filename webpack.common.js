/* eslint-disable */
const path = require('path')
const webpack = require('webpack')
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
          test: /\.css$/,
          // include: /node_modules/,
          include: [
            path.resolve(__dirname, 'node_modules')
          ],
          use: ExtractTextPlugin.extract({
            publicPath: '../',
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader', 'postcss-loader'],
          })
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
      new webpack.HashedModuleIdsPlugin(),
      new HtmlWebpackPlugin({template: './index.html'}),
      new ExtractTextPlugin('css/[name].[contenthash].css'),
      new webpack.optimize.CommonsChunkPlugin({name: 'vendors'}),
      new webpack.optimize.CommonsChunkPlugin({name: 'manifest'}),
    ]
  };
}
