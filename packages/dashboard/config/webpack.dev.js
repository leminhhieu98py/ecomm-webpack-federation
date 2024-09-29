const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:3004/'
  },
  devServer: {
    port: 3004,
    historyApiFallback: {
      index: '/index.html'
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'dashboard',
      filename: 'remoteEntry.js',
      exposes: {
        './DashboardApp': './src/mount.js'
      }
    })
  ]
};

module.exports = merge(commonConfig, devConfig);
