/* eslint-disable */
const path = require('path');
const webpack = require('webpack');

module.exports = function compiler (file, options) {
  const config = {
    target: 'node',
    devtool: 'source-map',
    context: path.resolve(__dirname),
    resolve: { extensions: ['.js'] },
    entry: `./${file}`,
    output: {
      path: path.resolve(__dirname, 'expect'),
      filename: `${path.basename(file)}.bundle.js`,
    },
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: path.resolve('dist', 'cjs.js'),
              options: options.loader || {}
            }
          ]
        }
      ]
    },
    plugins: []
  }

  if (!options.type) options.type = 'loader'

  return new Promise((resolve, reject) => {
    return webpack(config, (err, stats) => {
      if (err) reject(err);

      const result = options.type === 'loader'
        ? {
          err: stats.compilation.errors[0],
          src: stats.compilation.modules[0]._source._value,
          map: stats.compilation.modules[0]._source._sourceMap
        }
        : stats.compilation;

      resolve(result);
    });
  });
}