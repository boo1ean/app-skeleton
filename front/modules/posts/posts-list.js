'use strict';
angular.module('app').
	controller('PostsListCtrl', ['$scope', 'posts', function($scope, posts) {
		$scope.create = function create () {
			posts.save($scope.post);
			refreshPosts();
		}

		function refreshPosts () {
			$scope.posts = posts.query();
		}

		refreshPosts();
	}]);
