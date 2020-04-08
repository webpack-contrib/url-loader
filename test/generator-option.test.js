import {
  compile,
  execute,
  getCompiler,
  normalizeErrors,
  readAsset,
} from './helpers';

const svgToMiniDataURI = require('mini-svg-data-uri');

describe('"generator" option', () => {
  it('should work with unspecified value with the default base64 encoding', async () => {
    const compiler = getCompiler('simple-svg.js');
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

  it('should work with "Function" mini-svg-data-uri generator', async () => {
    const compiler = getCompiler('simple-svg.js', {
      generator: (content) => svgToMiniDataURI(content.toString()),
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

  it('should work with "Function" generating encoded file manually', async () => {
    const compiler = getCompiler('file.html', {
      generator: (content, mimetype, encoding) => {
        return `data:${mimetype}${
          encoding ? `;${encoding}` : ''
        },${content.toString(encoding)}`;
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

  it('should work with "Function" generating encoded file manually without "mimetype"', async () => {
    const compiler = getCompiler('file.html', {
      mimetype: false,
      generator: (content, mimetype, encoding) => {
        return `data:${mimetype}${
          encoding ? `;${encoding}` : ''
        },${content.toString(encoding || 'utf-8')}`;
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

  it('should work with "Function" generating encoded file manually without "encoding"', async () => {
    const compiler = getCompiler('file.html', {
      encoding: false,
      generator: (content, mimetype, encoding) => {
        return `data:${mimetype}${
          encoding ? `;${encoding}` : ''
        },${content.toString(encoding || 'utf-8')}`;
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

  it('should work with "Function" generating encoded file manually without "mimetype" and "encoding"', async () => {
    const compiler = getCompiler('file.html', {
      mimetype: false,
      encoding: false,
      generator: (content, mimetype, encoding) => {
        return `data:${mimetype}${
          encoding ? `;${encoding}` : ''
        },${content.toString(encoding || 'utf-8')}`;
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
