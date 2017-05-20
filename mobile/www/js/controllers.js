angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, $http) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  $scope.$on('$ionicView.enter', function(e) {
    $http.get('http://localhost:8080/api/user/all').then(function(res){
      $scope.users = res.data;
    })
  });
})

.controller('LoginCtrl', function($state, $scope, authService) {
  $scope.user = {}
  $scope.login = function(){
    authService.login($scope.user.phone).then(function(){
      $state.go("tab.dash")
    });
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
