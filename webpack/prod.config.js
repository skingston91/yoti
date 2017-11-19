const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./base.config.js');

const config = Object.assign({}, baseConfig, {
  plugins: baseConfig.plugins.concat([
    // Minify JS
    new UglifyJsPlugin(),
  ]),
});

module.exports = config;
