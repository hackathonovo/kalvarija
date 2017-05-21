hgss.controller("editGroupController", ["$scope", "$state", "httpService", "$stateParams", function ($scope, $state, httpService, $stateParams) {

	$scope.value = {
		name: "",
		participants: ""
	}

	httpService.getGroupById($stateParams.id).then(function(res) {
		$scope.value = res.data;
	})

	httpService.getAllUsers().then(function(res) {
		$scope.users = res.data;
	})

	$scope.save = function()
	{
		httpService.editGroup($stateParams.id).then(function(res) {
			$stateParams.name = value.name;
			$stateParams.participants = value.participants;
			console.log(res.data);
			$state.go("app.group-details")
		});
	}

	$scope.back = function()
	{
		$state.go("app.group-details");
	}
}]);