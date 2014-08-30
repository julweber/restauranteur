// app/assets/javascripts/angular/controllers/RestaurantIndexCtrl.js.coffee
var restauranteur = angular.module('restauranteur');

// restauranteur.controller('RestaurantIndexCtrl', ['$scope', '$location', '$http', 'restaurantService',
// function($scope, $location, $http, restaurantService) {
//
//   $scope.restaurants = restaurantService.all();
//
// }]);

restauranteur.controller('RestaurantShowCtrl', ['$scope', '$location', '$http', '$routeParams', '$window', 'restaurantServiceTwo',
function($scope, $location, $http, $routeParams, $window, service) {
  $scope.restaurant = null;

  var handleFetchSuccess = function(data, status) {
    $scope.restaurant = data;
  };

  $scope.backToIndex = function() {
    $window.location.href = '/#/restaurants'
  };

  service.getRestaurant($routeParams.id).success(handleFetchSuccess);
}]);
