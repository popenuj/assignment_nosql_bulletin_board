RedditClone.controller('RecentCommentsCtrl',
  ['$scope', '_', '$http', 'commentsService',
    function($scope, _, $http, commentsService) {

      commentsService.getComments().then(function(response) {
        $scope.recentComments = $scope.arrayOfComments(response.data);
      });

      $scope.arrayOfComments = function(obj) {
        return Object.keys(obj).map(function(key) {
          return obj[key];
        });
      };

    }
  ]
);
