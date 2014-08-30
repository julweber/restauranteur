// app/assets/javascripts/angular/controllers/RestaurantIndexCtrl.js.coffee
var restauranteur = angular.module('restauranteur');

// restauranteur.controller('RestaurantIndexCtrl', ['$scope', '$location', '$http', 'restaurantService',
// function($scope, $location, $http, restaurantService) {
//
//   $scope.restaurants = restaurantService.all();
//
// }]);

restauranteur.controller('RestaurantIndexCtrl', ['$scope', '$location', '$http', 'restaurantServiceTwo',
function($scope, $location, $http, service) {
  $scope.restaurants = [];

  var handleFetchSuccess = function(data, status) {
    $scope.restaurants = data
    console.log($scope.restaurants)
  };

  var handleCreateSuccess = function(data, status) {
    $scope.restaurants.push(data);
  };

  $scope.addRestaurant = function(name) {
    service.addRestaurant(name).success(handleCreateSuccess);
  };

  $scope.viewRestaurant = function(id) {
    $location.url("/restaurants/"+ id);
  };

  service.getRestaurants().success(handleFetchSuccess);
}]);
