const path = require('path')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, '../src', 'index.tsx'),
  target: ['browserslist'],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'assets/[name].[contenthash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public/images',
          to: `images`,
        },
        {
          from: 'public/robots.txt',
          to: `robots.txt`,
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public', 'index.html'),
      scriptLoading: 'defer',
      chunks: ['main'],
    }),
  ],
}
