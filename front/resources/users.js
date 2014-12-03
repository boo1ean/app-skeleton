angular.module('app.resources').factory('users', ['$resource',
	function ($resource) {
		return $resource('/api/users/:id', { id: '@id' }, {
			save: { url: '/register', method: 'post' }
		});
	}
]);
