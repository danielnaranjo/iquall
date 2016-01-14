'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('MainCtrl', function ($scope, NgMap, WSS) {
	
	var antennas=WSS.query(function(){
		$scope.antennas = antennas;
	});

	$scope.center ='-34.6033,-58.3817';
	var vm = this;

	NgMap.getMap().then(function(map) {
		vm.map = map;
	});

	vm.clicked = function() {
		alert('Clicked a link inside infoWindow');
	};

	//radio,mcc,net,area,cell,unit,lon,lat,range,samples,changeable,created,updated,averageSignal
	vm.antennas = [
		{radio:'GSM', mcc: 722, net:310, area: 7125, cell: 16476, unit: '', position:[-58.37125,-34.62149], ranges:1277, samples:11, changeable:1, createdAt:1304873356, updatedAt:1252429242, averagesignal:-73}
	];
	vm.antenna = vm.antennas[0];

	vm.showDetail = function(e, antenna) {
		vm.antenna = antenna;
		vm.map.showInfoWindow('foo-iw', antenna.id);
	};

	vm.hideDetail = function() {
		vm.map.hideInfoWindow('foo-iw');
	};

  });
