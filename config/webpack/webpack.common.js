const path = require('path')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const configPaths = require('../configPaths')
const fs = require('fs')
const { createHash } = require('crypto')
const dotenv = require('dotenv')

const webpack = require('webpack')

// Utility functions ----------------------------------------------------------

createWebpackHash = (env) => {
  const hash = createHash('md5')
  hash.update(JSON.stringify(env))

  return hash.digest('hex')
}

function parseEnvFile(name) {
  const file = configPaths.envPath + '/' + name

  return fs.existsSync(file) ? dotenv.config({ path: file }).parsed : {}
}

function logCurrentEnv(env) {
  console.log('----- Current environment variables -----')
  Object.keys(env).forEach((key) => {
    console.log(`  ${key}: ${env[key]}`)
  })
  console.log('----------------------------------------')
}

// Webpack config --------------------------------------------------------------

module.exports = (webpackEnv) => {
  const envFlags = webpackEnv || {}

  const ENV = envFlags.ENV || 'development'

  let env = {
    ...parseEnvFile(`.env.${ENV}`),
    ...envFlags,
  }

  logCurrentEnv(env)

  return {
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
      version: createWebpackHash(env),
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
      new webpack.EnvironmentPlugin(env),
      new HtmlWebpackPlugin({
        template: path.join(configPaths.publicPath, 'index.html'),
        scriptLoading: 'defer',
        chunks: ['main'],
      }),
    ],
  }
}