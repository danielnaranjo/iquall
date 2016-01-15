'use strict';

/**
 * @ngdoc service
 * @name demoApp.locationService
 * @description
 * # locationService
 * Factory in the demoApp.
 */
angular.module('demoApp')
  .factory('locationService', function ($http) {
     var locations = [];
     var latlng = "";
     
     return {
       getLocation: function(latlng){
       return $http({
          url: "http://maps.googleapis.com/maps/api/geocode/json?latlng="+latlng+"&sensor=true",
          method: "GET",
          }).then(function(response){
              locations = response.data;
              return locations;
            }, function(error){
              console.log('Error: Cant connect with Google Maps API');
            });
      }
    };
  });
