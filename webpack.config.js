const webpack = require('webpack');
const HtmlWebpackPLugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  context: `${__dirname}/src`,
  devtool: debug ? 'inline-source-map' : 'source-map',
  entry: {
    app: './app.js',
  },
  output: {
    path: `${__dirname}/public`,
    filename: debug ? '[name].js' : '[name].[chunkhash].js',
    publicPath: '/',
  },
  performance: {
    hints: false,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              importLoaders: 1,
              minify: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'svg-sprite-loader',
          query: {
            name: '[name]',
          },
        },
      },
    ],
  },
  plugins: debug ? [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPLugin({
      template: './index.html',
    }),
  ] : [
    new webpack.EnvironmentPlugin('NODE_ENV'),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPLugin({
      template: './index.html',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => module.context && module.context.indexOf('node_modules') !== -1,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity,
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      mangle: true,
      sourcemap: true,
    }),
    new CopyWebpackPlugin([
      { from: 'manifest.json' },
    ]),
    new OfflinePlugin(),
  ],
  devServer: {
    contentBase: `${__dirname}/src`,
    historyApiFallback: true,
  },
};
