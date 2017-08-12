/* eslint-disable */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = function () {
  return {
    entry: {
      index: './src/index.js',
      vendors: [
        'babel-polyfill',
        'react',
        'react-dom',
        'react-router',
        'react-redux',
        'react-router-redux',
        'redux',
        'redux-thunk',
        'redux-logger',
        'redux-form',
        'classnames',
        'moment',
        'axios',
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
          // exclude: /node_modules/,
          exclude: [
            path.resolve(__dirname, 'vendors'),
            path.resolve(__dirname, 'node_modules')
          ],
        },
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 100,
              name: 'assets/[hash].[ext]'
            }
          }
        },
        // handle css in node_modules
        {
         test: /\.css$/,
         include: [
           path.resolve(__dirname, 'node_modules')
         ],
         use: ExtractTextPlugin.extract({
           publicPath: '../',
           fallback: 'style-loader',
           use: ['css-loader', 'sass-loader', 'postcss-loader'],
         })
        },
        // copy js & css
        {
          test: /\.(js|css|png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          include: [
            path.resolve(__dirname, 'vendors')
          ],
          use: {
            loader: 'url-loader',
            options: {
              limit: 1,
              name: '[path][name].[ext]'
            }
          }
        },
      ]
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new webpack.HashedModuleIdsPlugin(),
      new HtmlWebpackPlugin({template: './src/index.html'}),
      new ExtractTextPlugin('css/index.[contenthash].css'),
      new webpack.optimize.CommonsChunkPlugin({name: 'vendors'}),
      new webpack.optimize.CommonsChunkPlugin({name: 'manifest'}),
    ]
  };
}
