angular.module('app').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider.
		when('/', { templateUrl: 'posts/posts-list.html', controller: 'PostsListCtrl', reloadOnSearch: false }).
		when('/r', { templateUrl: 'users/signup.html', controller: 'UsersSignupCtrl', reloadOnSearch: false }).
		otherwise({ redirectTo: '/' });

		$locationProvider.html5Mode(true);
}]);
