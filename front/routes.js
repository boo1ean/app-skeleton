angular.module('app').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider.
		when('/', { templateUrl: 'users/list.html', controller: 'UsersListCtrl', reloadOnSearch: false }).
		otherwise({ redirectTo: '/' });

		$locationProvider.html5Mode(true);
}]);
