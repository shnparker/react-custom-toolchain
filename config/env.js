'use strict'

const fs = require('fs')

const configPaths = require('./configPaths')

const NODE_ENV = process.env.NODE_ENV
if (!NODE_ENV) {
  throw new Error('The NODE_ENV environment variable is required but was not specified.')
}

const dotenvFiles = [
  `${configPaths.envPath}.${NODE_ENV}.local`,
  NODE_ENV !== 'test' && `${configPaths.envPath}.local`,
  `${configPaths.envPath}.${NODE_ENV}`,
  configPaths.envPath,
].filter(Boolean)

dotenvFiles.forEach((dotenvFile) => {
  if (fs.existsSync(dotenvFile)) {
    require('dotenv').config({
      path: dotenvFile,
    })
  }
})
function getClientEnvironment(publicUrl) {
  const raw = Object.keys(process.env).reduce(
    (env, key) => {
      env[key] = process.env[key]
      return env
    },
    {
      NODE_ENV: process.env.NODE_ENV || 'development',
      PUBLIC_URL: publicUrl,
    }
  )
  // Stringify all values so we can feed into webpack DefinePlugin
  const stringified = {
    'process.env': Object.keys(raw).reduce((env, key) => {
      env[key] = JSON.stringify(raw[key])
      return env
    }, {}),
  }

  return { raw, stringified }
}

module.exports = getClientEnvironment
