const webpack = require('webpack');
const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const distName = 'dist';
const distDir = path.join(__dirname, '../', distName);
const pathsToClean = [
  path.join(distName, '/*.*'),
];
const cleanOptions = {
  root: path.join(__dirname, '..'),
};

const VENDOR_LIBS = [
  'react',
  'lodash',
  'redux',
  'react-redux',
  'react-dom',
  'axios',
  'babel-preset-stage-1',
  'redux-thunk',
  'react-router-dom',
];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS,
  },
  output: {
    publicPath: '/',
    path: distDir,
    filename: '[name].[chunkhash].js',
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, '..', 'src/components/'),
      containers: path.resolve(__dirname, '..', 'src/containers/'),
      assets: path.resolve(__dirname, '..', 'assets/'),
    },
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/,
      },
      {
        use: ['style-loader', 'css-loader', 'sass-loader'],
        test: /\.scss$/,
      },

      {
        use: ['url-loader'],
        test: /\.(png|jpg)$/,
      },
    ],
  },
  plugins: [
    new CleanPlugin(pathsToClean, cleanOptions),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
};
