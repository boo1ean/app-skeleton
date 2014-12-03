angular.module('app.resources').factory('posts', ['$resource',
	function ($resource) {
		return $resource('/api/posts/:id', { id: '@id' });
	}
]);
