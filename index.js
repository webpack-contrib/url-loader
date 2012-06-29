/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(minetype, postfix, prefix) {
	var fileLoader = require("file-loader")(postfix, prefix);
	return function(content) {
		this.cacheable && this.cacheable();
		var limit = (this.options && this.options.url && this.options.url.dataUrlLimit) || 0;
		var buf;
		if(this.buffers) buf = this.buffers[0];
		else buf = new Buffer(content, "utf-8");
		if(buf.length < limit) {
			return "module.exports = " + JSON.stringify("data:" + (minetype ? minetype + ";" : "") + "base64," + buf.toString("base64"));
		} else {
			return fileLoader.call(this, content);
		}
	}
}