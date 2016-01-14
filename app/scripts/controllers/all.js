'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:AllCtrl
 * @description
 * # AllCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('AllCtrl', function ($scope, WebServices) {

	var antennas=WebServices.query(function(){
		$scope.antennas = antennas;
	});

  });
