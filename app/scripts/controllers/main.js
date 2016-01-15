'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('MainCtrl', function ($scope, NgMap, $http, $location, locationService) {

	$scope.getData =  function() {
		$http({
			method: 'GET',
			url: 'http://localhost:8890/iquall/api/antennas'
		})
		.success(function(data){
			$scope.antennas=data;
		})
		.error(function(){
			alert('Error API');
		});
	};

	$scope.center = '-34.6033,-58.3817';

	NgMap.getMap().then(function(map) {
		$scope.map = map;
	});
	
	$scope.antenna = $scope.antennas;

	$scope.showDetail = function(e, antenna) {
		$scope.antenna = antenna;
		$scope.map.showInfoWindow('foo-iw', antenna.id);
		console.log($scope.antenna);

		locationService.getLocation($scope.antenna.lat+','+$scope.antenna.lon)
		.then(function(location){
			var itemLocation = 
			location.results[0].address_components[1].long_name+', ' +
			location.results[0].address_components[2].short_name+', ' +
			location.results[0].address_components[5].short_name;
			$scope.address = itemLocation;
			console.log('Ubicacion: ', itemLocation);
			console.log('Full: ', location.results[0]);
		},
		function(error){
			console.log('Error: Cant connect with Google Maps API')
		});
	};

	$scope.hideDetail = function() {
		$scope.map.hideInfoWindow('foo-iw');
	};

	$scope.searchable = function() {
		$location.path('/all')
	}


  });
