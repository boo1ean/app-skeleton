var controller = require('../framework/controller');

var index = controller(require('./controllers/index'));
var users = controller(require('./controllers/users'));
var auth = controller(require('./controllers/auth'));

module.exports = function () {
	this.post('/register', auth.register);
	this.get('/api/users', users.query);
	this.all('*', index.index);
};
