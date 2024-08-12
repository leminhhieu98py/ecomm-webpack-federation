const WebpackHTMLPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 1002
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'cart',
      filename: 'remoteEntries.js',
      exposes: {
        './Cart': './src/index'
      }
    }),
    new WebpackHTMLPlugin({
      template: './public/index.html'
    })
  ]
};
