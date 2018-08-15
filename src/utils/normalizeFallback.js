function normalizeFallbackString(fallbackString, originalOptions) {
  const index = fallbackString.indexOf('?');
  if (index >= 0) {
    return {
      loader: fallbackString.substr(0, index),
      query: fallbackString.substr(index),
    };
  }

  // To remain consistent with version 1.0.1, pass any other options which were provided to url-loader to the fallback loader.
  const { fallback, limit, mimetype, ...otherOptions } = originalOptions;

  return {
    loader: fallbackString,
    query: otherOptions,
  };
}

function normalizeFallbackObject(fallbackObject) {
  return {
    loader: fallbackObject.loader,
    query: fallbackObject.options,
  };
}

/**
 * Converts the fallback option, which can be a string or an object, to an object with a loader and a query. The result
 * has this form:
 *   {
 *     loader: 'file-loader',
 *     query: '?name=[name].[ext]'
 *   }
 * Note that the returned query can be either a string or an object.
 */
export default function normalizeFallback(fallback, originalOptions) {
  // If no fallback was provided, use file-loader.
  if (!fallback) {
    return normalizeFallbackString('file-loader', originalOptions);
  }

  if (typeof fallback === 'string') {
    return normalizeFallbackString(fallback, originalOptions);
  }

  return normalizeFallbackObject(fallback);
}
