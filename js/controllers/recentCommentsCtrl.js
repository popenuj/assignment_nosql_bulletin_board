RedditClone.controller('RecentCommentsCtrl',
  ['$scope', '_', '$http', 'commentsService',
    function($scope, _, $http, commentsService) {

      commentsService.getComments().then(function(comments) {
        $scope.recentComments = comments;
      });

    }
  ]
);
