angular.module('app.services').factory('errorInterceptor', ['$rootScope', '$timeout', '$q', '$location',
	function ($rootScope, $timeout, $q, $location) {
		return {
			response: function (response) {
				if (response.status === 200) {
					$rootScope.hasError = false;
				}

				return response || $q.when(response);
			},

			responseError: function (rejection) {
				if (rejection.status === 401) {
					$rootScope.isLoggedIn = false;
					$location.path('/login');
				} else if (!(_.isObject(rejection.data) && rejection.data.errors)) {
					$rootScope.hasError = true;
					$timeout(function () {
						$rootScope.hasError = false;
					}, 3000);
				}

				return $q.reject(rejection);
			}
		};
	}
]);
