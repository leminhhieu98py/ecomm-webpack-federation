const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:3001/'
  },
  devServer: {
    port: 3001,
    historyApiFallback: {
      index: '/index.html'
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: 'marketing@http://localhost:3002/remoteEntry.js',
        auth: 'auth@http://localhost:3003/remoteEntry.js',
        dashboard: 'dashboard@http://localhost:3004/remoteEntry.js'
      },
      shared: ['react', 'react-dom']
    })
  ]
};

module.exports = merge(commonConfig, devConfig);
