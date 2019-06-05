import path from 'path';

import del from 'del';
import webpack from 'webpack';
import MemoryFS from 'memory-fs';

const modules = (config) => {
  return {
    rules: config.rules
      ? config.rules
      : config.loader
      ? [
          {
            test: config.loader.test || /\.js$/,
            use: {
              loader: path.resolve(__dirname, '../../src'),
              options: config.loader.options || {},
            },
          },
        ]
      : [],
  };
};

const plugins = (config) => [].concat(config.plugins || []);

const output = (config) => {
  return {
    path: path.resolve(
      __dirname,
      `../outputs/${config.output ? config.output : ''}`
    ),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  };
};

export default function(fixture, config, options) {
  // eslint-disable-next-line no-param-reassign
  config = {
    mode: 'development',
    devtool: config.devtool || 'sourcemap',
    context: path.resolve(__dirname, '..', 'fixtures'),
    entry: `./${fixture}`,
    output: output(config),
    module: modules(config),
    plugins: plugins(config),
  };

  // eslint-disable-next-line no-param-reassign
  options = Object.assign({ output: false }, options);

  if (options.output) {
    del.sync(config.output.path);
  }

  const compiler = webpack(config);

  if (!options.output) {
    compiler.outputFileSystem = new MemoryFS();
  }

  return new Promise((resolve, reject) =>
    compiler.run((error, stats) => {
      if (error) {
        reject(error);
      }

      return resolve(stats);
    })
  );
}
