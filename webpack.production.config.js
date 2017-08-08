/* eslint-disable */
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const commonConfig = require('./webpack.base.config.js')

module.exports = function(env) {
  return webpackMerge(commonConfig(), {
    module: {
      rules: [{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
              }
            },
            'postcss-loader'
          ],
          publicPath: '../'
        })
      }]
    },
    plugins: [
      new webpack.DefinePlugin({
        'PRODUCTION': JSON.stringify(true),
        'SERVICE_URL': JSON.stringify('/'),
      }),
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
          screw_ie8: true, keep_fnames: true
        },
        compress: {
          screw_ie8: true, warnings: false
        },
        comments: false
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
      })
    ]
  })
}
