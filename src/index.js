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

function shouldTransform(limit, size) {
  if (typeof limit === 'boolean') {
    return limit;
  }

  if (typeof limit === 'number' || typeof limit === 'string') {
    return size <= parseInt(limit, 10);
  }

  return true;
}

export default function loader(src) {
  // Loader Options
  const options = getOptions(this) || {};

  validateOptions(schema, options, 'URL Loader');

  // No limit or within the specified limit
  if (shouldTransform(options.limit, src.length)) {
    const file = this.resourcePath;
    // Get MIME type
    const mimetype = options.mimetype || mime.getType(file);

    if (typeof src === 'string') {
      src = Buffer.from(src);
    }

    return `module.exports = ${JSON.stringify(
      `data:${mimetype || ''};base64,${src.toString('base64')}`
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

// Loader Mode
export const raw = true;
