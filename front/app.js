'use strict';

angular.module('app.services', []);
angular.module('app.resources', ['ngResource']);
angular.module('app.templates', []);

angular.module('app', ['ngRoute', 'app.services', 'app.resources', 'app.templates']).
	config(['$routeProvider', '$locationProvider', '$httpProvider',
		   function($routeProvider, $locationProvider, $httpProvider) {

		$httpProvider.interceptors.push(
			'authenticationInterceptor',
			'validationInterceptor',
			'errorInterceptor'
		);

	}])
	.run(['$rootScope', '$location', '$http', 'authentication', function($rootScope, $location, $http, authentication) {
		$rootScope.isLoggedIn = authentication.isAuthenticated();
		$rootScope.user = authentication.getUser();
	}]);
