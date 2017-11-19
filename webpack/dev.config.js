const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const notifier = require('node-notifier');
const pkg = require('../package.json');
const baseConfig = require('./base.config.js');

const config = Object.assign({}, baseConfig, {
  devtool: 'source-map',
  plugins: baseConfig.plugins.concat([
    new FriendlyErrorsWebpackPlugin({
      onErrors: (severity, errors) => {
        if (severity !== 'error') {
          return;
        }
        const error = errors[0];
        notifier.notify({
          title: pkg.name,
          message: `${ severity }: ${ error.name }`,
          subtitle: error.file || '',
        });
      },
    }),
  ]),

  devServer: {
    historyApiFallback: true,
    contentBase: '/',
    quiet: true,
  },
});

module.exports = config;
