process.isProduction = function() {
	return 'production' === process.env.NODE_ENV;
};

module.exports = require('cnfg')(__dirname);
module.exports.env = process.env.NODE_ENV || 'development';
