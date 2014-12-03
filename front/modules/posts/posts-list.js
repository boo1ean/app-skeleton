'use strict';
angular.module('app').
	controller('PostsListCtrl', ['$scope', 'posts', 'auth', function($scope, posts, auth) {
		$scope.create = function create () {
			posts.save($scope.post).$promise.then(refresh);
		};

		$scope.exit = function exit () {
			auth.clearAuthenticationToken();
			refresh();
		};

		function refresh () {
			$scope.post = {};
			$scope.posts = posts.query();
		}

		refresh();
	}]);
