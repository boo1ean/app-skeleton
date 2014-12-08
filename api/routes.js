var controller = require('../framework/controller');

var index = controller(require('./controllers/index'));
var users = controller(require('./controllers/users'));
var posts = controller(require('./controllers/posts'));
var auth = controller(require('./controllers/auth'));

module.exports = function configureRoutes (app) {
	app.post('/register', auth.register);

	app.get('/api/users', users.query);

	app.get('/api/posts', posts.query);
	app.post('/api/posts', posts.create);

	app.all('*', index.index);
};
