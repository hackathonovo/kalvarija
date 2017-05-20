hgss.controller("actionDetailsController", ["$stateParams", "$scope", "httpService", function ($stateParams, $scope, httpService) {

	var id = $stateParams.id;

    httpService.getActionById(id).then(function(res){
    	res.data.startTime = res.data.startTime.slice(11,16);
    	$scope.action = res.data;
    });
    
}]);