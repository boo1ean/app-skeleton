angular.module('app.services').factory('authInterceptor',
   ['$q', '$location', 'auth', 'config',
	function ($q, $location, auth, config) {
		return {
			request: function (config) {
				config.headers = config.headers || {};

				if (auth.isAuthenticated()) {
					config.headers.Authorization = auth.getAuthorizationHeader();
				}

				return config;
			},

			response: function (response) {
				if (response.status === 401) {
					$location.path(config.loginPath);
				}

				return response || $q.when(response);
			}
		};
	}
]);
