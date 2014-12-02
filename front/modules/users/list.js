'use strict';

angular.module('app').
	controller('UsersListCtrl', ['$scope', 'users', function($scope, users) {
		$scope.users = users.query();
	}]);
