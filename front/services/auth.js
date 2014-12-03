angular.module('app.services').factory('auth',
	['$window', '$rootScope',
	function ($window, $rootScope) {
		var auth = {
			isAuthenticated: function () {
				return !!store.get('token');
			},

			getAuthorizationHeader: function () {
				return 'Bearer ' + store.get('token');
			},

			setAuthenticationToken: function (token, user) {
				store.set('token', token);
				store.set('user', user);
				auth.injectIntoScope();
			},

			clearAuthenticationToken: function () {
				store.remove('token');
				store.remove('user');
				auth.injectIntoScope();
			},

			getUser: function () {
				return store.get('user');
			},

			injectIntoScope: function () {
				$rootScope.isLoggedIn = auth.isAuthenticated();
				$rootScope.user = auth.getUser();
			}
		};

		return auth;
	}
]);
