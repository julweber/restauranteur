// app/assets/javascripts/angular/controllers/RestaurantIndexCtrl.js.coffee
var restauranteur = angular.module('restauranteur');

// restauranteur.controller('RestaurantIndexCtrl', ['$scope', '$location', '$http', 'restaurantService',
// function($scope, $location, $http, restaurantService) {
//
//   $scope.restaurants = restaurantService.all();
//
// }]);

restauranteur.controller('RestaurantIndexCtrl', ['$scope', '$location', '$http', '$window', 'restaurantServiceTwo',
function($scope, $location, $http, $window, service) {
  $scope.restaurants = [];

  var handleFetchSuccess = function(data, status) {
    $scope.restaurants = data
    console.log($scope.restaurants)
  };

  var handleCreateSuccess = function(data, status) {
    $scope.restaurants.push(data);
  };

  var handleError = function(data, status) {
    $window.alert(JSON.stringify(data));
  };

  $scope.addRestaurant = function(name) {
    service.addRestaurant(name).success(handleCreateSuccess).error(handleError);
  };

  $scope.viewRestaurant = function(id) {
    $location.url("/restaurants/"+ id);
  };

  $scope.deleteRestaurant = function(id) {
    for(var i = $scope.restaurants.length - 1; i >= 0; i--) {
      if($scope.restaurants[i].id === id) {
       $scope.restaurants.splice(i, 1);
     }
    }
    service.deleteRestaurant(id);
  }

  service.getRestaurants().success(handleFetchSuccess).error(handleError);
}]);
