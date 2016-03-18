
var app2 = angular.module("questionApp", ["firebase"]);

app.controller("questionCtrl", function($scope, $firebaseObject) {
  var ref = new Firebase("https://blazing-inferno-5688.firebaseio.com/myObjects/0/questions");
  $scope.books = $firebaseObject(ref);
});
