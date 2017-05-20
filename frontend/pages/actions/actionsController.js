hgss.controller("actionsController", ["$scope", "$state", "httpService", function ($scope, $state, httpService) {
    $scope.createAction = function() {
        $state.go('app.add-action');
    }

    httpService.getAllActions().then(function(res){
    	$scope.actions = res.data;
    });
}]);