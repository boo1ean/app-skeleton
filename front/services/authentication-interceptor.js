angular.module('app.services').factory('authenticationInterceptor', ['$q', '$location', 'authentication', 
	function ($q, $location, authentication) {
		return {
			request: function (config) {
				config.headers = config.headers || {};

				if (authentication.isAuthenticated()) {
					config.headers.Authorization = authentication.getAuthorizationHeader();
				}

				return config;
			},

			response: function (response) {
				if (response.status === 401) {
					$location.path('/login');
				}

				return response || $q.when(response);
			}
		};
	}
]);
