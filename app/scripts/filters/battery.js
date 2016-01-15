'use strict';

/**
 * @ngdoc filter
 * @name demoApp.filter:battery
 * @function
 * @description
 * # battery
 * Filter in the demoApp.
 */
angular.module('demoApp')
  .filter('bateria', function () {
    return function (input) {
		var bat = '';
		if(input == 1) {
			bat = 'Changeable';
		} else {
			bat = 'No available';
		}
		return bar;
    };
  });
