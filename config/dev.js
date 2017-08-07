/* eslint-disable */
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./base.js');

module.exports = function(env) {
  return webpackMerge(commonConfig(), {
    devServer: {
      port:8080,
      proxy: {
        '/api': {
          target: 'http://localhost:20000',
          pathRewrite: {'^/api' : ''}
        }
      }
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  modules: true,
                  localIdentName: '[name]__[local]--[hash:base64:5]'
                }
              },
              'postcss-loader'
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
