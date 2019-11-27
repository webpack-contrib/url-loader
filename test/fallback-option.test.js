import path from 'path';

import {
  compile,
  execute,
  getCompiler,
  normalizeErrors,
  readAsset,
} from './helpers';

describe('"fallback" option', () => {
  it('should work with unspecified value', async () => {
    const compiler = getCompiler('simple.js');
    const stats = await compile(compiler);

    expect(
      execute(readAsset('main.bundle.js', compiler, stats))
    ).toMatchSnapshot('result');
    expect(Object.keys(stats.compilation.assets)).toMatchSnapshot('assets');
    expect(normalizeErrors(stats.compilation.warnings)).toMatchSnapshot(
      'warnings'
    );
    expect(normalizeErrors(stats.compilation.errors)).toMatchSnapshot('errors');
  });

  it('should work with "String" value', async () => {
    const compiler = getCompiler('simple.js', {
      limit: Number.MIN_SAFE_INTEGER,
      name: '[name].[hash].[ext]',
      unknown: 'value',
      fallback: path.join(__dirname, 'fixtures/x-custom-loader'),
    });
    const stats = await compile(compiler);

    expect(
      execute(readAsset('main.bundle.js', compiler, stats))
    ).toMatchSnapshot('result');
    expect(Object.keys(stats.compilation.assets)).toMatchSnapshot('assets');
    expect(normalizeErrors(stats.compilation.warnings)).toMatchSnapshot(
      'warnings'
    );
    expect(normalizeErrors(stats.compilation.errors)).toMatchSnapshot('errors');
  });

  it('should work with "String" value and require.resolve', async () => {
    const compiler = getCompiler('simple.js', {
      limit: Number.MIN_SAFE_INTEGER,
      name: '[name].[hash].[ext]',
      unknown: 'value',
      fallback: require.resolve('./fixtures/x-custom-loader'),
    });
    const stats = await compile(compiler);

    expect(
      execute(readAsset('main.bundle.js', compiler, stats))
    ).toMatchSnapshot('result');
    expect(Object.keys(stats.compilation.assets)).toMatchSnapshot('assets');
    expect(normalizeErrors(stats.compilation.warnings)).toMatchSnapshot(
      'warnings'
    );
    expect(normalizeErrors(stats.compilation.errors)).toMatchSnapshot('errors');
  });

  it('should work with "String" value and with query', async () => {
    const compiler = getCompiler('simple.js', {
      limit: Number.MIN_SAFE_INTEGER,
      name: '[name].[hash].[ext]',
      unknown: 'value',
      fallback: `${path.join(
        __dirname,
        'fixtures/x-custom-loader'
      )}?name=fallback-[hash].[ext]&unknown=fallback-value`,
    });
    const stats = await compile(compiler);

    expect(
      execute(readAsset('main.bundle.js', compiler, stats))
    ).toMatchSnapshot('result');
    expect(Object.keys(stats.compilation.assets)).toMatchSnapshot('assets');
    expect(normalizeErrors(stats.compilation.warnings)).toMatchSnapshot(
      'warnings'
    );
    expect(normalizeErrors(stats.compilation.errors)).toMatchSnapshot('errors');
  });

  it('should work with "String" value, with query and require.resolve', async () => {
    const compiler = getCompiler('simple.js', {
      limit: Number.MIN_SAFE_INTEGER,
      name: '[name].[hash].[ext]',
      unknown: 'value',
      fallback: `${require.resolve(
        './fixtures/x-custom-loader'
      )}?name=fallback-[hash].[ext]&unknown=fallback-value`,
    });
    const stats = await compile(compiler);

    expect(
      execute(readAsset('main.bundle.js', compiler, stats))
    ).toMatchSnapshot('result');
    expect(Object.keys(stats.compilation.assets)).toMatchSnapshot('assets');
    expect(normalizeErrors(stats.compilation.warnings)).toMatchSnapshot(
      'warnings'
    );
    expect(normalizeErrors(stats.compilation.errors)).toMatchSnapshot('errors');
  });

  it('should work with "Object" value', async () => {
    const compiler = getCompiler('simple.js', {
      limit: Number.MIN_SAFE_INTEGER,
      name: '[name].[hash].[ext]',
      unknown: 'value',
      fallback: {
        loader: path.join(__dirname, 'fixtures/x-custom-loader'),
        options: {
          name: 'fallback-[hash].[ext]',
          unknown: 'fallback-other-value',
        },
      },
    });
    const stats = await compile(compiler);

    expect(
      execute(readAsset('main.bundle.js', compiler, stats))
    ).toMatchSnapshot('result');
    expect(Object.keys(stats.compilation.assets)).toMatchSnapshot('assets');
    expect(normalizeErrors(stats.compilation.warnings)).toMatchSnapshot(
      'warnings'
    );
    expect(normalizeErrors(stats.compilation.errors)).toMatchSnapshot('errors');
  });

  it('should work with "Object" value and require.resolve', async () => {
    const compiler = getCompiler('simple.js', {
      limit: Number.MIN_SAFE_INTEGER,
      name: '[name].[hash].[ext]',
      unknown: 'value',
      fallback: {
        loader: require.resolve('./fixtures/x-custom-loader'),
        options: {
          name: 'fallback-[hash].[ext]',
          unknown: 'fallback-other-value',
        },
      },
    });
    const stats = await compile(compiler);

    expect(
      execute(readAsset('main.bundle.js', compiler, stats))
    ).toMatchSnapshot('result');
    expect(Object.keys(stats.compilation.assets)).toMatchSnapshot('assets');
    expect(normalizeErrors(stats.compilation.warnings)).toMatchSnapshot(
      'warnings'
    );
    expect(normalizeErrors(stats.compilation.errors)).toMatchSnapshot('errors');
  });
});
