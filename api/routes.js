var controller = require('app-controller');
var log = require('../core/framework/log');

// Set app-specific logger
controller.setLogger(log);

var index = controller('./controllers/index');

module.exports = function () {
	this.all('*', index.index);
};
