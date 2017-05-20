hgss.controller('createActionController', ['$scope', '$state', 'userService', 'httpService', 'variablesService', function($scope, $state, userService, httpService, variablesService) {

    $scope.getParticipants = function(group){
        httpService.getUsersByGroup(group, $scope.action.station).then(function(res){
            
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
        httpService.createNewAction($scope.action).then(function(res){
            $state.go('app.action-details', {id: res.data._id})
        })
    }

}]);
