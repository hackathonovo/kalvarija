hgss.controller("editUserController", ["$scope", "$state", "httpService", "$stateParams", function ($scope, $state, httpService, $stateParams) {

	$scope.value = {
		name: $stateParams.name
	}

	var userId = $stateParams.id;
	
	$scope.save = function()
	{
		httpService.editUser($stateParams.id).then(function(res) {
			$scope.value = res.data;
			console.log(res.data);
			$state.go("app.users")
		});
	}

	$scope.back = function()
	{
		$state.go("app.details-user");
	}
}]);