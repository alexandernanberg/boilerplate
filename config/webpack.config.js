const path = require('path')
const webpack = require('webpack')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const HtmlWebpackPLugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OfflinePlugin = require('offline-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const isDev = process.env.NODE_ENV !== 'production'

let plugins = [
  new webpack.EnvironmentPlugin({ NODE_ENV: 'development' }),
  new webpack.NamedModulesPlugin(),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'common',
    minChunks: module => module.context && module.context.indexOf('node_modules') !== -1,
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest',
    minChunks: Infinity,
  }),
  new FriendlyErrorsPlugin({
    compilationSuccessInfo: {
      messages: ['Ready on http://localhost:8080'],
    },
  }),
  new HtmlWebpackPLugin({
    template: './index.html',
    inject: true,
    minify: {
      collapseWhitespace: true,
      preserveLineBreaks: true,
    },
  }),
]

if (isDev) {
  plugins = [
    ...plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new CaseSensitivePathsPlugin(),
  ]
} else {
  plugins = [
    ...plugins,
    new webpack.optimize.ModuleConcatenationPlugin(),
    new UglifyJsPlugin(),
    new OfflinePlugin({
      version: '[hash]',
      AppCache: false,
      ServiceWorker: {
        navigateFallbackURL: '/',
      },
    }),
    new BundleAnalyzerPlugin(),
  ]
}

module.exports = {
  entry: {
    app: [
      ...(isDev ? [
        require.resolve('react-hot-loader/patch'),
        require.resolve('react-dev-utils/webpackHotDevClient'),
      ] : []),
      './client.js',
    ],
  },
  output: {
    path: path.resolve('public'),
    filename: isDev ? '[name].js' : '[name].[chunkhash].js',
    chunkFilename: isDev ? '[name].js' : '[name].[chunkhash].js',
    publicPath: '/',
  },
  context: path.resolve('src'),
  devtool: isDev ? 'cheap-module-inline-source-map' : 'sourcemap',
  performance: {
    hints: false,
  },
  devServer: {
    compress: true,
    contentBase: path.resolve('public'),
    disableHostCheck: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true,
    quiet: true,
  },
  plugins,
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
    ],
  },
}
