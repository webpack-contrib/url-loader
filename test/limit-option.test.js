import {
  compile,
  execute,
  getCompiler,
  normalizeErrors,
  readAsset,
} from './helpers';

describe('"limit" option', () => {
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

  it('should work with "Number" value equal to 0', async () => {
    const compiler = getCompiler('simple.js', {
      limit: 0,
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

  it('should work with "Number" value equal to 0.1', async () => {
    const compiler = getCompiler('simple.js', {
      limit: 0.1,
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

  it('should work with "Number" value equal to 6776', async () => {
    const compiler = getCompiler('simple.js', {
      limit: 6776,
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

  it('should work with "Number" value equal to 6777', async () => {
    const compiler = getCompiler('simple.js', {
      limit: 6777,
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

  it('should work with "Number" value equal to 6778', async () => {
    const compiler = getCompiler('simple.js', {
      limit: 6778,
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

  it('should work with "Number" value equal to Number.MAX_SAFE_INTEGER', async () => {
    const compiler = getCompiler('simple.js', {
      limit: Number.MAX_SAFE_INTEGER,
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

  it('should work with "Number" value equal to Number.MIN_SAFE_INTEGER', async () => {
    const compiler = getCompiler('simple.js', {
      limit: Number.MIN_SAFE_INTEGER,
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

  it('should work with "Number" value equal to Number.MAX_VALUE', async () => {
    const compiler = getCompiler('simple.js', {
      limit: Number.MAX_VALUE,
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

  it('should work with "Number" value equal to Infinity', async () => {
    const compiler = getCompiler('simple.js', {
      limit: Infinity,
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

  it('should work with "Boolean" value equal to true', async () => {
    const compiler = getCompiler('simple.js', {
      limit: true,
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

  it('should work with "Boolean" value equal to false', async () => {
    const compiler = getCompiler('simple.js', {
      limit: false,
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

  it('should work with "String" value equal to 0', async () => {
    const compiler = getCompiler('simple.js', {
      limit: '0',
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

  it('should work with "String" value equal to 0.1', async () => {
    const compiler = getCompiler('simple.js', {
      limit: '0.1',
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

  it('should work with "String" value equal to 6776', async () => {
    const compiler = getCompiler('simple.js', {
      limit: '6776',
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

  it('should work with "String" value equal to 6777', async () => {
    const compiler = getCompiler('simple.js', {
      limit: '6777',
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

  it('should work with "String" value equal to 6778', async () => {
    const compiler = getCompiler('simple.js', {
      limit: '6778',
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

  it('?limit=0 ({Function})', async () => {
    // Image size is 6777
    const config = {
      loader: {
        test: /\.png$/,
        options: {
          limit(context) {
            const params = new URLSearchParams(context.resourceQuery);
            const limit = params.get('limit');
            if (['true', 'false'].includes(limit)) {
              return limit === 'true';
            }
            return isNaN(parseInt(limit, 10)) ? true : limit;
          },
        },
      },
    };

    const stats = await webpack('fixture-fn-limit-0.js', config);
    const [{ source }] = stats.toJson().modules;

    expect(source).toMatchSnapshot();
  });

  it('?limit=0.1 ({Function})', async () => {
    // Image size is 6777
    const config = {
      loader: {
        test: /\.png$/,
        options: {
          limit(context) {
            const params = new URLSearchParams(context.resourceQuery);
            const limit = params.get('limit');
            if (['true', 'false'].includes(limit)) {
              return limit === 'true';
            }
            return isNaN(parseInt(limit, 10)) ? true : limit;
          },
        },
      },
    };

    const stats = await webpack('fixture-fn-limit-0.1.js', config);
    const [{ source }] = stats.toJson().modules;

    expect(source).toMatchSnapshot();
  });

  it('?limit=6776 ({Function})', async () => {
    // Image size is 6777
    const config = {
      loader: {
        test: /\.png$/,
        options: {
          limit(context) {
            const params = new URLSearchParams(context.resourceQuery);
            const limit = params.get('limit');
            if (['true', 'false'].includes(limit)) {
              return limit === 'true';
            }
            return isNaN(parseInt(limit, 10)) ? true : limit;
          },
        },
      },
    };

    const stats = await webpack('fixture-fn-limit-6776.js', config);
    const [{ source }] = stats.toJson().modules;

    expect(source).toMatchSnapshot();
  });

  it('?limit=6777 ({Function})', async () => {
    // Image size is 6777
    const config = {
      loader: {
        test: /\.png$/,
        options: {
          limit(context) {
            const params = new URLSearchParams(context.resourceQuery);
            const limit = params.get('limit');
            if (['true', 'false'].includes(limit)) {
              return limit === 'true';
            }
            return isNaN(parseInt(limit, 10)) ? true : limit;
          },
        },
      },
    };

    const stats = await webpack('fixture-fn-limit-6777.js', config);
    const [{ source }] = stats.toJson().modules;

    expect(source).toMatchSnapshot();
  });

  it('?limit=6778 ({Function})', async () => {
    // Image size is 6777
    const config = {
      loader: {
        test: /\.png$/,
        options: {
          limit(context) {
            const params = new URLSearchParams(context.resourceQuery);
            const limit = params.get('limit');
            if (['true', 'false'].includes(limit)) {
              return limit === 'true';
            }
            return isNaN(parseInt(limit, 10)) ? true : limit;
          },
        },
      },
    };

    const stats = await webpack('fixture-fn-limit-6778.js', config);
    const [{ source }] = stats.toJson().modules;

    expect(source).toMatchSnapshot();
  });

  it('?limit=true ({Function})', async () => {
    // Image size is 6777
    const config = {
      loader: {
        test: /\.png$/,
        options: {
          limit(context) {
            const params = new URLSearchParams(context.resourceQuery);
            const limit = params.get('limit');
            if (['true', 'false'].includes(limit)) {
              return limit === 'true';
            }
            return isNaN(parseInt(limit, 10)) ? true : limit;
          },
        },
      },
    };

    const stats = await webpack('fixture-fn-limit-true.js', config);
    const [{ source }] = stats.toJson().modules;

    expect(source).toMatchSnapshot();
  });

  it('?limit=false ({Function})', async () => {
    // Image size is 6777
    const config = {
      loader: {
        test: /\.png$/,
        options: {
          limit(context) {
            const params = new URLSearchParams(context.resourceQuery);
            const limit = params.get('limit');
            if (['true', 'false'].includes(limit)) {
              return limit === 'true';
            }
            return isNaN(parseInt(limit, 10)) ? true : limit;
          },
        },
      },
    };

    const stats = await webpack('fixture-fn-limit-false.js', config);
    const [{ source }] = stats.toJson().modules;

    expect(source).toMatchSnapshot();
  });

  it('?limit=invalid ({Function})', async () => {
    // Image size is 6777
    const config = {
      loader: {
        test: /\.png$/,
        options: {
          limit(context) {
            const params = new URLSearchParams(context.resourceQuery);
            const limit = params.get('limit');
            if (['true', 'false'].includes(limit)) {
              return limit === 'true';
            }
            return isNaN(parseInt(limit, 10)) ? true : limit;
          },
        },
      },
    };

    const stats = await webpack('fixture-fn-limit-invalid.js', config);
    const [{ source }] = stats.toJson().modules;

    expect(source).toMatchSnapshot();
  });

  it('? ({Function})', async () => {
    // Image size is 6777
    const config = {
      loader: {
        test: /\.png$/,
        options: {
          limit(context) {
            const params = new URLSearchParams(context.resourceQuery);
            const limit = params.get('limit');
            if (['true', 'false'].includes(limit)) {
              return limit === 'true';
            }
            return isNaN(parseInt(limit, 10)) ? true : limit;
          },
        },
      },
    };

    const stats = await webpack('fixture-fn-limit-omitted-param.js', config);
    const [{ source }] = stats.toJson().modules;

    expect(source).toMatchSnapshot();
  });

  it('?limit= ({Function})', async () => {
    // Image size is 6777
    const config = {
      loader: {
        test: /\.png$/,
        options: {
          limit(context) {
            const params = new URLSearchParams(context.resourceQuery);
            const limit = params.get('limit');
            if (['true', 'false'].includes(limit)) {
              return limit === 'true';
            }
            return isNaN(parseInt(limit, 10)) ? true : limit;
          },
        },
      },
    };

    const stats = await webpack('fixture-fn-limit-omitted-value.js', config);
    const [{ source }] = stats.toJson().modules;

    expect(source).toMatchSnapshot();
  });
});
