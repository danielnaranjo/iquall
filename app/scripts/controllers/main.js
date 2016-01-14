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
		//console.log('map', map);
		vm.map = map;
	});

	vm.clicked = function() {
		alert('Clicked a link inside infoWindow');
	};

	//radio,mcc,net,area,cell,unit,lon,lat,range,samples,changeable,created,updated,averageSignal
	vm.antennas = [
		{radio:'GSM', mcc: 123, net:123, cell: 123, unit: 123, position:[-34.5033,-58.4817], range:123, samples:123, changeable:1, created:1234, updated:1234, averagesignal:123},
		{radio:'GSM', mcc: 123, net:123, cell: 123, unit: 123, position:[-34.6033,-58.3817], range:123, samples:123, changeable:1, created:1234, updated:1234, averagesignal:123}
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
