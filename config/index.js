process.isProduction = function() {
	return 'production' === process.NODE_ENV;
};

module.exports = require('cnfg')(__dirname);
