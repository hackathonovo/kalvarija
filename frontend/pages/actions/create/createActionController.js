hgss.controller('createActionController', ['$scope', '$state', 'userService', 'httpService', 'variablesService', function($scope, $state, userService, httpService, variablesService) {

    $scope.hohh = {};
    $scope.action = {};

    $scope.getParticipants = function(group){
        httpService.getUsersByGroup(group, $scope.action.station).then(function(res){   
            $scope.participants = res.data;
        })
    }

    $scope.checkUser = function(uid){
        console.log(uid, $scope.action.participants);
        if(_.includes($scope.action.participants, uid)){
            _.pull($scope.action.participants, uid);
        }else{
            if($scope.action.participants){
                $scope.action.participants.push(uid);
            }
            else{
                $scope.action.participants = [uid];
            }
        }
    }

    $scope.action = {}
    $scope.action.station = userService.getProperty("station");
    $scope.getParticipants($scope.action.station);

    $scope.stations = variablesService.getStations();
    $scope.actions = variablesService.getActionTypes();
    $scope.groups = variablesService.getGroups();

    $scope.newAction = function(){
        httpService.createNewAction($scope.action).then(function(res){
            $state.go('app.action-details', {id: res.data._id})
        })
    }

}]);
