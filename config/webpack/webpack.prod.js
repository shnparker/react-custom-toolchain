const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')
const configPaths = require('../configPaths')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = (...args) =>
  merge(common(...args), {
    mode: 'production',
    devtool: 'source-map',
    bail: true,
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          include: path.resolve(__dirname, configPaths.appPath),
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/i,
          include: path.resolve(__dirname, configPaths.appPath),
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        },
      ],
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: path.resolve('dist', 'reports', 'bundle-report.html'),
        openAnalyzer: false,
      }),
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contenthash].css',
        chunkFilename: 'static/css/[id].[contenthash].css',
      }),
    ],
    optimization: {
      moduleIds: 'deterministic',
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
      minimizer: [`...`, new CssMinimizerPlugin()],
    },
  })
