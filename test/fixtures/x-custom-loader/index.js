const utils = require('loader-utils');

module.exports = function loader() {
  const options = utils.getOptions(this);

  return `module.exports=${JSON.stringify(options)}`;
};
