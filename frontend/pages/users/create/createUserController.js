hgss.controller("createUserController", ["$scope", "$state", "httpService", function ($scope, $state, httpService) {
	
	$scope.user = {
		name: "",
		phoneNumber: "",
		adress: "",
		job: "",
		availbility: "",
		station: "",
		group: "",
		membership: "",

	}

	$scope.value = {
		name: "",
		phoneNumber: "",
		adress: "",
		job: "",
		availbility: "",
		station: "",
		group: "",
		membership: "",
	};

	$scope.save = function()
	{
		$scope.value = $scope.user;
		httpService.createNewUser($scope.user).then(response => {
			$state.go("app.users")
		});
	}

	$scope.back = function()
	{
		$state.go("app.users");
	}
}]);