'use strict';

angular.module('app').
	controller('LoginCtrl', function($scope, $rootScope, $location, $http, authentication) {
		$scope.user = {};

		$scope.submit = function() {
			$http.post('/authenticate', $scope.user)
			.success(function (data, status, headers, config) {
				authentication.setAuthenticationToken(data.token, data.user);
				$location.path('/');
				$rootScope.isLoggedIn = true;
			})
			.error(function (data, status, headers, config) {
				authentication.clearAuthenticationToken();
			});
		};
	});
