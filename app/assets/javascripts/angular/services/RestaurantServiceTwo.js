var restauranteur = angular.module('restauranteur');

restauranteur.factory('restaurantServiceTwo', [ '$http', '$q', function($http, $q) {
    var service = {};

    service.getRestaurants = function() {
      var request = $http({
        method: "get",
        url: "./restaurants.json"
      });
      return request;
      // return( request.then(restaurantServiceTwo.handleSuccess) );
      // $http.get('./restaurants.json').success(function(data) {
      //   restaurantServiceTwo.restaurants = data
      // });
    }

    service.getRestaurant = function(id) {
      var request = $http({
        method: "get",
        url: "./restaurants/" + id  + ".json"
      });
      return request;
      //return( request.then(restaurantServiceTwo.handleSuccess) );
    }


    service.addRestaurant = function(name) {
      var request = $http({
        method: "post",
        url: "./restaurants.json",
        data: {
          name: name
        }
      });
      return request;
      //return( request.then(restaurantServiceTwo.handleSuccess) );
    }

    service.deleteRestaurant = function(id) {
      var request = $http({
        method: "delete",
        url: "./restaurants/" + id + ".json"
      });
      return request;
    }

    return service;
}]);
