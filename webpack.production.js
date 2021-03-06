/* eslint-disable */
const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const commonConfig = require('./webpack.common.js')

module.exports = function(env) {
  return webpackMerge(commonConfig(), {
    module: {
      rules: [
        {
          test: /\.css$/,
          include: [
            path.resolve(__dirname, 'src'),
          ],
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  importLoaders: 1,
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
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        comments: false,
        mangle: { screw_ie8: true, keep_fnames: true },
        compress: { screw_ie8: true, warnings: false },
      }),
      new webpack.LoaderOptionsPlugin({minimize: true}),
    ]
  })
}
