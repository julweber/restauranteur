// app/assets/javascripts/angular/controllers/RestaurantIndexCtrl.js.coffee
var restauranteur = angular.module('restauranteur');

// restauranteur.controller('RestaurantIndexCtrl', ['$scope', '$location', '$http', 'restaurantService',
// function($scope, $location, $http, restaurantService) {
//
//   $scope.restaurants = restaurantService.all();
//
// }]);

restauranteur.controller('RestaurantShowCtrl', ['$scope', '$location', '$http', '$routeParams', 'restaurantServiceTwo',
function($scope, $location, $http, $routeParams, service) {
  $scope.restaurant = null;

  var handleFetchSuccess = function(data, status) {
    $scope.restaurant = data;
  };

  service.getRestaurant($routeParams.id).success(handleFetchSuccess);
}]);
