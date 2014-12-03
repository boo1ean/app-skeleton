'use strict';

angular.module('app.services', []);
angular.module('app.resources', ['ngResource']);
angular.module('app.templates', []);

angular.module('app', ['ngRoute', 'app.services', 'app.resources', 'app.templates']).
	config(
	['$routeProvider', '$locationProvider', '$httpProvider',
	function($routeProvider, $locationProvider, $httpProvider) {
		$httpProvider.interceptors.push(
			'authInterceptor',
			'validationInterceptor',
			'errorInterceptor'
		);
	}])

	.run(
	['$rootScope', '$location', '$http', 'auth', 'config',
	function($rootScope, $location, $http, auth, config) {
		$rootScope.isLoggedIn = auth.isAuthenticated();
		$rootScope.user = auth.getUser();

		// Don't show login page for logged in users
		$rootScope.$on('$locationChangeStart', function (ev, next) {
			if (auth.isAuthenticated() && next.indexOf('/r') !== -1) {
				$location.path('/');
			}
		});
	}]);
