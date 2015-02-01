angular.module('app')
	.filter('objectText', function() {
		return function(obj) {
			return obj.text;
		};
	});
