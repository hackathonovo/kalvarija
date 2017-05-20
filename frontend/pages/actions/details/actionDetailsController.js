hgss.controller("actionDetailsController", ["$stateParams", "$scope", "httpService", function ($stateParams, $scope, httpService) {

	var id = $stateParams.id;

    httpService.getActionById(id).then(function(res){
    	$scope.action = res.data;
    });
    
}]);