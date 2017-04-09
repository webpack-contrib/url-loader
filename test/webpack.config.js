/* eslint-disable */

const path = require('path');

module.exports = (config) => ({
  target: 'node',
  context: path.join(__dirname, 'configs'),
  entry: `./${config.file}.js`,
  output: {
    path: path.join(__dirname, 'builds'),
    filename: `${config.file}.test.js`,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: path.resolve('dist', 'cjs.js'),
            options: config.options || {},
          }
        ]
      }
    ]
  }
});
