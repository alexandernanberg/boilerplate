const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPLugin = require('html-webpack-plugin')
const OfflinePlugin = require('offline-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const autoprefixer = require('autoprefixer')
const SvgSpritePlugin = require('svg-sprite-loader/plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      './client.js',
    ],
  },
  output: {
    path: debug ? path.join(__dirname, 'public') : path.join(__dirname, 'public', 'dist'),
    filename: debug ? '[name].js' : '[name].[chunkhash].js',
    publicPath: debug ? '/' : '/dist/',
  },
  context: path.join(__dirname, 'src'),
  devtool: debug ? 'cheap-module-eval-source-map' : 'source-map',
  performance: {
    hints: false,
  },
  stats: {
    children: false,
    chunks: false,
    chunkModules: false,
    chunkOrigins: false,
    modules: false,
    maxModules: 0,
  },
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, 'public'),
    disableHostCheck: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true,
    quiet: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                importLoaders: 2,
                modules: true,
                localIdentName: debug ? '[folder]__[local]--[hash:base64:5]' : '_[hash:base64:6]',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  autoprefixer(),
                ],
              },
            },
            'sass-loader',
          ],
        }),
      },
      {
        test: /\.svg$/,
        loader: {
          loader: 'svg-sprite-loader',
          options: {
            symbolId: '[name]',
          },
        },
      },
    ],
  },
  plugins: debug ? [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new FriendlyErrorsPlugin(),
    new ExtractTextPlugin({ disable: true }),
    new SvgSpritePlugin(),
    new HtmlWebpackPLugin({
      template: './index.html',
    }),
  ] : [
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => module.context && module.context.indexOf('node_modules') !== -1,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity,
    }),
    new ExtractTextPlugin('styles.[contenthash].css'),
    new SvgSpritePlugin(),
    new HtmlWebpackPLugin({
      template: './index.html',
      filename: '../index.html',
      inject: false,
      minify: {
        collapseWhitespace: true,
        preserveLineBreaks: true,
      },
    }),
    new OfflinePlugin({
      version: '[hash]',
      AppCache: false,
      ServiceWorker: {
        navigateFallbackURL: '/',
        output: '../sw.js',
        events: true,
      },
    }),
  ],
}
