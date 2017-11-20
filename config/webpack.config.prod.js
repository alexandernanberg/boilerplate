const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPLugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OfflinePlugin = require('offline-plugin')

const paths = require('./paths')

module.exports = {
  devtool: 'sourcemap',
  entry: {
    app: [paths.appIndexJs],
  },
  output: {
    filename: 'static/scripts/[name].[chunkhash:8].js',
    chunkFilename: 'static/scripts/[name].[chunkhash:8].chunk.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        include: paths.appSrc,
        loader: require.resolve('babel-loader'),
        options: {
          cacheDirectory: true,
        },
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({ NODE_ENV: 'development' }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new UglifyJsPlugin(),
    new OfflinePlugin({
      version: '[hash]',
      AppCache: false,
      ServiceWorker: {
        navigateFallbackURL: '/',
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: module => module.context && module.context.indexOf('node_modules') !== -1,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity,
    }),
    new HtmlWebpackPLugin({
      template: './index.html',
      inject: true,
      minify: {
        collapseWhitespace: true,
        preserveLineBreaks: true,
      },
    }),
  ],
  performance: {
    hints: false,
  },
}
