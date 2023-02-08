const path = require('path')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const configPaths = require('../configPaths')

module.exports = {
  entry: path.join(configPaths.appPath, 'index.tsx'),
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].bundle.js',
    path: path.resolve(configPaths.outputPath),
    publicPath: '/',
    clean: true,
  },
  target: ['browserslist'],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': configPaths.appPath,
    },
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, configPaths.appPath),
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        include: path.resolve(__dirname, configPaths.appPath),
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, configPaths.appPath),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public/**/*',
          globOptions: {
            dot: true,
            gitignore: true,
            ignore: ['index.html'],
          },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.join(configPaths.publicPath, 'index.html'),
      scriptLoading: 'defer',
      chunks: ['main'],
    }),
  ],
}
