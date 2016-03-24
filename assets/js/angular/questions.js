
var app = angular.module("questionsApp", ["firebase"]);

app.factory("questionsFac", ["$firebaseArray", function($firebaseArray, $scope) {
  //var randomRoomId = Math.round(Math.random() * 100000000);
  var ref = new Firebase("https://blazing-inferno-5688.firebaseio.com/myObjects/1/questions");
  return $firebaseArray(ref);
}
]);


app.controller("questionsCtrl", ["$scope", "questionsFac",
  function($scope, questionsFac) {

    $scope.questions = questionsFac;

    $scope.fullName = "";
    $scope.email = "";
    $scope.question = "";


$scope.addQuestion = function() {
    $scope.questions.$add({
        name: $scope.fullName,
        email: $scope.email,
        question: $scope.question,
        answer: "No Answer Yet"
        });
     };

$scope.inputClear = function() {
  $('.ask-form')[0].reset();
};

  }
]);
