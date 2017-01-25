RedditClone.controller('PostsCtrl', ['$scope', '_', '$http', 'postService', 'commentsService', function($scope, _, $http, postService, commentsService) {

  postService.getPost().then(function(response) {
    $scope.post = response.data[1];
  });

  commentsService.getComments().then(function(comments) {
    $scope.comments = comments;
  });

  $scope.commentSubmit = function commentSubmit(newComment) {
    commentsService.addComment(newComment);
  };

}]);
