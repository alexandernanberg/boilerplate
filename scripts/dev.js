/* eslint-disable import/no-extraneous-dependencies */

process.env.NODE_ENV = 'development'

process.on('unhandledRejection', (err) => {
  throw err
})

const chalk = require('chalk')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const { choosePort, prepareUrls } = require('react-dev-utils/WebpackDevServerUtils')
const createWebpackConfig = require('../config/webpack.config.dev')
const createDevServerConfig = require('../config/webpackDevServer.config')

const HOST = '0.0.0.0'
const DEFAULT_PORT = 3000

choosePort(HOST, DEFAULT_PORT)
  .then((port) => {
    const protocol = 'http'
    const urls = prepareUrls(protocol, HOST, port)
    const config = createWebpackConfig(urls)
    const devServerConfig = createDevServerConfig(HOST, config.output.publicPath)
    const compiler = webpack(config)
    const devServer = new WebpackDevServer(compiler, devServerConfig)

    devServer.listen(port, HOST, (err) => {
      if (err) {
        console.log(err)
        return
      }

      console.log(chalk.blue('Starting the development server...\n'))
    })
  })
  .catch((err) => {
    if (err && err.message) {
      console.log(err.message)
    }
    process.exit(1)
  })
