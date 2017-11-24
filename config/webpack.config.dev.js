const webpack = require('webpack')
const HtmlWebpackPLugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin')
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin')
const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware')
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware')
const paths = require('./paths')

const publicPath = '/'
const port = 3000

module.exports = {
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
    publicPath,
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
        messages: [`Ready on http://localhost:${port}`],
      },
    }),
    new WatchMissingNodeModulesPlugin(paths.appNodeModules),
    new InterpolateHtmlPlugin({ PUBLIC_URL: '' }),
    new HtmlWebpackPLugin({
      template: paths.appHtml,
      inject: true,
    }),
  ],
  performance: {
    hints: false,
  },
  devServer: {
    disableHostCheck: true,
    compress: true,
    clientLogLevel: 'none',
    contentBase: paths.appPublic,
    hot: true,
    quiet: true,
    publicPath,
    port,
    host: '0.0.0.0',
    overlay: false,
    historyApiFallback: {
      disableDotRule: true,
    },
    before(app) {
      app.use(errorOverlayMiddleware())
      app.use(noopServiceWorkerMiddleware())
    },
  },
}
