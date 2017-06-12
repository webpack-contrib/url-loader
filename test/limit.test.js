/* eslint-disable */
import webpack from './webpack';

test.skip('Limit', () => {
  const config = { loader: { limit: 30000 } }

  webpack('limit.js', config)
    .then((result) => {
      console.log(result.map);
      console.log(result.err);
      console.log(result.src);
    })
    .catch((err) => console.log(err));
});
