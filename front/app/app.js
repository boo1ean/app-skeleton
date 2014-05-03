'use strict';

angular.module('templates', []);

angular.module('enode', ['ngRoute', 'enode.services', 'templates']).
	config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$routeProvider.
			when('/', {
			templateUrl: 'index.html',
			controller: 'IndexCtrl',
			reloadOnSearch: false
		}).
			otherwise({
			redirectTo: '/'
		});

		$locationProvider.html5Mode(true);
	}]);
