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
  it('should work with "Function" right mini-svg-data-uri encoding', async () => {
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
  it('should work with "Function" generating encoding manually', async () => {
    const compiler = getCompiler('simple-svg.js', {
      generator: (content) => `data:image/svg;utf8,${content.toString('utf8')}`,
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
