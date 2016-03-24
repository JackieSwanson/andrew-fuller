/*var app = angular.module("blogApp", []);

app.controller("blogCtrl", ["$scope", "$http",
  function blog($scope, $http) {
    $http.get('https://www.googleapis.com/blogger/v3/blogs/2644023499243787092/posts?key=AIzaSyBnbusiMRW9Mda6mr2vJcGuR4G580WcVrQ').
    success(function(data) {
      $scope.blogData = data;
    });
  }
]);*/

$(document).ready(function(){

$.ajax({
url: "https://www.googleapis.com/blogger/v3/blogs/2644023499243787092/posts?key=AIzaSyBnbusiMRW9Mda6mr2vJcGuR4G580WcVrQ",
success: function(data){
 $.each(data.items, function(index, element) {
  //  $(".content p").html(element.content);
    $('<h2 />', {html: element.title}).addClass("blogTitle").appendTo(".content");
    $('<p />', { html: element.content }).addClass("blogPost").appendTo(".content");
 });
  //$(".content p").html(data.items[0].content);
}
})
});
