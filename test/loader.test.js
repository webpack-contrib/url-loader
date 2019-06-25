import webpack from './helpers/compiler';

describe('Loader', () => {
  it('should works', async () => {
    const config = {
      loader: {
        test: /\.png$/,
        options: {},
      },
    };

    const stats = await webpack('fixture.js', config);
    const { modules, errors, warnings } = stats.toJson();

    expect(modules[0].source).toMatchSnapshot();
    expect(errors).toMatchSnapshot('errors');
    expect(warnings).toMatchSnapshot('warnings');
  });

  it('should works when limit as a query string', async () => {
    const config = {
      rules: [
        {
          test: /\.png$/,
          use: {
            loader: `${require.resolve('../src')}?limit=10000`,
          },
        },
      ],
    };

    const stats = await webpack('fixture.js', config);
    const { modules, errors, warnings } = stats.toJson();

    expect(modules[0].source).toMatchSnapshot();
    expect(errors).toMatchSnapshot('errors');
    expect(warnings).toMatchSnapshot('warnings');
  });
});
