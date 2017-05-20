hgss.controller("actionsController", ["$scope", "$state", "httpService", function ($scope, $state, httpService) {
    $scope.createAction = function() {
        $state.go('app.add-action');
    }

    httpService.getAllActions().then(function(res){
    	_.each(res.data, function(action){
    		action.startTime = action.startTime.slice(11,16)
    	})
    	$scope.actions = res.data;
    });

    $scope.isCardView;

    $scope.setCardView = function(value) {
        $scope.isCardView = value;
    }
}]);