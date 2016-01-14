'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:AllCtrl
 * @description
 * # AllCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('AllCtrl', function ($scope) {

    $scope.antennas = [
		{radio:'GSM', mcc: 123, net:123, cell: 123, unit: 123, position:[-34.5033,-58.4817], range:123, samples:123, changeable:1, created:1234, updated:1234, averagesignal:123},
		{radio:'GSM', mcc: 123, net:123, cell: 123, unit: 123, position:[-34.6033,-58.3817], range:123, samples:123, changeable:1, created:1234, updated:1234, averagesignal:123}
	];
	
  });
