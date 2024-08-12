const WebpackHTMLPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 1111
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntries.js',
      exposes: {
        './ProductList': './src/index '
      }
    }),
    new WebpackHTMLPlugin({
      template: './public/index.html'
    })
  ]
};
