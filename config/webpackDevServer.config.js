/* eslint-disable import/no-extraneous-dependencies */

const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware')
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware')
const path = require('path')
const paths = require('./paths')

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http'

module.exports = (host, publicPath) => ({
  disableHostCheck: true,
  compress: true,
  clientLogLevel: 'none',
  contentBase: paths.appPublic,
  hot: true,
  publicPath,
  quiet: true,
  https: protocol === 'https',
  host,
  overlay: false,
  historyApiFallback: {
    disableDotRule: true,
  },
  before(app) {
    app.use(errorOverlayMiddleware())
    app.use(noopServiceWorkerMiddleware())
  },
})
