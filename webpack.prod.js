/* eslint-disable */
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const commonConfig = require('./webpack.common.js')

module.exports = function(env) {
  return webpackMerge(commonConfig(), {
    module: {
      rules: [{
        test: /\.css$/,
        exclude: /node_modules/,
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
            'sass-loader',
            'postcss-loader',
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
        comments: false,
        compress: { screw_ie8: true, warnings: false },
        mangle: { screw_ie8: true, keep_fnames: true },
      }),
      new webpack.LoaderOptionsPlugin({minimize: true}),
    ]
  })
}
