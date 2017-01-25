RedditClone.controller('RecentCommentsCtrl',
  ['$scope', '_', '$http', 'commentsService',
    function($scope, _, $http, commentsService) {

      commentsService.getComments().then(function(comments) {
        $scope.recentComments = comments;
        for (var i = 0; i < comments.length; i++) {
          comments[i].creation_date = new Date(comments[i].creation_date);
        }
      });

    }
  ]
);
