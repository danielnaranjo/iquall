'use strict';

/**
 * @ngdoc service
 * @name demoApp.WebServices
 * @description
 * # WebServices
 * Factory in the demoApp.
 */
angular.module('demoApp')
  .factory('WebServices', function ($resource) {
    return $resource('http://localhost:8890/iquall/api/antennas');
  })
  .factory('WSS', function ($resource) {
    return $resource('http://localhost:8890/iquall/api/antennas');
  });
