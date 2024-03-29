module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react", "@babel/typescript"],
  plugins: [
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread",
    "dynamic-import-node",
  ],
};
