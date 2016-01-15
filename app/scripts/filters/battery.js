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
		if(input==1) {
			return 'Changeable';
		} else {
			return 'No available';
		}
    };
  });
