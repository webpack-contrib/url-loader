import webpack from './helpers/compiler';

describe('limit option', () => {
  it('not specify', async () => {
    const config = {
      loader: {
        test: /\.png$/,
        options: {},
      },
    };

    const stats = await webpack('fixture.js', config);
    const [{ source }] = stats.toJson().modules;

    expect(source).toMatchSnapshot();
  });

  it('0 ({Number})', async () => {
    // Image size is 6777
    const config = {
      loader: {
        test: /\.png$/,
        options: {
          limit: 0,
        },
      },
    };

    const stats = await webpack('fixture.js', config);
    const [{ source }] = stats.toJson().modules;

    expect(source).toMatchSnapshot();
  });

  it('0.1 ({Number})', async () => {
    // Image size is 6777
    const config = {
      loader: {
        test: /\.png$/,
        options: {
          limit: 0.1,
        },
      },
    };

    const stats = await webpack('fixture.js', config);
    const [{ source }] = stats.toJson().modules;

    expect(source).toMatchSnapshot();
  });

  it('6776 ({Number})', async () => {
    // Image size is 6777
    const config = {
      loader: {
        test: /\.png$/,
        options: {
          limit: 6776,
        },
      },
    };

    const stats = await webpack('fixture.js', config);
    const [{ source }] = stats.toJson().modules;

    expect(source).toMatchSnapshot();
  });

  it('6777 ({Number})', async () => {
    // Image size is 6777
    const config = {
      loader: {
        test: /\.png$/,
        options: {
          limit: 6777,
        },
      },
    };

    const stats = await webpack('fixture.js', config);
    const [{ source }] = stats.toJson().modules;

    expect(source).toMatchSnapshot();
  });

  it('6778 ({Number})', async () => {
    // Image size is 6777
    const config = {
      loader: {
        test: /\.png$/,
        options: {
          limit: 6778,
        },
      },
    };

    const stats = await webpack('fixture.js', config);
    const [{ source }] = stats.toJson().modules;

    expect(source).toMatchSnapshot();
  });

  it('Number.MAX_SAFE_INTEGER ({Number})', async () => {
    const config = {
      loader: {
        test: /\.png$/,
        options: {
          limit: Number.MAX_SAFE_INTEGER,
        },
      },
    };

    const stats = await webpack('fixture.js', config);
    const [{ source }] = stats.toJson().modules;

    expect(source).toMatchSnapshot();
  });

  it('Number.MIN_SAFE_INTEGER ({Number})', async () => {
    const config = {
      loader: {
        test: /\.png$/,
        options: {
          limit: Number.MIN_SAFE_INTEGER,
        },
      },
    };

    const stats = await webpack('fixture.js', config);
    const [{ source }] = stats.toJson().modules;

    expect(source).toMatchSnapshot();
  });

  it('Number.MAX_VALUE ({Number})', async () => {
    const config = {
      loader: {
        test: /\.png$/,
        options: {
          limit: Number.MAX_VALUE,
        },
      },
    };

    const stats = await webpack('fixture.js', config);
    const [{ source }] = stats.toJson().modules;

    expect(source).toMatchSnapshot();
  });

  it('Infinity ({Number})', async () => {
    const config = {
      loader: {
        test: /\.png$/,
        options: {
          limit: Infinity,
        },
      },
    };

    const stats = await webpack('fixture.js', config);
    const [{ source }] = stats.toJson().modules;

    expect(source).toMatchSnapshot();
  });

  it('true ({Boolean})', async () => {
    const config = {
      loader: {
        test: /\.png$/,
        options: {
          limit: true,
        },
      },
    };

    const stats = await webpack('fixture.js', config);
    const [{ source }] = stats.toJson().modules;

    expect(source).toMatchSnapshot();
  });

  it('false ({Boolean})', async () => {
    const config = {
      loader: {
        test: /\.png$/,
        options: {
          limit: false,
        },
      },
    };

    const stats = await webpack('fixture.js', config);
    const [{ source }] = stats.toJson().modules;

    expect(source).toMatchSnapshot();
  });

  it('0 ({String})', async () => {
    // Image size is 6777
    const config = {
      loader: {
        test: /\.png$/,
        options: {
          limit: '0',
        },
      },
    };

    const stats = await webpack('fixture.js', config);
    const [{ source }] = stats.toJson().modules;

    expect(source).toMatchSnapshot();
  });

  it('0.1 ({String})', async () => {
    // Image size is 6777
    const config = {
      loader: {
        test: /\.png$/,
        options: {
          limit: '0.1',
        },
      },
    };

    const stats = await webpack('fixture.js', config);
    const [{ source }] = stats.toJson().modules;

    expect(source).toMatchSnapshot();
  });

  it('6776 ({String})', async () => {
    // Image size is 6777
    const config = {
      loader: {
        test: /\.png$/,
        options: {
          limit: '6776',
        },
      },
    };

    const stats = await webpack('fixture.js', config);
    const [{ source }] = stats.toJson().modules;

    expect(source).toMatchSnapshot();
  });

  it('6777 ({String})', async () => {
    // Image size is 6777
    const config = {
      loader: {
        test: /\.png$/,
        options: {
          limit: '6777',
        },
      },
    };

    const stats = await webpack('fixture.js', config);
    const [{ source }] = stats.toJson().modules;

    expect(source).toMatchSnapshot();
  });

  it('6778 ({String})', async () => {
    // Image size is 6777
    const config = {
      loader: {
        test: /\.png$/,
        options: {
          limit: '6778',
        },
      },
    };

    const stats = await webpack('fixture.js', config);
    const [{ source }] = stats.toJson().modules;

    expect(source).toMatchSnapshot();
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
