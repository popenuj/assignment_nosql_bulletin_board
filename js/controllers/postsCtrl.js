RedditClone.controller('PostsCtrl', ['$scope', '_', '$http', 'postService', 'commentsService', function($scope, _, $http, postService, commentsService) {

  postService.getPost().then(function(response) {
    $scope.post = response.data[1];
  });

  commentsService.getComments().then(function(response) {
    $scope.comments = $scope.arrayOfComments(response.data);
    console.log($scope.comments)
  });

  $scope.arrayOfComments = function(obj) {
    return Object.keys(obj).map(function(key) {
      return obj[key];
    });
  };


}]);
