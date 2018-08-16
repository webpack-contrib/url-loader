/* eslint-disable
  prefer-destructuring,
*/
import normalizeFallback from '../../src/utils/normalizeFallback';

describe('normalizeFallback', () => {
  test('undefined', () => {
    // eslint-disable-next-line no-undefined
    const result = normalizeFallback(undefined, {
      limit: 8192,
      name: 'name-for-url-loader.[ext]',
    });

    expect(result).toMatchSnapshot();
  });

  test('string', () => {
    const result = normalizeFallback('file-loader', {
      limit: 8192,
      name: 'name-for-url-loader.[ext]',
    });

    expect(result).toMatchSnapshot();
  });

  test('string-with-query', () => {
    const result = normalizeFallback(
      'file-loader?name=name-for-file-loader.[ext]',
      { limit: 8192, name: 'name-for-url-loader.[ext]' }
    );

    expect(result).toMatchSnapshot();
  });

  test('object', () => {
    const result = normalizeFallback(
      { loader: 'file-loader' },
      { limit: 8192, name: 'name-for-url-loader.[ext]' }
    );

    expect(result).toMatchSnapshot();
  });

  test('object-with-options', () => {
    const result = normalizeFallback(
      {
        loader: 'file-loader',
        options: { name: 'name-for-file-loader.[ext]' },
      },
      { limit: 8192, name: 'name-for-url-loader.[ext]' }
    );

    expect(result).toMatchSnapshot();
  });
});
