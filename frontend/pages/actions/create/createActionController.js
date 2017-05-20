hgss.controller('createActionController', ['$scope', 'userService', 'httpService', function($scope, userService, httpService) {

    $scope.getParticipants = function(station){
        httpService.getUsersByStation(station).then(function(res){
            console.log(res);
            $scope.participants = res.data;
        })
    }

    $scope.action = {}
    $scope.action.station = userService.getProperty("station");
    $scope.getParticipants($scope.action.station);

    $scope.stations = ["Šibenik", "Split", "Zadar"];
    $scope.actions = ["Potraga", "Spašavanje", "Večera"];
    $scope.participantType = ["Alpinist", "Gusar"]

    $scope.newAction = function(){
        httpService.createNewAction($scope.action).then(function(res){
            console.log("ok")
        })
    }

}]);
