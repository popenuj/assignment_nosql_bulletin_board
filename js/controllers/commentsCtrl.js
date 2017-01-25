RedditClone.controller('CommentsCtrl', ['$scope', '_', '$http', 'commentsService', function($scope, _, $http, commentsService) {
  $scope.recentComments;
  commentsService.getComments().then(function(response) {
    $scope.recentComments = response.data;
  });)
}]);
