var Myapp=angular.module('testApp', ['ui.router']);
/*ROUTES/STATES/TEMPLATES*/
Myapp
.config(['$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '_home.html',
      controller: 'mainController',
      resolve: {
        postPromise: function(posts){
          return posts.getAll();
        }
      }
    })
    .state('posts', {
      url: '/posts/{id}',
      templateUrl: '_posts.html',
      controller: 'postsController',
      resolve: {
        postPromise: function($stateParams, posts) {
          return posts.get($stateParams.id);
        }
      }
    });
  $urlRouterProvider.otherwise('home');
}]);







