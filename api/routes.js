var controller = require('../framework/controller');

var index = controller(require('./controllers/index'));
var users = controller(require('./controllers/users'));

module.exports = function () {
	this.get('/api/users', users.query);
	this.post('/api/users', users.create);
	this.all('*', index.index);
};
