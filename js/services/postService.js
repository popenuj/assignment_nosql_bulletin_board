RedditClone.factory('postService', ['$http', 'commentsService', function($http, commentsService) {
  var _post;
  var getPost = function() {
    return $http.get('/js/data/posts.json').then(function(response) {
      _post = response.data[1];
      _extend(_post);
      return _post;
    });
  };

  var _extend = function(_post) {
    _post.addComment = commentsService.addComment;
  }

  return {
    getPost: getPost
  };
}]);
