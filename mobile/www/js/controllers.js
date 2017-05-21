angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $state, uiGmapGoogleMapApi) {
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
})

.controller('ChatsCtrl', function($scope, $http) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
    $http.get('http://localhost:8080/api/user/all').then(function(res){
      $scope.users = res.data;
    })
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
  $http.get('http://localhost:8080/api/user/id/' + $stateParams.id).then(function(res){
    $scope.user = res.data;
  });
})

.controller('NewActionCtrl', function($scope, $http) {
});

.controller('AccountCtrl', function($scope, $http, userService) {
  $http.get('http://localhost:8080/api/user/availability').then(function(res){
    console.log(res.data);
    $scope.settings = {
      availability : res.data
    };
  });

  $scope.setAvailability = function(status){
    $http.post('http://localhost:8080/api/user/availability/' + status);
  }
});
