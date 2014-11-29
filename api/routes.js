var controller = require('../core/framework/controller');

var index = controller('./controllers/index');

module.exports = function () {
	this.all('*', index.index);
};
