[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]
[![tests][tests]][tests-url]
[![coverage][cover]][cover-url]
[![chat][chat]][chat-url]

<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200"
      src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
  <h1>Url Loader</h1>
</div>

<h2 align="center">Install</h2>

```bash
npm install --save-dev url-loader
```

<h2 align="center">Usage</h2>

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

The `url` loader works like the `file` loader, but can return a Data Url if the file is smaller than a byte limit.

The limit can be specified with a query parameter. (Defaults to no limit)

If the file is greater than the limit (in bytes) the [`file-loader`](https://github.com/webpack/file-loader) is used and all query parameters are passed to it.

``` javascript
require("url-loader?limit=10000!./file.png");
// => DataUrl if "file.png" is smaller than 10kb

require("url-loader?mimetype=image/png!./file.png");
// => Specify mimetype for the file (Otherwise it's inferred from extension.)

require("url-loader?prefix=img/!./file.png");
// => Parameters for the file-loader are valid too
//    They are passed to the file-loader if used.
```

<h2 align="center">Contributing</h2>

Don't hesitate to create a pull request. Every contribution is appreciated. In development you can start the tests by calling `npm test`.

<h2 align="center">Maintainers</h2>

<table>
  <tbody>
    <tr>
      <td align="center">
        <img width="150 height="150"
        src="https://avatars.githubusercontent.com/sokra?v=3">
        <br />
        <a href="https://github.com/">Tobias Koppers</a>
      </td>
      <td align="center">
        <img width="150 height="150"
        src="https://avatars.githubusercontent.com/SpaceK33z?v=3">
        <br />
        <a href="https://github.com/">Kees Kluskens</a>
      </td>
    <tr>
  <tbody>
</table>


<h2 align="center">LICENSE</h2>

MIT

[npm]: https://img.shields.io/npm/v/url-loader.svg
[npm-url]: https://npmjs.com/package/url-loader

[node]: https://img.shields.io/node/v/url-loader.svg
[node-url]: https://nodejs.org

[deps]: https://david-dm.org/webpack/url-loader.svg
[deps-url]: https://david-dm.org/webpack/url-loader

[tests]: http://img.shields.io/travis/webpack/url-loader.svg
[tests-url]: https://travis-ci.org/webpack/url-loader

[cover]: https://coveralls.io/repos/github/webpack/url-loader/badge.svg
[cover-url]: https://coveralls.io/github/webpack/url-loader

[chat]: https://badges.gitter.im/webpack/webpack.svg
[chat-url]: https://gitter.im/webpack/webpack
