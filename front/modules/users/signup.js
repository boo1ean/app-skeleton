'use strict';

angular.module('app').
	controller('UsersSignupCtrl', ['$scope', 'users', function($scope, users) {
		$scope.user = {};

		$scope.signup = function signup () {
			users.save($scope.user);
		}
	}]);
