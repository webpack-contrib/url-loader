import webpack from './helpers/compiler';

describe('Loader', () => {
  it('should works', async () => {
    const config = {
      loader: {
        test: /\.svg$/,
        options: {},
      },
    };

    const stats = await webpack('fixture-svg.js', config);
    const [{ source }] = stats.toJson().modules;

    expect(source).toMatchSnapshot();
  });
});
