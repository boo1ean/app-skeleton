'use strict';

angular.module('app').
	controller('UsersSignupCtrl',
   ['$scope', 'users', 'auth', '$location',
   function($scope, users, auth, $location) {

		$scope.user = {};

		$scope.signup = function signup () {
			users.save($scope.user).$promise.then(function (res) {
				auth.setAuthenticationToken(res.token, res.user);
				$location.path('/');
			});
		}
	}]);
