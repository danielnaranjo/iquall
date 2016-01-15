'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:AllCtrl
 * @description
 * # AllCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('AllCtrl', function ($scope, $http, $location, uAPI) {

	$scope.page=1;
	$scope.limit=100;
	$scope.order="cID";
	$scope.sort="DESC";

	// http://loultimoenlaweb.com/iquall/api/antennas?p=2&l=100&o=net
	var params = $location.search();
	//console.log('page='+params.page+'&limit='+params.limit+'&order='+params.order+'&sort='+params.sort);

	if(params.order!=='') {
		// $scope.order = 'cID';
	// } else {
		$scope.order = params.order;
	}
	
	if(params.sort!=='') {
		// $scope.sort = 'DESC';
	// } else {
		$scope.sort = params.sort;
	}
	
	if(params.page!=='') {
		// $scope.page = 1;
	// } else {
		$scope.page = params.page;
	}

	if(params.limit!=='') {
		// $scope.limit = 100;
	// } else {
		$scope.limit = params.limit * $scope.page;
	}

	// console.log('page='+$scope.page+'&limit='+$scope.limit+'&order='+$scope.order+'&sort='+$scope.sort);

	$scope.getList =  function() {
		$http({
			method: 'GET',
			url: uAPI+'?&l=1000'
		})
		.success(function(data){
			$scope.antennas=data;
		})
		.error(function(){
			alert('Error API');
		});
	};

  });
