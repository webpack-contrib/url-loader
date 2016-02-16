/* eslint-disable
  global-require,
  no-param-reassign,
  prefer-destructuring,
  import/no-dynamic-require,
*/
import { getOptions } from 'loader-utils';
import validateOptions from 'schema-utils';
import mime from 'mime';

import normalizeFallback from './utils/normalizeFallback';
import schema from './options.json';

// Loader Mode
export const raw = true;

export default function loader(src) {
  // Loader Options
  const options = getOptions(this) || {};

  validateOptions(schema, options, 'URL Loader');

  const file = this.resourcePath;
  // Set limit for resource inlining (file size)
  let limit = options.limit;

  if (limit) {
    limit = parseInt(limit, 10);
  }
  // Get MIME type
  const mimetype = options.mimetype || mime.getType(file);

  // No limit or within the specified limit
  if (!limit || src.length < limit) {
    if (typeof src === 'string') {
      src = Buffer.from(src);
    }

    // Default to using base64 encoding unless the option was explicitly set to false.
    const base64 = !(options.base64 === false);

    const data = base64
      ? src.toString('base64')
      : escape(src.toString('binary'));

    return `module.exports = ${JSON.stringify(
      `data:${mimetype || ''}${base64 ? ';base64' : ''},${data}`
    )}`;
  }

  // Normalize the fallback.
  const {
    loader: fallbackLoader,
    options: fallbackOptions,
  } = normalizeFallback(options.fallback, options);

  // Require the fallback.
  const fallback = require(fallbackLoader);

  // Call the fallback, passing a copy of the loader context. The copy has the query replaced. This way, the fallback
  // loader receives the query which was intended for it instead of the query which was intended for url-loader.
  const fallbackLoaderContext = Object.assign({}, this, {
    query: fallbackOptions,
  });

  return fallback.call(fallbackLoaderContext, src);
}
