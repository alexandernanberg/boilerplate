const webpack = require('webpack')
const HtmlWebpackPLugin = require('html-webpack-plugin')
const CleanWebpackPLugin = require('clean-webpack-plugin')
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OfflinePlugin = require('offline-plugin')

const paths = require('./paths')

module.exports = {
  devtool: 'sourcemap',
  entry: {
    app: [paths.appIndexJs],
  },
  output: {
    path: paths.appBuild,
    filename: 'scripts/[name].[chunkhash:8].js',
    chunkFilename: 'scripts/[name].[chunkhash:8].chunk.js',
    publicPath: paths.servedPath,
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
    new webpack.EnvironmentPlugin({ NODE_ENV: 'production' }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: module => module.context && module.context.indexOf('node_modules') !== -1,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity,
    }),
    new CleanWebpackPLugin([paths.appBuild], { root: process.cwd() }),
    new CopyWebpackPlugin([
      {
        from: paths.appPublic,
        to: '.',
        ignore: ['index.html'],
      },
    ]),
    new InterpolateHtmlPlugin({ PUBLIC_URL: '' }),
    new HtmlWebpackPLugin({
      template: paths.appHtml,
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new UglifyJsPlugin(),
    new OfflinePlugin({
      appShell: '/',
      version: '[hash]',
      AppCache: false,
      ServiceWorker: {
        minify: true,
      },
    }),
  ],
}
