hgss.controller("createGroupController", ["$scope", "$state", "httpService", function ($scope, $state, httpService) {

	$scope.save = function()
	{
		httpService.addNewGroup($scope.group).then(function(res) {
			console.log(res.data);
			$state.go("app.groups")
		});
	}

	$scope.back = function()
	{
		$state.go("app.groups");
	}
}]);