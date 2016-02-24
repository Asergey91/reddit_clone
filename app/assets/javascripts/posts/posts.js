Myapp
.factory('posts', ['$http', function($http){
  var o = {
    posts: [],
    post: {}
  };
  o.getAll = function() {
    return $http.get('/posts.json').success(function(data){
      angular.copy(data, o.posts);
    });
  };
  o.create = function(post) {
    return $http.post('/posts.json', post).success(function(data){
      o.posts.push(data);
    });
  };
  o.upvote = function(post) {
    return $http.put('/posts/' + post.id + '/upvote.json')
      .success(function(data){
        post.upvotes ++;
      });
  };
  o.get = function(id) {
    return $http.get('/posts/' + id + '.json').success(function(data){
      angular.copy(data, o.post);
    });
  };
  o.addComment = function(id, comment) {
    return $http.post('/posts/' + id + '/comments.json', comment).success(function(data){
        o.post.comments.push(data);
    });
  };
  o.upvoteComment = function(post, comment) {
    return $http.put('/posts/' + post.id + '/comments/'+ comment.id + '/upvote.json')
      .success(function(data){
        comment.upvotes += 1;
    });
  };
  return o;
}]);