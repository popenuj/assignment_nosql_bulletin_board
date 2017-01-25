RedditClone.factory('postService', ['$http', function($http) {
  var _post;
  var getPost = function() {
    return $http.get('/js/data/posts.json').then(function(response) {
      console.log(response);
      return _post = response;
    });
  };
  return {
    getPost: getPost
  };
}]);
