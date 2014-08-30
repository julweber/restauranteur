var restauranteur = angular.module('restauranteur');

restauranteur.factory('restaurantServiceTwo', [ '$http', '$q', function($http, $q) {
    var restaurantServiceTwo = {};

    restaurantServiceTwo.getRestaurants = function() {
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

    restaurantServiceTwo.getRestaurant = function(id) {
      var request = $http({
        method: "get",
        url: "./restaurants/" + id  + ".json"
      });
      return request;
      //return( request.then(restaurantServiceTwo.handleSuccess) );
    }


    restaurantServiceTwo.addRestaurant = function(name) {
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

    return restaurantServiceTwo;
}]);
