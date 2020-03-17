import path from 'path';

import { getOptions } from 'loader-utils';
import validateOptions from 'schema-utils';
import mime from 'mime-types';

import normalizeFallback from './utils/normalizeFallback';
import schema from './options.json';

function shouldTransform(limit, size) {
  if (typeof limit === 'boolean') {
    return limit;
  }

  if (typeof limit === 'string') {
    return size <= parseInt(limit, 10);
  }

  if (typeof limit === 'number') {
    return size <= limit;
  }

  return true;
}

export default function loader(src) {
  // Loader Options
  const options = getOptions(this) || {};

  validateOptions(schema, options, {
    name: 'URL Loader',
    baseDataPath: 'options',
  });

  // No limit or within the specified limit
  if (shouldTransform(options.limit, src.length)) {
    const file = this.resourcePath;
    const mimetype = options.mimetype || mime.contentType(path.extname(file));

    if (typeof src === 'string') {
      // eslint-disable-next-line no-param-reassign
      src = Buffer.from(src);
    }

    const esModule =
      typeof options.esModule !== 'undefined' ? options.esModule : true;

    return `${
      esModule ? 'export default' : 'module.exports ='
    } ${JSON.stringify(
      `data:${mimetype || ''};base64,${src.toString('base64')}`
    )}`;
  }

  // Normalize the fallback.
  const {
    loader: fallbackLoader,
    options: fallbackOptions,
  } = normalizeFallback(options.fallback, options);

  // Require the fallback.
  // eslint-disable-next-line global-require, import/no-dynamic-require
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
