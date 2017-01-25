var RedditClone = angular.module("BulletinBoard", []);

RedditClone.factory('_', ['$window', function($window) {
  return $window._;
}]);
