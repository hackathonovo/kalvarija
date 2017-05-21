var baseUrl = "http://hgss.ivanmedic.com";

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
    $http.get(baseUrl + '/api/user/all').then(function(res){
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
  $http.get(baseUrl + '/api/user/id/' + $stateParams.id).then(function(res){
    $scope.user = res.data;
  });
})

.controller('NewActionCtrl', function($scope, $state, $http, userService, variablesService) {
    $scope.getParticipants = function(group){
        $http.get(baseUrl + '/api/user', { params: { group : group, station: $scope.action.station } }).then(function(res){
            $scope.participants = res.data;
        })
    }

    $scope.action = {}
    $scope.action.station = userService.getProperty("station");
    $scope.getParticipants($scope.action.station);

    $scope.stations = variablesService.getStations();
    $scope.actions = variablesService.getActionTypes();
    $scope.groups = ["Alpinist", "Gusar"]

    $scope.newAction = function(){
        $http.post(baseUrl + '/api/action/new', $scope.action ).then(function(res){
            $state.go('view-action', {id: res.data._id})
        })
    }
})

.controller('viewActionCtrl', function($scope, $state, $stateParams, $http, userService, variablesService) {
        
    $scope.$on('$ionicView.enter', function(e) {  
      console.log($stateParams.id);
      $http.get(baseUrl + '/api/action/id/' + $stateParams.id).then(function(res){
        console.log(res.data);
        $scope.action = res.data;
      })
  });
})
.controller('AccountCtrl', function($scope, $http, userService) {
  $http.get(baseUrl + '/api/user/availability').then(function(res){
    $scope.settings = {
      availability : res.data
    };
  });

  $scope.setAvailability = function(status){
    $http.post(baseUrl + '/api/user/availability/' + status);
  }
});
