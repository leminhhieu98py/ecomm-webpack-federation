const WebpackHTMLPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 1000
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        products: 'products@http://localhost:1001/remoteEntry.js',
        cart: 'cart@http://localhost:1002/remoteEntry.js'
      }
    }),
    new WebpackHTMLPlugin({
      template: './public/index.html'
    })
  ]
};
