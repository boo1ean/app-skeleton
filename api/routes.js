var adapt = require('./adapt');

var index = adapt('./controllers/index');

module.exports = function () {
	this.all('*', index.index);
};
