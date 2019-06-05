import webpack from './helpers/compiler';

describe('limit option', () => {
  it('{undefined}', async () => {
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

  it('{Number} (0)', async () => {
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

  it('{Number} (0.1)', async () => {
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

  it('{Number} (6776)', async () => {
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

  it('{Number} (6777)', async () => {
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

  it('{Number} (6778)', async () => {
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

  it('{Number} (Number.MAX_SAFE_INTEGER)', async () => {
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

  it('{Number} (Number.MIN_SAFE_INTEGER)', async () => {
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
});
