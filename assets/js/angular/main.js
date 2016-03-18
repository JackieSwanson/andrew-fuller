// Books App and Controller

var app = angular.module("bookApp", ["firebase"]);

app.controller("SampleCtrl", function($scope, $firebaseObject) {
  var ref = new Firebase("https://blazing-inferno-5688.firebaseio.com/myObjects/0/books");
  $scope.books = $firebaseObject(ref);
});

var chosen = function(){ $button.toggleClass("chosen"); }
	
