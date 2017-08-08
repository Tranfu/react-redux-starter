/* eslint-disable */
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const commonConfig = require('./webpack.common.js')

module.exports = function(env) {
  return webpackMerge(commonConfig(), {
    devServer: {
      port:8080,
      proxy: {
        '/api': {
          target: 'http://localhost:20000',
          pathRewrite: {'^/api' : ''}
        }
      },
      contentBase: './dist',
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  importLoaders: 1,
                  localIdentName: '[name]__[local]--[hash:base64:5]'
                }
              },
              'sass-loader',
              'postcss-loader',
            ],
            publicPath: '../'
          })
        },
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'PRODUCTION': JSON.stringify(false),
        'SERVICE_URL': JSON.stringify('/api/'),
      })
    ]
  })
}
