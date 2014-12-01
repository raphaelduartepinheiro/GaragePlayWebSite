var app = angular.module('GaragePlay', ['ngResource', 'angulartics', 'angulartics.google.analytics']);

app.config(['$httpProvider', function ($httpProvider) {
  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};
}]);

app.factory('User', ['$resource', function($resource){
  return $resource('http://garageplay.net\\:3000/users.json'); 
}]);

app.controller('RegisterController', function($scope, $resource, $analytics, User){
  $scope.register = function(){
    var userResource = new User();
    userResource.$save($scope.user);
    $scope.user.registered = true;
    $analytics.eventTrack("User registered", {  category: 'User registered', label: 'User registered' });
  };
});