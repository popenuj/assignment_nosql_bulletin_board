RedditClone.factory('commentsService', ['$http', function($http) {
  var _comments;
  var getComments = function() {
    return $http.get('/js/data/comments.json').then(function(response) {
      return _comments = response;
    });
  };
  return {
    getComments: getComments
  };
}]);
