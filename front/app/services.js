'use strict';

angular.module('enode.services', []).
	factory('storage', function () {
		return localStorage;
	});
