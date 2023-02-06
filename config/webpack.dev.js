const path = require('path')
const { merge } = require('webpack-merge')

const common = require('./webpack.common.js')

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [require.resolve('react-refresh/babel')],
            },
          },
        ],
      },
    ],
  },
  plugins: [new ReactRefreshWebpackPlugin()],
})
