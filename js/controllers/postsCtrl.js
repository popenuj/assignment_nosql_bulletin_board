RedditClone.controller('PostsCtrl', ['$scope', '_', '$http', 'postService', 'commentsService', function($scope, _, $http, postService, commentsService) {

  postService.getPost().then(function(response) {
    $scope.post = response;
  });

  commentsService.getComments().then(function(comments) {
    $scope.comments = comments;
  });

  $scope.commentSubmit = function(newComment) {
    $scope.post.addComment(newComment);
    $scope.newComment = {};
  }

}]);
