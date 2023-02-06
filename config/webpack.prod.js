const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: path.resolve('dist', 'reports', 'bundle-report.html'),
      openAnalyzer: false,
    }),
  ],
})
