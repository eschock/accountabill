angular.module('starter.controllers', ['ionic'])

.controller('HomeCtrl', function($scope, Home) {
  $scope.home = Home.all();
})

.controller('DetailsCtrl', function($scope, $stateParams, Details) {
  $scope.details = details.get($stateParams.detailsId);
})

.controller('FavoritesCtrl', function($scope) {
  $scope.settings = {
  };
});
