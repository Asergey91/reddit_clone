Myapp
.controller('postsController', [
'$scope',
'posts',
'$stateParams',
function($scope, posts, $stateParams){
  
  $scope.post = posts.post;
  
  $scope.addComment = function(){
    if($scope.body === '') { return; }
    posts.addComment($stateParams.id, {
      body: $scope.body,
      author: 'User',
      upvotes: 0
    });
    $scope.body = '';
  };
  
  $scope.incrementUpvotes = function(post, comment){
    posts.upvoteComment(post, comment);
  };
}]);