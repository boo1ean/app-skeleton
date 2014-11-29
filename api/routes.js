var controller = require('../framework/controller');

var index = controller(require('./controllers/index'));

module.exports = function () {
	this.all('*', index.index);
};
