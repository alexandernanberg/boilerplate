const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPLugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin')
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin')
const paths = require('./paths')

module.exports = urls => ({
  devtool: 'cheap-module-inline-source-map',
  entry: {
    app: [
      require.resolve('react-hot-loader/patch'),
      require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appIndexJs,
    ],
  },
  output: {
    pathinfo: true,
    filename: 'static/scripts/[name].js',
    chunkFilename: 'static/scripts/[name].chunk.js',
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
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin(),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [`Ready on ${urls.localUrlForTerminal}`],
      },
    }),
    new WatchMissingNodeModulesPlugin(paths.appNodeModules),
    new CopyWebpackPlugin([
      {
        from: path.resolve('public'),
        to: 'dist',
      },
    ]),
    new InterpolateHtmlPlugin({ PUBLIC_URL: '' }),
    new HtmlWebpackPLugin({
      template: paths.appHtml,
      inject: true,
    }),
  ],
  performance: {
    hints: false,
  },
})
