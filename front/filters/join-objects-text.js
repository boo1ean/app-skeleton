angular.module('app')
	.filter('joinObjectsText', function() {
		return function(arr) {
			return _.pluck(arr, 'text').join(', ');
		};
	});
