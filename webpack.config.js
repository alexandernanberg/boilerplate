const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPLugin = require('html-webpack-plugin');

const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: debug ? 'inline-source-map' : 'source-map',
  entry: {
    main: './app.js',
    vendor: [
      'axios',
      'react',
      'react-dom',
      'react-router-dom',
      'shortid',
    ],
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: debug ? '[name].js' : '[name].[chunkhash].js',
    publicPath: '/',
  },
  performance: {
    maxAssetSize: 500000,
    maxEntrypointSize: 500000,
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
      names: ['vendor', 'manifest'],
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
  ],
};
