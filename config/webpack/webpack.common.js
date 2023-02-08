const path = require('path')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const configPaths = require('../configPaths')
const fs = require('fs')
const { createHash } = require('crypto')
const dotenv = require('dotenv')

// Utility functions ----------------------------------------------------------

createWebpackHash = (env) => {
  const hash = createHash('md5')
  hash.update(JSON.stringify(env))

  return hash.digest('hex')
}

// function parseEnvFile(name) {
//   const file = `./.env/${name}`
//   return fs.existsSync(file) ? dotenv.config({ path: file }).parsed : {}
// }

// Webpack config --------------------------------------------------------------

//   envFlags = webpackEnv || {}
//
//   const ENV = envFlags.ENV || 'production'
//
//   let env = {
//     ...parseEnvFile(`.env.${ENV}`),
//     ...envFlags,
//   }
//
//   console.log(webpackEnv)
//   console.log(env)
//   console.log(ENV)
//   console.log(parseEnvFile(`.env.${ENV}`))

module.exports = {
  entry: path.join(configPaths.appPath, 'index.tsx'),
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].bundle.js',
    path: path.resolve(configPaths.outputPath),
    publicPath: '/',
    clean: true,
  },
  cache: {
    type: 'filesystem',
    version: createWebpackHash({}), // TODO replace with ENV
    cacheDirectory: configPaths.webpackCachePath,
    store: 'pack',
    buildDependencies: {
      defaultWebpack: ['webpack/lib/'],
      config: [__filename],
      tsconfig: [configPaths.tsConfigPath],
    },
  },
  target: ['browserslist'],
  stats: 'errors-warnings',
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
        test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/i,
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
      // minify: {
      //   removeComments: true,
      //   collapseWhitespace: true,
      //   removeRedundantAttributes: true,
      //   useShortDoctype: true,
      //   removeEmptyAttributes: true,
      //   removeStyleLinkTypeAttributes: true,
      //   keepClosingSlash: true,
      //   minifyJS: true,
      //   minifyCSS: true,
      //   minifyURLs: true,
      // },
    }),
  ],
}
