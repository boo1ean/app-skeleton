'use strict';
angular.module('app').
	controller('PostsListCtrl', ['$scope', 'posts', function($scope, posts) {
		$scope.create = function create () {
			posts.save($scope.post).$promise.then(refresh);
		}

		function refresh () {
			$scope.post = {};
			$scope.posts = posts.query();
		}

		refresh();
	}]);
