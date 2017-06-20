const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPLugin = require('html-webpack-plugin')
const OfflinePlugin = require('offline-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const autoprefixer = require('autoprefixer')
const SvgSpritePlugin = require('svg-sprite-loader/plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      './client.js',
    ],
  },
  output: {
    path: isDev ? path.join(__dirname, 'public') : path.join(__dirname, 'public', 'dist'),
    filename: isDev ? '[name].js' : '[name].[chunkhash].js',
    publicPath: isDev ? '/' : '/dist/',
  },
  context: path.join(__dirname, 'src'),
  devtool: isDev ? 'cheap-module-inline-source-map' : 'source-map',
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
                minimize: !isDev,
                importLoaders: 2,
                modules: true,
                localIdentName: isDev ? '[folder]__[local]' : '[hash:base64:6]',
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
            {
              loader: 'sass-loader',
              options: {
                data: `@import "${path.join(__dirname, 'src/styles/core')}";`,
              },
            },
          ],
        }),
      },
      {
        test: /\.svg$/,
        loader: {
          loader: 'svg-sprite-loader',
          options: {
            symbolId: isDev ? '[name]' : '[name]__[hash:base64:4]',
          },
        },
      },
    ],
  },
  plugins: isDev ? [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new FriendlyErrorsPlugin(),
    new ExtractTextPlugin({ disable: true }),
    new SvgSpritePlugin(),
    new HtmlWebpackPLugin({
      template: './index.html',
      inject: false,
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
    new webpack.optimize.ModuleConcatenationPlugin(),
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
