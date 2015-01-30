angular.module('app')
	.directive('autocomplete', ['$injector', function($injector) {
		return {
			restrict: 'E',

			templateUrl: 'autocomplete/autocomplete.html',

			scope: {
				placeholder: '@',
				selectedItem: '='
			},

			link: function($scope, $el, $attrs) {
				if (!$attrs.resource) {
					throw new Error('Resource attr is required');
				}

				var resource = $injector.get($attrs.resource);

				if (!resource.lookup) {
					throw new Error('Resource ' + $attrs.resource + ' is not lookupable');
				}

				$scope.refresh = function refreshAutocompleteCollection (query) {
					$scope.items = resource.lookup({ query: query });
				};

				$scope.onSelect = function onSelect ($item, $model) {
					$scope.selectedItem = $item;
				}
			}
		};
	}]);
