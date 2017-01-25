RedditClone.factory('commentsService', ['$http', function($http) {
  var _comments;
  var _id = 0;
  var getComments = function() {
    return $http.get('/js/data/comments.json')
      .then(function(response) {
        if (_comments) return _comments;
        _comments = response.data;
        _id = _comments.length;
        return _comments;
      });
  };

  var addComment = function(comment) {
    var newComment = {
      parent_id: 1,
      author: comment.author,
      creation_date: new Date,
      text: comment.text,
      votes: 0,
      id: _id,
    };
    _id += 1;
    _comments.push(newComment);
  };

  return {
    getComments: getComments,
    addComment: addComment,
  };
}]);
