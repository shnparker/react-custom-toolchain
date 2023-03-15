const path = require("path");

module.exports = {
  appPath: path.resolve(__dirname, "../src"),
  publicPath: path.resolve(__dirname, "../public"),
  envPath: path.resolve(__dirname, "./env"),
  outputPath: path.resolve(__dirname, "../dist"),
  webpackCachePath: path.resolve(__dirname, "../node_modules/.cache"),
  tsConfigPath: path.resolve(__dirname, "../tsconfig.json"),
};
