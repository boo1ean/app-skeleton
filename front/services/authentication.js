angular.module('app.services').factory('authentication', ['$window', 
	function ($window) {
		var methods = {
			isAuthenticated: function () {
				return !!store.get('token');
			},

			getAuthorizationHeader: function () {
				return 'Bearer ' + store.get('token');
			},

			setAuthenticationToken: function (token, user) {
				store.set('token', token);
				store.set('user', user);
			},

			clearAuthenticationToken: function () {
				store.remove('token');
				store.remove('user');
			},

			getUser: function () {
				return store.get('user');
			}
		};

		return methods;
	}
]);
