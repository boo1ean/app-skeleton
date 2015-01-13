angular.module('app.services').factory('progressInterceptor',
   ['$rootScope', '$timeout', '$q', '$location', 'config',
	function ($q) {
		var progressElement = $('.progress-indicator');
		var depth = 0;

		return {
			request: function onRequest (config) {
				depth++;
				progressElement.removeClass('hide');
				return config;
			},

			response: function onResponse (response) {
				if (--depth === 0) {
					progressElement.addClass('hide');
				}

				return response || $q.when(response);
			}
		};
	}
]);
