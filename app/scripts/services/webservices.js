'use strict';

/**
 * @ngdoc service
 * @name demoApp.WebServices
 * @description
 * # WebServices
 * Factory in the demoApp.
 */
angular.module('demoApp')
  .factory('WebServices', function ($resource, uAPI) {
    return $resource(uAPI);
  });
