angular.module('app').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider.
		when('/', { templateUrl: 'users/list.html', controller: 'UsersListCtrl', reloadOnSearch: false }).
		when('/r', { templateUrl: 'users/signup.html', controller: 'UsersSignupCtrl', reloadOnSearch: false }).
		otherwise({ redirectTo: '/' });

		$locationProvider.html5Mode(true);
}]);
