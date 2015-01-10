angular.module('app').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider.
		when('/', { templateUrl: 'default/index.html', controller: 'DefaultCtrl', reloadOnSearch: false }).
		otherwise({ redirectTo: '/' });

		$locationProvider.html5Mode(true);
}]);
