const { override, addWebpackPlugin } = require('customize-cra');
const webpack = require('webpack');

module.exports = override(
  addWebpackPlugin(
    new webpack.Configuration({
      output: {
        hashFunction: 'xxhash64'
      }
    })
  )
);
