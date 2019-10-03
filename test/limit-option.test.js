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
});
