RedditClone.factory('commentsService', ['$http', function($http) {
  var _comments;
  var _id = 0;
  var getComments = function() {
    return $http.get('/js/data/comments.json').then(function(response) {
      var comments = arrayOfComments(response.data);
      _id = comments.length;
      return _comments = comments;
    });
  };

  var arrayOfComments = function(obj) {
    return Object.keys(obj).map(function(key) {
      return obj[key];
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
