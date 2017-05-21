var baseUrl = "http://hgss.ivanmedic.com";

angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $state, uiGmapGoogleMapApi, $ionicPush) {
  $scope.createAction = function() {
    $state.go('new-action');
  }
    $scope.map = { 
      center: { 
        latitude: 45, 
        longitude: -73 
      }, 
      zoom: 8 
    };

    uiGmapGoogleMapApi.then(function(maps) {
      console.log(maps);
  });

    $ionicPush.register().then(function(t) {
      console.log("test");
    return $ionicPush.saveToken(t);
  }).then(function(t) {
    console.log('Token saved:', t.token);
  });

  $scope.$on('cloud:push:notification', function(event, data) {
  var msg = data.message;
  alert(msg.title + ': ' + msg.text);
});


})

.controller('ChatsCtrl', function($scope, $http) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  $scope.$on('$ionicView.enter', function(e) {  
      $http.get(baseUrl + '/api/user/all').then(function(res){
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

.controller('ChatDetailCtrl', function($scope, $stateParams, $http, Chats) {
  $http.get(baseUrl + '/api/user/id/' + $stateParams.id).then(function(res){
    $scope.user = res.data;
  });
})

.controller('NewActionCtrl', function($scope, $http) {
})

.controller('AccountCtrl', function($scope, $http, userService, $state, authService) {
  $http.get(baseUrl + '/api/user/availability').then(function(res){
    console.log(res.data);
    $scope.settings = {
      availability : res.data
    };
  });

  $scope.setAvailability = function(status){
    $http.post(baseUrl + '/api/user/availability/' + status);
  }

  $scope.logout = function() {
    authService.logout();
    $state.go('login');
  }
});
