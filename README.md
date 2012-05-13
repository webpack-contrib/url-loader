# url loader for webpack

## Usage

The `url` loader works like the `file` loader, but can return a Data Url if it 
is supported by browser and the file is smaller than a limit.

The limit defaults to 1kb and can be overwritten in options.

`options.url.dataUrlLimit = 1024` 1kb limit.

## License

MIT (http://www.opensource.org/licenses/mit-license.php)