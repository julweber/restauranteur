var restauranteur = angular.module('restauranteur');

restauranteur.factory('restaurantService', ['$resource',
  function($resource){
    return $resource('./restaurants.json', {}, {
      all: {method:'GET', isArray:true}
    });
}]);
