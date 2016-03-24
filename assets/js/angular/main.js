// Books App and Controller

var app = angular.module("bookApp", ["firebase"]);

app.controller("bookCtrl", function($scope, $firebaseObject) {
  var ref = new Firebase("https://blazing-inferno-5688.firebaseio.com/myObjects/0/books");
  $scope.books = $firebaseObject(ref);

// Button Functionality

$scope.toggleCover = function(){
  $scope.titleOnly = false;
  $scope.coverOnly = !$scope.coverOnly;
};

$scope.toggleTitle = function(){
  $scope.coverOnly = false;
  $scope.titleOnly = !$scope.titleOnly;
};

});
