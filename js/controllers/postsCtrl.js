RedditClone.controller('PostsCtrl', ['$scope', '_', '$http', 'postService', function($scope, _, $http, postService) {
  postService.getPost().then(function(response) {
    $scope.post = response.data[1];
  });
}]);
