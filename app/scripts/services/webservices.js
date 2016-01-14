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
    return $resource('http://localhost:1337/antennas');
  })
  .factory('WSS', function ($resource) {
    return $resource('http://localhost:1337/antennas?limit=30');
  });
