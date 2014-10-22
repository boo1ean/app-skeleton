angular.module('app').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider.
		when('/', { templateUrl: 'users/hello.html', controller: 'HelloCtrl', reloadOnSearch: false }).
		when('/login', { templateUrl: 'users/login.html', controller: 'LoginCtrl', reloadOnSearch: false }).
		otherwise({ redirectTo: '/' });

		$locationProvider.html5Mode(true);
}]);
