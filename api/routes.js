var controller = require('../framework/controller');

var index = controller(require('./controllers/index'));
var users = controller(require('./controllers/users'));
var posts = controller(require('./controllers/posts'));
var auth = controller(require('./controllers/auth'));

module.exports = function () {
	this.post('/register', auth.register);

	this.get('/api/users', users.query);

	this.get('/api/posts', posts.query);
	this.post('/api/posts', posts.create);

	this.all('*', index.index);
};
