const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPLugin = require('html-webpack-plugin')
const OfflinePlugin = require('offline-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const autoprefixer = require('autoprefixer')
const SvgSpritePlugin = require('svg-sprite-loader/plugin')

const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      './client.js',
    ],
  },
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: debug ? '[name].js' : '[name].[chunkhash].js',
    publicPath: '/dist',
  },
  context: path.join(__dirname, 'src'),
  devtool: debug ? 'cheap-module-eval-source-map' : 'source-map',
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              minimize: true,
              importLoaders: 2,
              modules: true,
              localIdentName: debug ? '[folder]__[local]--[hash:base64:5]' : null,
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
  stats: {
    children: false,
    chunks: false,
    chunkModules: false,
    chunkOrigins: false,
    modules: false,
    maxModules: 0,
  },
  devServer: {
    host: '0.0.0.0',
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    hot: true,
    quiet: true,
    disableHostCheck: true,
  },
  plugins: debug ? [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new FriendlyErrorsPlugin(),
    new SvgSpritePlugin(),
    new HtmlWebpackPLugin({
      template: './index.html',
      filename: '../index.html',
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
    new SvgSpritePlugin(),
    new HtmlWebpackPLugin({
      template: './index.html',
      filename: '../index.html',
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
